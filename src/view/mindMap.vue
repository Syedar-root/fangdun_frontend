<template>
	<div class="wrap">
		<!-- 工具栏 -->
		<div class="header">
			<div class="toolBox">
				<toolBoxVue @activeItem="handleToolBox"></toolBoxVue>
			</div>
		</div>
		<!-- 节点操作菜单 -->
		<transition name="editMenu">
			<div class="menu" v-if="menuVisiable">
				<editMenuVue @activeItem="handleEditMenu"></editMenuVue>
			</div>
		</transition>
		<!-- 思维导图 -->
		<div class="main" v-loading="mainLoading" ref="main" element-loading-background="rgba(100,100,100,0.3)"
			element-loading-text="请稍等">
			<div id="mindMapContainer"></div>
		</div>
		<!-- 节点编辑菜单 -->
		<transition name="nodeEdit">
			<div class="nodeEditMenu" v-if="editNodeMenuVisiable">
				<nodeEditMenuVue :node="activeNodes" :mindMap="mindMap"></nodeEditMenuVue>
			</div>
		</transition>
		<!-- 主题样式编辑框 -->
		<transition name="themeEdit">
			<div class="themeEditMenu" v-show="themeEditMenuShow">
				<themeEditMenuVue @theme='handleTheme' @layout="handleLayout"></themeEditMenuVue>
			</div>
		</transition>

		<!-- ai拓展学习 -->
		<transition name="aiExtended">
			<div class="aiExtendedLearning" v-if="aiExtendedLearningShow">
				<aiExtendedLearningVue :topic="aiTopic" :ancestorTopic="aiAncestorTopic" @wantBack="handleAiExtended"
					@addToNodeRemark="handleAddToNodeRemark">
				</aiExtendedLearningVue>
			</div>
		</transition>

		<!-- ai生成节点选择表单 -->
		<Transition name="aiGenerateFormAnimation">
			<div class="aiGenerateForm" v-if="aiNodeFormVisibility">
				<h3>选择你想插入的节点</h3>
				<a class="update" @click="handleAiGenerateNode">
					<el-icon>
						<Refresh />
					</el-icon>
					<span>
						换一换
					</span>
				</a>
				<div class="item" v-for="item in content">
					<input type="checkbox" :name="item" id="" :value="item" v-model="aiNodeContent">
					<div class="icon">
						<el-icon>
							<Check />
						</el-icon>
					</div>
					<label for="">{{ item }}</label>
				</div>
				<div class="opt">
					<button class="confirm" @click="handleAiNodeInsert">
						确定
					</button>
					<button class="cancel" @click="aiNodeFormVisibility = false">
						取消
					</button>
				</div>
			</div>
		</Transition>


		<!-- 备注 -->
		<div class="note" id="note" ref="note"></div>

	</div>
</template>

<style lang="scss" scoped>
@import "./scss/mindMap.scss";
</style>

<script setup>
import {
	onMounted,
	ref,
	shallowRef
} from 'vue';
import toolBoxVue from '../components/toolBox.vue';
import nodeEditMenuVue from '../components/nodeEditMenu.vue';
import themeEditMenuVue from '../components/themeEditMenu.vue';
import editMenuVue from '../components/editMenu.vue';
import aiExtendedLearningVue from '../components/ae/aiExtendedLearning.vue';
// 引入第三方库
import Hammer from 'hammerjs';
import MindMap from 'simple-mind-map';
import {
	createUid
} from 'simple-mind-map/src/utils'
import Export from 'simple-mind-map/src/plugins/Export.js'
import {
	saveDataURLToLocal,
	requestWriteExternalStoragePermission
} from '../util/saveMindMap.js'
import {
	ElMessage
} from 'element-plus';
import {
	useMindMapStore
} from '../store/mindMap';
import {
	updateMindMap
} from '../api/mindMap';
import Themes from 'simple-mind-map-plugin-themes';
import markdown from 'simple-mind-map/src/parse/markdown.js'
import { requestReadExternalStoragePermission } from '../util/importMindMap.js';
import { nodeGenerate } from '../api/ai.js';
import { useRouter } from 'vue-router';
import { Check, Refresh } from '@element-plus/icons-vue';
import { map } from 'lodash';
import { mapValues } from 'lodash';
const router = useRouter();

// 当前思维导图数据
const mindMapStore = useMindMapStore();


