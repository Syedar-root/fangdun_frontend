<template>
	<div class="wrap-nodeEditMenu">
		<div class="editMenuForm">
			<span>文字样式</span>
			<div class="editMenuFormItem">
				<label for="">字体</label>
				<el-select v-model="nodeStyle.fontFamily" placeholder="Select" size="large" style="width: 65%;">
					<el-option v-for="item in fontFamilyList" :key="item.value" :label="item.label"
						:value="item.value" />
				</el-select>
				<el-color-picker size="large" v-model="nodeStyle.color" color-format="hex"></el-color-picker>
			</div>
			<div class="editMenuFormItem">
				<label for="">字号</label>
				<el-input-number v-model="nodeStyle.fontSize" :min="1" :max="256" size="large"></el-input-number>
			</div>
			<div class="editMenuFormItem">
				<label for="">行高</label>
				<el-input-number v-model="nodeStyle.lineHeigy" :min="1" :max="256" size="large"></el-input-number>
			</div>
			<span>边框样式</span>
			<div class="editMenuFormItem">
				<label for="">线宽</label>
				<el-input-number v-model="nodeStyle.borderWidth" :min="0" :max="5" size="large"></el-input-number>
				<el-color-picker v-model="nodeStyle.borderColor" color-format="hex" size="large"></el-color-picker>
			</div>
			<span>节点背景样式</span>
			<div class="editMenuFormItem">
				<label for="">背景颜色</label>
				<el-color-picker v-model="nodeStyle.fillColor" color-format="hex" size="large"></el-color-picker>
			</div>
			<span>节点形状样式</span>
			<div class="editMenuFormItem">
				<label for="">形状</label>
				<el-select v-model="nodeStyle.shape" placeholder="Select" size="large" style="width: 65%;">
					<el-option v-for="item in shapeList" :key="item.value" :label="item.name" :value="item.value" />
				</el-select>
			</div>
			<span>节点连线样式</span>
			<div class="editMenuFormItem">
				<label for="">线宽</label>
				<el-input-number v-model="nodeStyle.lineWidth" :min="1" :max="5" size="large"></el-input-number>
				<el-color-picker v-model="nodeStyle.lineColor" color-format="hex" size="large"></el-color-picker>
			</div>
			<div class="editMenuFormItem">
				<label for="">线条</label>
				<el-select v-model="nodeStyle.lineDasharray" placeholder="Select" size="large" style="width: 65%;">
					<el-option v-for="item in lineDasharrayList" :key="item.value" :label="item.name"
						:value="item.value" />
				</el-select>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "./scss/nodeEditMenu.scss";
</style>

<script setup>
import {
	onMounted,
	ref,
	watch
} from 'vue';
const props = defineProps({
	node: Object,
	mindMap: Object,
})

const nodeStyle = ref({
	fontFamily: '',
	fontSize: '',
	lineHeight: '',
	color: '',
	borderColor: '',
	borderWidth: '',
	borderDasharray: '',
	fillColor: '',
	shape: '',
	lineColor: '',
	lineWidth: '',
	lineDasharray: ''
})

function initNodeEditMenu() {
	nodeStyle.value.fontFamily = props.node[0].getStyle('fontFamily');
	nodeStyle.value.fontSize = props.node[0].getStyle('fontSize');
	nodeStyle.value.lineHeight = props.node[0].getStyle('lineHeight');
	nodeStyle.value.color = props.node[0].getStyle('color');
	nodeStyle.value.borderColor = props.node[0].getStyle('borderColor');
	nodeStyle.value.borderWidth = props.node[0].getStyle('borderWidth');
	nodeStyle.value.borderDasharray = props.node[0].getStyle('borderDasharray');
	nodeStyle.value.fillColor = props.node[0].getStyle('fillColor');
	nodeStyle.value.shape = props.node[0].getStyle('shape');
	nodeStyle.value.lineColor = props.node[0].getStyle('lineColor');
	nodeStyle.value.lineWidth = props.node[0].getStyle('lineWidth');
	nodeStyle.value.lineDasharray = props.node[0].getStyle('lineDasharray');
}

const fontFamilyList = ref([{
	label: '宋体',
	value: 'SimSun'
}])
const shapeList = ref([{
	name: '矩形',
	value: 'rectangle'
},
{
	name: '菱形',
	value: 'diamond'
},
{
	name: '平行四边形',
	value: 'parallelogram'
},
{
	name: '圆角矩形',
	value: 'roundedRectangle'
},
{
	name: '八角矩形',
	value: 'octagonalRectangle'
},
{
	name: '外三角矩形',
	value: 'outerTriangularRectangle'
},
{
	name: '内三角矩形',
	value: 'innerTriangularRectangle'
},
{
	name: '椭圆',
	value: 'ellipse'
},
{
	name: '圆',
	value: 'circle'
}
])
const lineDasharrayList = ref([{
	name: '实线',
	value: 'none'
},
{
	name: '虚线',
	value: '5,5'
},])

watch(nodeStyle.value, () => {
	props.node[0].setStyles(nodeStyle.value);
})

onMounted(() => {
	console.log(props.node[0])
	console.log(props.node[0].nodeData.data.text)
	initNodeEditMenu();

})
</script>