<template>
	<div class="themeEditMenuContainer">
		<div class="tab">
			<div class="header">
				<div class="ball-road">
					<input type="radio" name="1" id="tabSelect" class="tabSelect start" @click="handleTab" checked />
					<input type="radio" name="1" id="tabSelect" class="tabSelect end" @click="handleTab" />

					<div class="icon">
						<div class="iconContainer">
							<svg class="themeIcon" t="1732449776073" viewBox="0 0 1024 1024" version="1.1"
								xmlns="http://www.w3.org/2000/svg" p-id="3453" width="32" height="32">
								<path
									d="M876.572788 522.301623c-1.886977 12.375865-9.657964 30.331819-35.880185 45.48903-56.489572 32.697703-150.21828 83.990926-174.010149 96.958262-13.143345 24.431435-66.067718 122.221646-98.141204 178.503487-16.117073 28.124548-36.055171 34.041304-50.030463 34.041304-0.031722 0-0.031722 0-0.031722 0-14.613836 0-29.1806-6.460132-43.234687-19.218714-47.183626-42.643216-125.994576-117.105115-146.013515-136.083351-27.757181-4.732791-138.338718-23.743774-200.584388-35.752272-17.924231-3.533476-32.649608-14.07046-40.372499-29.084409-5.78782-11.256368-10.281157-30.05962 1.471514-55.658647 26.989701-59.047838 74.126254-157.557432 85.957721-182.196599-3.437286-27.117614-16.996093-135.060045-23.760147-198.905142-1.886977-17.460674 3.901867-35.096333 15.829524-48.351218 12.791327-14.278191 30.667463-21.48943 49.854455-19.426445 63.669088 6.332219 173.259042 19.426445 200.584388 22.705118 24.335245-11.879562 121.085776-58.936297 180.133613-86.34146 9.91379-4.573155 19.85828-6.92369 29.596062-6.92369 28.748764 0 52.172243 20.642133 58.328453 51.421136 12.599969 62.997799 30.93864 166.70272 35.639708 193.484689 18.851347 19.682271 91.953272 96.031147 135.060045 143.07151C872.72004 487.125473 879.307062 504.71406 876.572788 522.301623L876.572788 522.301623zM825.375755 499.085876C776.017604 445.314205 687.245791 352.977193 686.365748 352.017332c-2.942005-3.069919-4.956895-6.971785-5.676279-11.208273-0.207731-1.215688-22.193465-127.001509-36.551474-198.936865-0.799202-3.917216-4.285606-16.836457-16.196891-16.836457-3.453658 0-7.30743 1.006933-11.464099 2.942005-67.282383 31.179117-183.955662 88.180342-185.170327 88.771813-3.693112 1.790786-7.850805 2.558265-11.975752 2.01489-1.295506-0.224104-133.63765-16.165168-205.988468-23.424502-0.079818 0-0.207731 0-0.287549 0-7.30743 0-11.128455 2.89391-13.319353 5.40408-3.677762 4.124947-5.644557 9.91379-5.068436 15.110139 7.674796 72.623018 24.255427 202.934922 24.463158 204.325595 0.511653 4.109598-0.159636 8.266267-1.966795 11.960403-0.591471 1.215688-57.657164 120.04712-88.339977 187.201589-3.565199 7.754614-4.41352 14.214746-2.350534 18.131963 1.935072 3.725858 6.588045 5.820566 10.360975 6.53995 70.719668 13.718443 204.644867 36.519752 206.036563 36.727483 4.189416 0.671289 8.058536 2.686179 11.112082 5.580089 1.006933 0.87902 96.414887 91.281983 150.090367 139.889027 8.314363 7.563256 13.143345 8.106632 14.437827 8.106632 3.485381 0 8.314363-4.621251 12.727882-12.391215 36.343743-63.828724 100.011808-181.988868 100.636025-183.155437 1.983167-3.64604 5.004991-6.667863 8.650007-8.650007 1.134847-0.671289 114.418936-62.373583 178.6314-99.516528 8.698103-5.036713 14.278191-10.568706 14.94948-14.854313C834.681702 511.845481 831.49922 505.800811 825.375755 499.085876L825.375755 499.085876zM935.333076 935.670256c-4.157693 4.157693-9.689686 6.299473-15.141862 6.299473-5.548366 0-11.048637-2.142803-15.238053-6.299473l-171.915441-171.915441c-8.362458-8.394181-8.362458-21.98471 0-30.426987 8.394181-8.394181 21.98471-8.394181 30.379914 0l171.915441 171.915441C943.727257 913.684522 943.727257 927.275052 935.333076 935.670256L935.333076 935.670256z"
									p-id="3454"></path>
							</svg>
							<span class="themeText">主题</span>
						</div>

						<div class="iconContainer">
							<svg class="layoutIcon" t="1732450534448" viewBox="0 0 1024 1024" version="1.1"
								xmlns="http://www.w3.org/2000/svg" p-id="5374" width="32" height="32">
								<path
									d="M885.927617 674.300132V497.646113H540.77122V353.829924h345.157421V123.697006H138.070336v230.132918h345.157421v143.816189H138.070336v176.654019c-49.477779 12.862933-86.288076 57.497414-86.288076 110.950729 0 63.453044 51.598065 115.052133 115.054179 115.052133 63.452021 0 115.050086-51.599089 115.050086-115.052133 0-53.453316-36.810297-98.087796-86.288076-110.950729V555.14455h287.630331v119.154559c-49.491082 12.862933-86.288076 57.497414-86.288076 110.950729 0 63.453044 51.599089 115.052133 115.066459 115.052133 63.425415 0 115.054179-51.599089 115.054179-115.052133 0-53.453316-36.798017-98.087796-86.289099-110.950729V555.14455h287.630331v119.154559c-49.493129 12.862933-86.287053 57.497414-86.287053 110.950729 0 63.453044 51.569413 115.052133 115.05111 115.052133 63.424391 0 115.053156-51.599089 115.053156-115.052133-0.002047-53.453316-36.800064-98.086773-86.29217-110.949706zM195.597426 181.224096h632.804125v115.052132H195.597426V181.224096z m28.764056 604.026765c0 31.712196-25.814894 57.554719-57.526066 57.554719-31.714242 0-57.52709-25.842523-57.52709-57.554719 0-31.714242 25.812847-57.498437 57.52709-57.498437 31.712196-0.001023 57.526066 25.783171 57.526066 57.498437z m345.171747 0c0 31.712196-25.8415 57.554719-57.527089 57.554719-31.724475 0-57.539369-25.842523-57.539369-57.554719 0-31.714242 25.815917-57.498437 57.539369-57.498437 31.68559-0.001023 57.52709 25.783171 57.527089 57.498437z m287.631355 57.554719c-31.741872 0-57.528113-25.842523-57.528113-57.554719 0-31.714242 25.786241-57.498437 57.528113-57.498437 31.68559 0 57.52709 25.784195 57.52709 57.498437 0 31.712196-25.8415 57.554719-57.52709 57.554719z"
									p-id="5375"></path>
							</svg>
							<span class="layoutText">布局</span>
						</div>
						<div class="ball">
						</div>
					</div>
				</div>
			</div>
			<div class="main">

				<!-- 主题配色 -->
				<transition name="fade">
					<div class="themeGridForm" v-show="themeShow">
						<div class="themeGridFormItem" v-for="item in themeList">
							<input type="radio" name="theme" @click="selectTheme(item.value)" />
							<div class="themeOption">
								<div class="themeGridFormItemContent">
									<div class="color" v-for="i in 3" :style="{ backgroundColor: item['color' + i] }">
									</div>
								</div>
								<span>{{ item.name }}</span>
							</div>
						</div>
					</div>
				</transition>

				<!-- 布局 -->
				<transition name="soar">
					<div class="themeGridForm" v-show="!themeShow">
						<div class="themeGridFormItem" v-for="item in layoutList">
							<input type="radio" name="layout" @click="selectLayout(item.value)" />
							<div class="themeOption">
								<div class="themeGridFormItemContent">
									<img :src="item.pic" width="64" height="64">
								</div>
								<span>{{ item.name }}</span>
							</div>
						</div>
					</div>
				</transition>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import './scss/themeEditMenu.scss';
