<template>
	<div class="wrap">
		<!-- 顶栏 -->
		<div class="header">
			<div class="left" @click="goToUserCenter">
				<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M9.59286 22.5779C7.52932 23.8058 2.1189 26.3141 5.41474 29.4539C7.02328 30.9866 8.81557 32.0833 11.0687 32.0833H23.9283C26.1829 32.0833 27.9752 30.9866 29.5837 29.4539C32.8795 26.3141 27.4691 23.8058 25.4056 22.5779C23.0107 21.1631 20.2801 20.4168 17.4985 20.4168C14.7169 20.4168 11.9878 21.1631 9.59286 22.5779ZM24.0624 9.47913C24.0624 11.2196 23.371 12.8888 22.1403 14.1195C20.9096 15.3502 19.2404 16.0416 17.4999 16.0416C15.7595 16.0416 14.0903 15.3502 12.8596 14.1195C11.6288 12.8888 10.9374 11.2196 10.9374 9.47913C10.9374 7.73864 11.6288 6.06945 12.8596 4.83874C14.0903 3.60803 15.7595 2.91663 17.4999 2.91663C19.2404 2.91663 20.9096 3.60803 22.1403 4.83874C23.371 6.06945 24.0624 7.73864 24.0624 9.47913Z"
						stroke="#1A1A1A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</div>
			<div class="center">
				<div class="searchIcon">
					<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M38 38L29.3 29.3M34 18C34 26.8366 26.8366 34 18 34C9.16344 34 2 26.8366 2 18C2 9.16344 9.16344 2 18 2C26.8366 2 34 9.16344 34 18Z"
							stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</div>
				<input class="searchInput" type="text" v-model="searchTitle" @blur="searchMindMap" />
			</div>
			<div class="right">
				<svg width="45" height="50" viewBox="0 0 45 50" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M18.9358 4.76649C21.1601 3.56509 23.8399 3.56509 26.0642 4.76649L38.5643 11.518C40.9888 12.8276 42.5 15.3613 42.5 18.117V32.9347C42.5 35.8226 40.8418 38.454 38.2367 39.7003L25.7367 45.6802C23.69 46.6594 21.31 46.6594 19.2633 45.6802L6.76335 39.7003C4.15817 38.454 2.5 35.8226 2.5 32.9347V18.117C2.5 15.3613 4.01116 12.8276 6.43575 11.518L18.9358 4.76649Z"
						stroke="black" stroke-width="5" />
					<circle cx="22.6666" cy="25" r="5.83333" stroke="black" stroke-width="5" />
				</svg>

			</div>
		</div>

		<!-- 主体 -->
		<div class="main">
			<div class="table">
				<div class="item" v-for="(item, index) in mindMapList">
					<div class="pic" @click="toMindMap(item)">
						<img class="img" :src="item.data.picUrl" alt="" />
					</div>
					<span>
						{{ item.title }}
						<el-icon @click="showOptMap(item, item.id)" :id="'optMap' + item.id">
							<ArrowDown />
						</el-icon>
					</span>
				</div>
				<!-- 添加项 -->
				<div class="addItem" @click="showAddNewMindMapForm">
					<div class="pic">
						<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M20.7608 7.7175C20.7608 6.95917 20.7608 6.58 20.6777 6.26938C20.5662 5.85483 20.3477 5.47685 20.0442 5.1733C19.7407 4.86975 19.3627 4.65129 18.9481 4.53979C18.1285 4.32104 16.8715 4.32104 16.0519 4.53979C15.6371 4.65107 15.2588 4.86943 14.955 5.173C14.6511 5.47656 14.4325 5.85465 14.3208 6.26938C14.2377 6.58 14.2377 6.95917 14.2377 7.7175C14.2377 9.25459 14.2377 13.284 13.7594 13.7608C13.2825 14.2392 9.25312 14.2392 7.71604 14.2392C6.95771 14.2392 6.57854 14.2392 6.26791 14.3223C5.85336 14.4338 5.47539 14.6523 5.17184 14.9558C4.86829 15.2594 4.64983 15.6373 4.53833 16.0519C4.31958 16.8715 4.31958 18.13 4.53833 18.9481C4.76437 19.7925 5.42354 20.4502 6.26791 20.6777C6.57854 20.7608 6.95771 20.7608 7.71604 20.7608C9.25312 20.7608 13.2825 20.7608 13.7594 21.2377C14.2377 21.716 14.2377 22.4846 14.2377 24.0231C14.2377 24.78 14.2377 28.42 14.3208 28.7306C14.4323 29.1452 14.6508 29.5232 14.9543 29.8267C15.2579 30.1303 15.6359 30.3487 16.0504 30.4602C16.87 30.679 18.1285 30.679 18.9467 30.4602C19.3612 30.3487 19.7392 30.1303 20.0427 29.8267C20.3463 29.5232 20.5648 29.1452 20.6762 28.7306C20.7594 28.42 20.7594 24.78 20.7594 24.0217C20.7594 22.4846 20.7594 21.716 21.2362 21.2377C21.7146 20.7608 25.744 20.7608 27.281 20.7608C28.0394 20.7608 28.4185 20.7608 28.7292 20.6777C29.1437 20.5662 29.5217 20.3478 29.8252 20.0442C30.1288 19.7407 30.3473 19.3627 30.4587 18.9481C30.6775 18.1285 30.6775 16.8715 30.4587 16.0519C30.3473 15.6373 30.1288 15.2594 29.8252 14.9558C29.5217 14.6523 29.1437 14.4338 28.7292 14.3223C28.4185 14.2392 28.0394 14.2392 27.281 14.2392C25.744 14.2392 21.7146 14.2392 21.2377 13.7608C20.7594 13.284 20.7594 9.25459 20.7594 7.7175"
								stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</div>
					<span>新建...</span>
				</div>
			</div>
		</div>

		<Transition name="fade">
			<div class="mask" v-show="addNewMindMapFormVisiable" @click="addNewMindMapFormVisiable = false"
				v-loading="loading" element-loading-text="创建中..." element-loading-background="rgba(122, 122, 122, 0.8)">
				<Transition name="optMenuShow">
					<div class="addMapForm" v-if="addNewMindMapFormVisiable" @click.stop>
						<h2>新建导图</h2>
						<input type="text" placeholder="起个名字吧" v-model="newMindMapTitle" />
						<button class="addMapFormBttn b1" @click="addNewMindMap">创建</button>
						<button class="addMapFormBttn b2" @click="hideAddNewMindMapForm">取消</button>
					</div>
				</Transition>
			</div>
		</Transition>
		<transition name="fade">
			<div class="mask" v-show="optMapMaskShow" @click="showOptMap(form, form.id)">
				<transition name="optMenuShow">
					<div class="optMenu" v-if="optMapShow" @click.stop>
						<div class="optMenuItem">
							<input type="text" v-model="form.title" @blur='renameMindMap()'>
						</div>
						<div class="optMenuItem" @click="delMindMap()">
							<button>
								删除导图
							</button>
						</div>
					</div>
				</transition>
			</div>
		</transition>
	</div>
