<template>
	<div class="wrap-toolBox">
		<div class=" group">
			<a class="switch" data-id="7" ref="Home">
				<svg class="itemIcon" width="35" height="35" viewBox="0 0 35 35" fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M13.125 32.0833L12.759 26.966C12.7118 26.3147 12.7994 25.6607 13.0163 25.0447C13.2332 24.4287 13.5747 23.864 14.0195 23.3859C14.4642 22.9077 15.0028 22.5264 15.6015 22.2656C16.2002 22.0049 16.8463 21.8703 17.4993 21.8703C18.1523 21.8703 18.7984 22.0049 19.3971 22.2656C19.9958 22.5264 20.5343 22.9077 20.9791 23.3859C21.4239 23.864 21.7654 24.4287 21.9823 25.0447C22.1991 25.6607 22.2867 26.3147 22.2396 26.966L21.875 32.0833"
						stroke="#1A1A1A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
					<path
						d="M3.43002 19.2704C2.91377 15.9192 2.6571 14.245 3.29002 12.759C3.92294 11.2729 5.32877 10.2579 8.13898 8.22648L10.239 6.70835C13.7346 4.18106 15.4831 2.91669 17.5015 2.91669C19.5169 2.91669 21.264 4.18106 24.7611 6.70835L26.8611 8.22648C29.6713 10.2579 31.0756 11.2744 31.71 12.759C32.3429 14.245 32.0863 15.9192 31.5715 19.269L31.1325 22.1273C30.4034 26.8756 30.0373 29.2498 28.334 30.6673C26.6306 32.0848 24.1413 32.0834 19.1625 32.0834H15.8375C10.8573 32.0834 8.36794 32.0834 6.6646 30.6673C4.96127 29.2498 4.59669 26.8756 3.86752 22.1259L3.43002 19.2704Z"
						stroke="#1A1A1A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</a>
			<a class="switch" data-id="0" @click="showAndHideLeft" ref="Switch">
				<svg class="itemIcon" width="35" height="35" viewBox="0 0 35 35" fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M18.2291 26.25C18.2291 26.25 26.9791 19.8056 26.9791 17.5C26.9791 15.1944 18.2291 8.75 18.2291 8.75M8.02081 26.25C8.02081 26.25 16.7708 19.8056 16.7708 17.5C16.7708 15.1944 8.02081 8.75 8.02081 8.75"
						stroke="#1A1A1A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</a>
			<transition name="rollIn" :style="{ '--i': 1 }">
				<a class="item" data-id="1" v-show="leftVisibility">
					<svg class="itemIcon" width="35" height="35" viewBox="0 0 35 35" fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M22.6041 23.3334C21.8662 24.0494 18.9583 25.9584 18.9583 26.9792M18.9583 26.9792C18.9583 28 21.8662 29.909 22.6041 30.625M18.9583 26.9792H30.625"
							stroke="#1A1A1A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
						<path
							d="M16.0417 32.0834H15.6435C10.8894 32.0834 8.50938 32.0834 6.85854 30.9196C6.38874 30.5901 5.96881 30.1948 5.61167 29.7456C4.375 28.1911 4.375 25.954 4.375 21.4769V17.7654C4.375 13.4444 4.375 11.2831 5.05896 9.55794C6.15854 6.78273 8.48313 4.59523 11.4319 3.55981C13.2635 2.91669 15.5575 2.91669 20.1513 2.91669C22.7733 2.91669 24.0858 2.91669 25.1329 3.28419C26.8173 3.87627 28.1458 5.12606 28.7744 6.71127C29.1667 7.6971 29.1667 8.93231 29.1667 11.4013V18.9584"
							stroke="#1A1A1A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
						<path
							d="M4.375 17.5C4.375 16.2109 4.8871 14.9746 5.79864 14.063C6.71019 13.1515 7.94651 12.6394 9.23563 12.6394C10.2069 12.6394 11.3517 12.8086 12.2952 12.5563C12.7075 12.4453 13.0834 12.2279 13.3851 11.9259C13.6869 11.6239 13.904 11.2478 14.0146 10.8354C14.2669 9.8919 14.0977 8.7471 14.0977 7.77585C14.0981 6.48699 14.6104 5.25104 15.5219 4.33982C16.4334 3.42859 17.6695 2.91669 18.9583 2.91669"
							stroke="#1A1A1A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
					<span>导入</span>
					<van-uploader style=" position: absolute;opacity: 0; width: inherit;height: 100%;"
						:after-read="afterRead" accept=".md" />
				</a>
			</transition>
			<transition name="rollIn" :style="{ '--i': 2 }">
				<div class="exportContainer" v-show="leftVisibility">
					<a class="item" data-id="2">
						<svg class="itemIcon" width="35" height="35" viewBox="0 0 35 35" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M26.9792 23.3334C27.7171 24.0494 30.625 25.9584 30.625 26.9792M30.625 26.9792C30.625 28 27.7171 29.909 26.9792 30.625M30.625 26.9792H18.9583M16.0417 32.0834H15.6435C10.8894 32.0834 8.50938 32.0834 6.85854 30.9196C6.38874 30.5901 5.96881 30.1948 5.61167 29.7456C4.375 28.1911 4.375 25.954 4.375 21.4769V17.7654C4.375 13.4444 4.375 11.2831 5.05896 9.55794C6.15854 6.78273 8.48313 4.59523 11.4319 3.55981C13.2635 2.91669 15.5575 2.91669 20.1513 2.91669C22.7733 2.91669 24.0858 2.91669 25.1329 3.28419C26.8173 3.87627 28.1458 5.12606 28.7744 6.71127C29.1667 7.6971 29.1667 8.93231 29.1667 11.4013V18.9584"
								stroke="#1A1A1A" stroke-width="2.66667" stroke-linecap="round"
								stroke-linejoin="round" />
							<path
								d="M4.375 17.5C4.375 16.2109 4.8871 14.9746 5.79864 14.063C6.71019 13.1515 7.94651 12.6394 9.23563 12.6394C10.2069 12.6394 11.3517 12.8086 12.2952 12.5563C12.7075 12.4453 13.0834 12.2279 13.3851 11.9259C13.6869 11.6239 13.904 11.2478 14.0146 10.8354C14.2669 9.8919 14.0977 8.7471 14.0977 7.77585C14.0981 6.48699 14.6104 5.25104 15.5219 4.33982C16.4334 3.42859 17.6695 2.91669 18.9583 2.91669"
								stroke="#1A1A1A" stroke-width="2.66667" stroke-linecap="round"
								stroke-linejoin="round" />
						</svg>
						<span>导出</span>
					</a>
					<div class="exportMenu">
						<transition name="rollIn_vertical" :style="{ '--i': 0 }">
							<a class="item" data-id="2-1" v-show="exportVisibility">
								<svg class="itemIcon" width="35" height="35" viewBox="0 0 35 35" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M21.875 32.0834H15.6435C10.8894 32.0834 8.50938 32.0834 6.85854 30.9196C6.38874 30.5901 5.96881 30.1948 5.61167 29.7456C4.375 28.1911 4.375 25.954 4.375 21.4769V17.7654C4.375 13.4444 4.375 11.2831 5.05896 9.55794C6.15854 6.78273 8.48313 4.59523 11.4319 3.55981C13.2635 2.91669 15.5575 2.91669 20.1513 2.91669C22.7733 2.91669 24.0858 2.91669 25.1329 3.28419C26.8173 3.87627 28.1458 5.12606 28.7744 6.71127C29.1667 7.6971 29.1667 8.93231 29.1667 11.4013V14.5834"
										stroke="#1A1A1A" stroke-width="2.66667" stroke-linecap="round"
										stroke-linejoin="round" />
									<path
										d="M4.375 17.5C4.375 16.2109 4.8871 14.9746 5.79864 14.063C6.71019 13.1515 7.94651 12.6394 9.23563 12.6394C10.2069 12.6394 11.3517 12.8086 12.2952 12.5563C12.7075 12.4453 13.0834 12.2279 13.3851 11.9259C13.6869 11.6239 13.904 11.2478 14.0146 10.8354C14.2669 9.8919 14.0977 8.7471 14.0977 7.77585C14.0981 6.48699 14.6104 5.25104 15.5219 4.33982C16.4334 3.42859 17.6695 2.91669 18.9583 2.91669M10.2083 26.25V19.6875C10.2083 19.4941 10.2852 19.3087 10.4219 19.1719C10.5586 19.0352 10.7441 18.9584 10.9375 18.9584H12.6846C13.4152 18.9584 14.1648 19.2996 14.3835 19.9967C14.5294 20.4663 14.5235 20.9067 14.3777 21.4054C14.1502 22.1784 13.351 22.6042 12.5446 22.6042H10.9375M17.5 26.25L17.6458 19.4979C17.6456 19.4668 17.6553 19.4364 17.6736 19.4112C17.6919 19.386 17.7177 19.3673 17.7474 19.3579C17.777 19.3484 17.8089 19.3487 17.8384 19.3587C17.8679 19.3687 17.8934 19.3878 17.9112 19.4134L22.2031 25.83C22.2209 25.8555 22.2465 25.8747 22.2759 25.8847C22.3054 25.8947 22.3373 25.895 22.367 25.8855C22.3967 25.8761 22.4225 25.8574 22.4408 25.8322C22.4591 25.807 22.4688 25.7766 22.4685 25.7454L22.6042 18.9584M30.625 20.2315C30.45 19.1844 30.256 18.9584 29.1667 18.9584H26.9792C26.1742 18.9584 25.811 19.6117 25.811 20.4167V24.7917C25.811 25.5967 26.1742 26.25 26.9792 26.25H29.4583C29.7678 26.25 30.0645 26.1271 30.2833 25.9083C30.5021 25.6895 30.625 25.3928 30.625 25.0834V23.9167C30.625 23.762 30.5635 23.6136 30.4541 23.5042C30.3448 23.3948 30.1964 23.3334 30.0417 23.3334H28.9479"
										stroke="#1A1A1A" stroke-width="2.66667" stroke-linecap="round"
										stroke-linejoin="round" />
								</svg>

								<span>PNG</span>
							</a>
						</transition>
						<transition name="rollIn_vertical" :style="{ '--i': 1 }">
							<a class="item" data-id="2-2" v-show="exportVisibility">
								<svg class="itemIcon" width="35" height="35" viewBox="0 0 35 35" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M13.125 32.0833C13.65 32.0833 15.5896 31.1981 17.5729 29.4263M17.5729 29.4263C19.2617 27.9154 20.9796 25.76 21.875 22.9615C23.819 16.8802 12.1523 22.9615 16.0417 28.0292C16.52 28.6533 17.0348 29.1083 17.5729 29.4263ZM17.5729 29.4263C19.9092 30.8088 22.6494 29.5663 24.5058 28.1371C25.0746 27.7011 25.3575 27.4823 25.5267 27.5508C25.6958 27.6194 25.795 28.0088 25.9933 28.7904C26.6262 31.2915 28.4973 33.3098 30.625 30.0563"
										stroke="#1A1A1A" stroke-width="2.66667" stroke-linecap="round"
										stroke-linejoin="round" />
									<path
										d="M29.1667 18.9584V11.5063C29.1667 9.00669 29.1667 7.75835 28.7758 6.7594C28.1488 5.15377 26.8188 3.88648 25.1344 3.28856C24.0873 2.91669 22.7748 2.91669 20.1513 2.91669C15.5604 2.91669 13.265 2.91669 11.4304 3.56856C8.48458 4.61565 6.15854 6.83085 5.0575 9.64106C4.375 11.3881 4.375 13.5756 4.375 17.9506V21.7088C4.375 26.2413 4.375 28.5061 5.61167 30.0796C5.9675 30.5336 6.38313 30.9303 6.85854 31.2696C7.39375 31.6502 8.00625 31.9084 8.75 32.0834"
										stroke="#1A1A1A" stroke-width="2.66667" stroke-linecap="round"
										stroke-linejoin="round" />
									<path
										d="M4.375 17.5C4.375 16.2109 4.8871 14.9746 5.79864 14.063C6.71019 13.1515 7.94651 12.6394 9.23563 12.6394C10.2069 12.6394 11.3517 12.8086 12.2952 12.5563C12.7075 12.4453 13.0834 12.2279 13.3851 11.9259C13.6869 11.6239 13.904 11.2478 14.0146 10.8354C14.2669 9.8919 14.0977 8.7471 14.0977 7.77585C14.0981 6.48699 14.6104 5.25104 15.5219 4.33982C16.4334 3.42859 17.6695 2.91669 18.9583 2.91669"
										stroke="#1A1A1A" stroke-width="2.66667" stroke-linecap="round"
										stroke-linejoin="round" />
								</svg>
								<span>MD</span>
							</a>
						</transition>
					</div>
				</div>
			</transition>
			<transition name="rollIn" :style="{ '--i': 3 }">
				<a class="item" data-id="5" v-show="leftVisibility">
					<svg class="itemIcon" width="35" height="35" viewBox="0 0 35 35" fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M8.75 29.1666H26.25M17.5 23.3333V5.83331M17.5 23.3333C19.0371 23.3333 23.3333 17.5 23.3333 17.5M17.5 23.3333C15.9629 23.3333 11.6667 17.5 11.6667 17.5"
							stroke="#1A1A1A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
					<span>保存</span>
				</a>
			</transition>
			<transition name="rollIn" :style="{ '--i': 4 }">
				<a class="item" data-id="6" v-show="leftVisibility">
					<svg class="itemIcon" width="35" height="35" viewBox="0 0 35 35" fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M4.37502 17.5C10.9375 17.5 17.5 10.9375 17.5 4.37502C17.5 10.9375 24.0625 17.5 30.625 17.5C24.0625 17.5 17.5 24.0625 17.5 30.625C17.5 24.0625 10.9375 17.5 4.37502 17.5ZM2.91669 28.4375C4.13148 28.4375 6.56252 26.0065 6.56252 24.7917C6.56252 26.0065 8.99356 28.4375 10.2084 28.4375C8.99356 28.4375 6.56252 30.8686 6.56252 32.0834C6.56252 30.8686 4.13148 28.4375 2.91669 28.4375ZM23.3334 7.29169C24.7917 7.29169 27.7084 4.37502 27.7084 2.91669C27.7084 4.37502 30.625 7.29169 32.0834 7.29169C30.625 7.29169 27.7084 10.2084 27.7084 11.6667C27.7084 10.2084 24.7917 7.29169 23.3334 7.29169Z"
							stroke="#1A1A1A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
					</svg>

					<span>主题</span>
				</a>
			</transition>
		</div>


		<div class="rightGroup">
			<a class="item" data-id="3">
				<svg class="itemIcon" width="35" height="35" viewBox="0 0 35 35" fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M16.0417 8.75H22.6042C23.466 8.75 24.3194 8.91974 25.1156 9.24954C25.9118 9.57934 26.6352 10.0627 27.2446 10.6721C27.854 11.2815 28.3374 12.0049 28.6672 12.8011C28.997 13.5973 29.1667 14.4507 29.1667 15.3125C29.1667 16.1743 28.997 17.0277 28.6672 17.8239C28.3374 18.6201 27.854 19.3435 27.2446 19.9529C26.6352 20.5623 25.9118 21.0457 25.1156 21.3755C24.3194 21.7053 23.466 21.875 22.6042 21.875H5.83337"
						stroke="#1A1A1A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
					<path
						d="M10.2084 17.5C10.2084 17.5 5.83337 20.7229 5.83337 21.875C5.83337 23.0271 10.2084 26.25 10.2084 26.25"
						stroke="#1A1A1A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
				</svg>

			</a>
			<a class="item" data-id="4">
				<svg class="itemIcon" width="35" height="35" viewBox="0 0 35 35" fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M18.9583 8.75H12.3958C10.6553 8.75 8.98613 9.4414 7.75542 10.6721C6.52472 11.9028 5.83331 13.572 5.83331 15.3125C5.83331 17.053 6.52472 18.7222 7.75542 19.9529C8.98613 21.1836 10.6553 21.875 12.3958 21.875H29.1666"
						stroke="#1A1A1A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
					<path
						d="M24.7916 17.5C24.7916 17.5 29.1666 20.7229 29.1666 21.875C29.1666 23.0271 24.7916 26.25 24.7916 26.25"
						stroke="#1A1A1A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</a>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "./scss/toolBox.scss";