</style>

<script setup>
import {
	ref,
} from 'vue';
import logicalStructure from '../assets/grid/logicalStructure.svg';
import fishbone from '../assets/grid/fishbone.svg';
import catalogOrganization from '../assets/grid/catalogOrganization.svg';
import mindMap from '../assets/grid/mindMap.svg';
import organizationStructure from '../assets/grid/organizationStructure.svg';
import timeline from '../assets/grid/timeline.svg';
import verticalTimeline from '../assets/grid/verticalTimeline.svg';


const emit = defineEmits(['theme', 'layout'])

const themeShow = ref(true);
function handleTab() {
	themeShow.value = !themeShow.value;
}

const themeList = ref([
	{
		name: '小黄人',
		value: 'minions',
		color1: "#F8D731",
		color2: "#37A5FF",
		color3: "#3F3D33"
	},
	{
		name: '简约黑',
		value: 'simpleBlack',
		color1: "#FAFAFA",
		color2: "#222222",
		color3: "#F1F6F8"
	},
	{
		name: '课程绿',
		value: 'courseGreen',
		color1: "#10A079",
		color2: "#A2D7C6",
		color3: "#FAFAFA"
	},
	{
		name: '咖啡',
		value: 'coffee',
		color1: "#CA754F",
		color2: "#AD7B5B",
		color3: "#F5E7D8"
	},
	{
		name: '红色精神',
		value: 'redSpirit',
		color1: "#CF2C2C",
		color2: "#FFCB5B",
		color3: "#FFEEE4"

	},
	{
		name: '牛油果',
		value: 'avocado',
		color1: "#94C143",
		color2: "#E6F1DE",
		color3: "#F5FFAD"

	},
	{
		name: '秋天',
		value: 'autumn',
		color1: "#E68112",
		color2: "#FFF2DF",
		color3: "#B0BC47"
	},
	{
		name: '莫兰迪',
		value: 'morandi',
		color1: "#CF7969",
		color2: "#EFD2CF",
		color3: "#FCF5F1"
	},
	{
		name: '深夜办公室',
		value: 'lateNightOffice',
		color1: "#1799F3",
		color2: "#464E5E",
		color3: "#202531"
	},
	{
		name: '橙汁',
		value: 'orangeJuice',
		color1: "#FF6811",
		color2: "#FFFFFF",
		color3: "#070616"
	},
	{
		name: '霓虹灯',
		value: 'neonLamp',
		color1: "#FF00D6",
		color2: "#FBE9F8",
		color3: "#111154"
	},
	{
		name: '暗夜冰刃',
		value: 'darkNightLceBlade',
		color1: "#00F3FF",
		color2: "#FFFFFF",
		color3: "#001515"
	},
]);

const layoutList = ref([
	{ name: '逻辑结构图', value: 'logicalStructure', pic: logicalStructure },
	{ name: '思维导图', value: 'mindMap', pic: mindMap },
	{ name: '组织结构图', value: 'organizationStructure', pic: organizationStructure },
	{ name: '目录组织图', value: 'catalogOrganization', pic: catalogOrganization },
	{ name: '时间轴', value: 'timeline', pic: timeline },
	{ name: '鱼骨图', value: 'fishbone', pic: fishbone },
	{ name: '竖向时间轴', value: 'verticalTimeline', pic: verticalTimeline },
]);

// 动态获取本地图片地址
function getImgUrl(url) {
	return new URL(url, import.meta.url).href;
}


function selectTheme(value) {
	emit('theme', value);
}
function selectLayout(value) {
	emit('layout', value);
}
</script>