</template>

<style lang="scss" scoped>
@import "./scss/indexPage.scss";
</style>

<script setup>
import {
	onMounted,
	ref
} from 'vue';
import {
	getMindMap,
	createMindMap,
	updateMindMap,
	deleteMindMap
} from '../api/mindMap';
import {
	ElMessage
} from 'element-plus';
import {
	ArrowDown
} from '@element-plus/icons-vue';
import {
	useMindMapStore
} from '../store/mindMap';
import { useTokenStore } from '../store/token';
import {
	useRouter
} from 'vue-router';
import { isInvaid, isEnpiredOrInvaid } from '../api/login'

const mindMapStore = useMindMapStore();
const router = useRouter()
const mindMapList = ref([])
async function initIndexPage() {
	await getMindMap().then((res) => {
		console.log(res)
		mindMapList.value = res.data
	}).catch((e) => {
		ElMessage({
			message: '获取列表状态失败',
			type: 'error',
			duration: 2500,
			offset: 45
		})
	})
}

// 搜索思维导图
const searchTitle = ref('');
async function searchMindMap() {
	// 执行搜索逻辑
	console.log('搜索思维导图:', searchTitle.value);
	await getMindMap(searchTitle.value).then((res) => {
		console.log(res)
		mindMapList.value = res.data
		if (res.data.length <= 0) {
			ElMessage({
				message: `没有找到“${searchTitle.value}”的结果`,
				type: 'error',
				duration: 2500,
				offset: 45
			})
		}
	}).catch((e) => {
		ElMessage({
			message: e.message,
			type: 'error',
			duration: 2500,
			offset: 45
		})
	})
}