// 注册思维导图相关插件
MindMap.usePlugin(Export);
// 注册主题
Themes.init(MindMap)


//思维导图相关数据项
const mindMap = ref(null);
const mapData = ref({
	"data": {
		"text": "中心议题"
	},
	"children": []
});
const activeNodes = shallowRef([]);
//初始化Map
const note = ref(null);
const hideNote = () => {
	note.value.style.display = 'none';
};
function initMap() {
	mindMap.value = new MindMap({
		el: document.getElementById('mindMapContainer'),
		data: mapData.value,
		layout: (mindMapStore.mindMap.data.data.layout === undefined || mindMapStore.mindMap.data.data.layout === null)
			? 'mindMap'
			: mindMapStore.mindMap.data.data.layout,
		theme: (mindMapStore.mindMap.data.data.theme === undefined || mindMapStore.mindMap.data.data.theme === null)
			? 'minion'
			: mindMapStore.mindMap.data.data.theme.template,
		customNoteContentShow: {
			show: (content, left, top) => {
				// 在这里显示你的自定义弹窗
				note.value.innerHTML = content;
				// content表示你插入的备注的内容，left和top时弹窗应该显示的位置，你需要将你的弹窗元素设置成fixed定位
				note.value.style.position = 'fixed';
				note.value.style.left = left + 'px';
				note.value.style.top = top + 10 + 'px';
				note.value.style.zIndex = '1';
				note.value.style.display = 'block';
			},
			hide: () => {
				// 在这里隐藏你的自定义弹窗
				// 你也可以选择不在鼠标移出备注图标时隐藏弹窗，比如可以在画布被点击时隐藏
				// note.value.style.display = 'none';
			}
		},
	});

	//点击激活事件
	mindMap.value.on('node_active', (node, activeNodeList) => {
		activeNodes.value = activeNodeList;
		if (node !== null) {
			showMenu()
		}
		// if (isNodeActive(node)) {
		// 	showMenu()
		// }
	})
	//点击节点事件
	mindMap.value.on('node_click', (node, e) => {
		if (isNodeActive(node)) {
			showMenu()
		}
		// 关闭ai拓展学习
		aiExtendedLearningShow.value = false;
	})
	//点击画布事件
	mindMap.value.on('draw_click', () => {
		hideMenu();
		hideEditNodeMenu();
		// 关闭主题菜单
		themeEditMenuShow.value = false;
		// 关闭节点备注
		hideNote();
		// 关闭ai拓展学习
		aiExtendedLearningShow.value = false;
	})
	// 监听前进回退事件
	mindMap.value.on('back_forward', (index, len) => {
		isStart.value = index <= 0
		isEnd.value = index >= len - 1
	})
	//数据自动保存
	mindMap.value.on('data_change', (data) => {
		console.log(data);
		const data_all = mindMap.value.getData(true);
		saveMap(data_all);
	})
}
//判断点击的节点是不是真的在激活表中
function isNodeActive(node) {
	for (let i = 0; i < activeNodes.value.length; i++) {
		if (activeNodes.value[i].uid === node.uid) {
			return true;
		}
	}
	return false;
}
// 处理主题布局样式
function showTheme() {
	themeEditMenuShow.value = !themeEditMenuShow.value;
}
function handleTheme(value) {
	mindMap.value.setTheme(value);
	const data_all = mindMap.value.getData(true);
	saveMap(data_all);
}
function handleLayout(value) {
	mindMap.value.setLayout(value);
	const data_all = mindMap.value.getData(true);
	saveMap(data_all);
}

//处理toolBox事件
const isStart = ref(true)
const isEnd = ref(true)
const themeEditMenuShow = ref(false)
async function handleToolBox(event, file) {
	// 0 新建
	if (event === '0') {
		console.log("关闭");
		menuVisiable.value = false;
	} else if (event === '1') {
		console.log("导入");
		console.log(file);
		try {
			let data = await markdown.transformMarkdownTo(file)
			mindMap.value.setData(data)
		} catch (e) {
			console.log(e)
			ElMessage({
				message: '文件格式错误',
				type: 'error',
				duration: 2500,
				offset: 45
			})
		}
	} else if (event === '2-1') {
		console.log("导出为PNG");
		exportFile('png');
	} else if (event === '2-2') {
		console.log("导出为MD");
		exportFile('md');
	} else if (event === '3') {
		console.log("前进");
		mindMap.value.execCommand('FORWARD');
	} else if (event === '4') {
		console.log("回退");
		mindMap.value.execCommand('BACK');
	} else if (event === '5') {
		console.log("保存");
		const data = mindMap.value.getData(true);
		saveMap(data)
	} else if (event === '6') {
		console.log("主题");
		showTheme();
	}
	else if (event === '7') {
		router.push('/indexPage');
	}
}