</style>

<script setup>
import {
	ref,
	defineEmits,
	onMounted
} from 'vue';
import { parseDataUrl } from 'simple-mind-map/src/utils';
import { HomeFilled } from '@element-plus/icons-vue';

const fileContents = ref(null);

function afterRead(file) {
	console.log(file.content);
	let result = parseDataUrl(file.content);
	result = atob(result.base64);
	const textDecoder = new TextDecoder('utf-8');
	const decodedText = textDecoder.decode(new Uint8Array(result.split('').map(char => char.charCodeAt(0))));
	console.log(decodedText);
	emit('activeItem', '1', decodedText);
}

const emit = defineEmits(['activeItem']);
onMounted(() => {
	const items = ref(document.getElementsByClassName('item'));
	for (let i = 0; i < items.value.length; i++) {
		const item = items.value[i];
		item.addEventListener('click', () => {
			const id = item.dataset.id;
			if (id == 1) {
				if (fileContents.value === null)
					return;
				else {
					emit('activeItem', id, fileContents.value);
				}
			}
			else if (id == 2) {
				exportVisibility.value = !exportVisibility.value;
				return;
			}
			emit('activeItem', id);
		});
	}

	Switch.value.addEventListener('click', () => {
		const id = Switch.value.dataset.id;
		emit('activeItem', id);
	})
	Home.value.addEventListener('click', () => {
		const id = Home.value.dataset.id;
		emit('activeItem', id);
	})
})

const exportVisibility = ref(false)
const leftVisibility = ref(false)
const Switch = ref(null);
function showAndHideLeft() {
	leftVisibility.value = !leftVisibility.value;
	if (leftVisibility.value === true) {
		Switch.value.style.transform = 'rotate(180deg)';
	} else {
		Switch.value.style.transform = 'rotate(0deg)';
	}

}
const Home = ref(null)
</script>