// 创建新的思维导图
const addNewMindMapFormVisiable = ref(false);
const newMindMapTitle = ref('')
const loading = ref(false);

function showAddNewMindMapForm() {
	addNewMindMapFormVisiable.value = true;
}

function hideAddNewMindMapForm() {
	addNewMindMapFormVisiable.value = false;
}
const newMapData = {}
async function addNewMindMap() {
	loading.value = true;
	await createMindMap(newMindMapTitle.value, newMapData).then((res) => {
		console.log(res)
		initIndexPage()
		mindMapStore.removeMindMap();
		mindMapStore.setMindMap(res.data)
		ElMessage({
			message: '创建成功',
			type: 'success',
			duration: 2500,
			offset: 45,
			onClose: () => {
				loading.value = false;
				router.push('/mindMap')
			}
		})
	}).catch((e) => {
		console.log(e);
		loading.value = false;
		ElMessage({
			message: '创建失败',
			type: 'error',
			duration: 2500,
			offset: 45
		})
	})
}

// 显示操作思维导图菜单
const optMapMaskShow = ref(false);
const optMapShow = ref(false);
const form = ref({});
function showOptMap(item, index) {
	const optMap = document.getElementById(`optMap${index}`);
	// 关闭其他已打开的操作菜单（假设初始所有都是false）
	mindMapList.value.forEach((mapItem, mapIndex) => {
		if (mapIndex !== index) {
			mapItem.optMapShow = false;
		}
	});
	if (optMapShow.value) {
		optMap.style.transform = 'rotate(0deg)';
		optMapShow.value = false;
		optMapMaskShow.value = false;
	} else {
		optMap.style.transform = 'rotate(180deg)';
		optMapMaskShow.value = true;
		optMapShow.value = true;
		form.value = item;
		console.log(form.value)
	}
}
// 重命名思维导图
async function renameMindMap() {
	console.log(form.value);
	let data = form.value.data.data;
	let picUrl = form.value.data.picUrl;
	let id = form.value.id
	let title = form.value.title;
	console.log('ok');
	await updateMindMap(data, title, id, picUrl).then((res) => {
		ElMessage({
			message: '重命名成功',
			type: 'success',
			duration: 2500,
			offset: 45
		})
		initIndexPage()
	}).catch((e) => {
		console.log(e);;
		ElMessage({
			message: '重命名失败' + e.message,
			type: 'error',
			duration: 2500,
			offset: 45
		})
	})
	showOptMap(item);
}

// 删除思维导图
async function delMindMap(item) {
	await deleteMindMap(item.id).then((res) => {
		console.log(res)
		ElMessage({
			message: '删除成功',
			type: 'success',
			duration: 2500,
			offset: 45
		})
		optMapShow.value = false;
		initIndexPage()
	}).catch((e) => {
		console.log(e);
		ElMessage({
			message: '删除失败',
			type: 'error',
			duration: 2500,
			offset: 45
		})
	})
}
//点击进入
function toMindMap(data) {
	console.log(data);
	mindMapStore.removeMindMap();
	mindMapStore.setMindMap(data)
	console.log(mindMapStore.mindMap)
	router.push('/mindMap')
}

// 跳转用户中心
function goToUserCenter() {
	router.push('/userCenter')
}

const tokenStore = useTokenStore();

onMounted(async () => {
	let result = await isEnpiredOrInvaid();
	if (result) {
		ElMessage({
			message: '登录已过期，请重新登录',
			type: 'error',
			duration: 2500,
			offset: 45
		})
		router.push('/login')
	} else if (result === false) {
		await initIndexPage()
	}
	console.log(mindMapList)
	document.addEventListener('deviceready', () => {
		window.StatusBar.backgroundColorByHexString('#5ebaf9');
	}, false);
})
</script>