// 导出图片
async function exportFile(type) {
	let dataUrl = await mindMap.value.export(`${type}`, false, 'hello')
	console.log(dataUrl);
	requestWriteExternalStoragePermission().then(() => {
		return saveDataURLToLocal(dataUrl, `${mindMapStore.mindMap.title}.${type}`);
	}).then((result) => {
		console.log(`${type}保存成功，结果：`, result);
		ElMessage({
			message: `已保存到：${result.filePath}`,
			type: 'success',
			duration: 5000,
			offset: 45
		})
	}).catch((error) => {
		console.error(`保存${type}出现错误：`, error);
		ElMessage({
			message: `保存失败`,
			type: 'error',
			duration: 2500,
			offset: 45
		})
	});
}

//保存
async function saveMap(data) {
	let picUrl = await mindMap.value.export('png', false, 'hello');
	let title = mindMapStore.mindMap.title;
	let id = mindMapStore.mindMap.id;
	await updateMindMap(data, title, id, picUrl).then((res) => {
		console.log(res);
		mindMapStore.removeMindMap();
		mindMapStore.setMindMap(res.data);
		// mindMap.value.updateData(res.data.data.data.root);
		mapData.value = null;
		console.log(mindMapStore.mindMap)
	}).catch((e) => {
		console.log(e);
	})
}

//菜单
const menuVisiable = ref(false)
const menuPosition = ref({
	x: 0,
	y: 0
});
// 显示菜单
function showMenu(node) {
	menuVisiable.value = true;
}
// 处理节点操作菜单事件
const aiTopic = ref('');
const aiAncestorTopic = ref('');
function handleEditMenu(event) {
	// 0 添加子节点
	if (event === '0') {
		addNode();
	}
	// 1 添加同级节点
	else if (event === '1') {
		addSameLevelNode();
	}
	// 2 删除节点
	else if (event === '2') {
		delNode();
	}
	// 3 编辑节点
	else if (event === '3') {
		editNode();
		hideMenu();
	}
	// 4 AI生成子节点
	else if (event === '4') {
		// aiNodeFormVisibility.value = true;
		handleAiGenerateNode();
		console.log('AI生成子节点');
		hideMenu();
	}
	// 5 AI扩展学习
	else if (event === '5') {
		aiTopic.value = activeNodes.value[0].getData('text');
		aiAncestorTopic.value = activeNodes.value[0].getAncestorNodes().map((node) => {
			return node.getData('text')
		})
		console.log(aiAncestorTopic.value)
		aiExtendedLearningShow.value = true;
		hideMenu();
		console.log('AI扩展学习');
	}
}


// 隐藏菜单
function hideMenu() {
	menuVisiable.value = false;
}
// 添加节点
function addNode() {
	let uid = createUid();
	mindMap.value.execCommand('INSERT_CHILD_NODE', false, [], {
		uid
	});
	// hideMenu()
}
// 插入同级节点
function addSameLevelNode() {
	mindMap.value.execCommand('INSERT_NODE');
	// hideMenu()
}
// 删除节点
function delNode() {
	mindMap.value.execCommand('REMOVE_NODE');
	hideMenu()
}
// 编辑节点
const editNodeMenuVisiable = ref(false)

function showEditNodeMenu() {
	editNodeMenuVisiable.value = true;
}

function hideEditNodeMenu() {
	editNodeMenuVisiable.value = false;
}

function editNode() {
	showEditNodeMenu();
	hideMenu()
}
// AI生成节点获取
const content = ref([
	"监督学习",
	"无监督学习",
	"半监督学习",
	"强化学习"
]);
let childList = null;
const aiNodeFormVisibility = ref(false)
async function handleAiGenerateNode() {
	aiNodeContent.value = [];
	// 开启加载动画
	mainLoading.value = true;
	// 获取父节点内容
	let parentNodeText = activeNodes.value[0].getData('text')
	// 获取父节点的所有祖先节点内容
	let ancestorNodesText = activeNodes.value[0].getAncestorNodes().map((node) => {
		return node.getData('text')
	})
	// 发送请求获取AI生成的节点内容
	await nodeGenerate(parentNodeText, ancestorNodesText).then((res) => {
		content.value = res.data.child_nodes;
		// 显示生成的节点内容表单
		aiNodeFormVisibility.value = true;
		// 隐藏加载动画
		mainLoading.value = false;
	}).catch((e) => {
		console.log(e.response.data.error);
		// 隐藏加载动画
		mainLoading.value = false;
		if (e.code === 'ERR_NETWORK') {
			ElMessage({
				message: '网络错误',
				type: 'error',
				duration: 2500,
				offset: 45
			})
		} else {
			ElMessage({
				message: e.response.data.error,
				type: 'error',
				duration: 2500,
				offset: 45
			})
		}
	})
}
// AI生成节点插入
const aiNodeContent = ref([]);
function handleAiNodeInsert() {
	console.log(aiNodeContent.value)
	// 隐藏表单
	aiNodeFormVisibility.value = false;
	childList = aiNodeContent.value.map((text) => {
		return { data: { text: text } }
	})
	mindMap.value.execCommand('INSERT_MULTI_CHILD_NODE', [], childList)
	deactiveNode();
}


// AI扩展学习页面显示
const aiExtendedLearningShow = ref(false);
function handleAiExtended(event) {
	aiExtendedLearningShow.value = event.value;
}
// 添加拓展学习内容到节点
function handleAddToNodeRemark(text) {
	activeNodes.value[0].setNote(text);
}

function deactiveNode() {
	activeNodes.value.forEach((node) => {
		node.deactivate();
	})
}

//触摸事件(画布的移动、缩放)
let hammer = null;
let currentScale = 1;
const eScale = ref(null);
const realScale = ref(0)
const main = ref(null);
function initHammer() {
	const mindMapContainer = document.getElementById('mindMapContainer');
	hammer = new Hammer(mindMapContainer);
	let mindMapView = mindMap.value.view; //获取画布视图
	mindMapView.fit();
	let x = window.innerWidth / 1.6;
	let y = window.innerHeight / 2;
	mindMapView.translateXY(-x, -y);

	//画布缩放事件 (暂不支持)
	hammer.get('pinch').set({
		enable: true
	});
	hammer.on('pinch', (e) => {
		eScale.value = e.scale;
		//放大
		if (e.scale >= 1) {
			mindMapView.setScale(currentScale + e.scale - 1, e.center.x, e.center.y)
			realScale.value = currentScale + e.scale - 1
		}
		//缩小
		else if (e.scale < 1 && e.scale > 0) {
			mindMapView.setScale(currentScale - (1 - e.scale), e.center.x, e.center.y)
			realScale.value = currentScale - (1 - e.scale)
		}
		//保存当前缩放
		hammer.on('pinchend', (e) => {
			currentScale = realScale.value
		})
		// 保证菜单位置
		if (activeNodes.value.length > 0) {
			const nodeRef = activeNodes.value[0].getRect();
			menuPosition.value.x = nodeRef.x;
			menuPosition.value.y = nodeRef.y + nodeRef.h;
		}
	})

	//画布移动
	hammer.on('pan', (e) => {
		mindMapView.translateXY(e.velocityX * 10, e.velocityY * 10);
		menuPosition.value.x += e.velocityX * 10;
		menuPosition.value.y += e.velocityY * 10;
		try {
			if (note.value.style.display !== 'none') {
				note.value.style.left = note.value.style.left.replace('px', '') - e.velocityX * -10 + 'px';
				note.value.style.top = note.value.style.top.replace('px', '') - e.velocityY * -10 + 'px';
			}
		} catch (e) {
			ElMessage({
				message: `${e}`,
				type: 'error',
				duration: 10000,
				offset: 45
			})
		}
	})
}

const mainLoading = ref(false);
let firstBackPressTime = 0;
onMounted(() => {
	document.addEventListener('deviceready', () => {
		console.log('Cordova is ready');
		requestReadExternalStoragePermission(); /* 读取外部存储权限 */
	}, false);

	console.log(mindMapStore.mindMap)
	try {
		mapData.value = mindMapStore.mindMap.data.data.root;
	} catch (e) {
		ElMessage({
			message: `${e}`,
			type: 'error',
			duration: 10000,
			offset: 45
		})
	}
	initMap();
	initHammer();


})
</script>