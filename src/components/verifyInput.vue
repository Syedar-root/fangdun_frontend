<template>
	<div class="verification-code-input">
		<input v-for="(item, index) in inputList" :key="index" type="text" class="input-box" :maxlength="1"
			@input="handleInput(index)" @keydown="handleKeyDown(index)" />
	</div>
</template>

<style lang="scss" scoped>
.verification-code-input {
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
}

.input-box {
	$size: 10vmin;
	position: relative;
	width: $size;
	height: $size;
	text-align: center;
	border-radius: 10px;
	border-width: 0;
	outline: none;
	background-color: #fff;
}
</style>

<script setup>
import {
	ref,
	watch,
	onMounted,
	defineEmits
} from 'vue';

// 定义props，接收外部传入的验证码位数以及v-model绑定的值
const props = defineProps({
	digitCount: {
		type: Number,
		default: 4
	},
	modelValue: {
		type: String,
		default: ''
	}
});

const inputList = ref(new Array(props.digitCount).fill(''));

// 定义要触发的自定义事件，这里有 'update:modelValue' 和 'input-complete'
const emits = defineEmits(['update:modelValue', 'input-complete']);

// 当组件挂载时，将父组件传递过来的modelValue值拆分并填充到inputList中（假设modelValue长度与digitCount匹配）
onMounted(() => {
	if (props.modelValue.length === props.digitCount) {
		for (let i = 0; i < props.digitCount; i++) {
			inputList.value[i] = props.modelValue[i];
		}
	}
});

// 监听输入事件
const handleInput = (index) => {
	let value = event.target.value;
	if (/^\d$/.test(value)) {
		inputList.value[index] = value;
		if (value && index < inputList.value.length - 1) {
			const nextInput = document.querySelectorAll('.input-box')[index + 1];
			if (nextInput) {
				nextInput.focus();
			}
		} else if (!value && index > 0) {
			const prevInput = document.querySelectorAll('.input-box')[index - 1];
			if (prevInput) {
				prevInput.focus();
				prevInput.value = '';
				inputList.value[index - 1] = '';
			}
		}
		// 每次输入框内容改变时，更新并向父组件发送当前的验证码值
		const verificationCode = inputList.value.join('');
		emits('update:modelValue', verificationCode);
	} else {
		event.target.value = '';
	}
};


const handleKeyDown = (index) => {
	const keyCode = event.keyCode || event.which;
	// 判断是否是删除键（Backspace键码是8，Delete键码通常是46）
	if (keyCode === 8 || keyCode === 46) {

		if (index === inputList.value.length - 1) {
			const curInput = document.querySelectorAll('.input-box')[index];
			curInput.value = '';
			inputList.value[index] = '';
			const preInput = document.querySelectorAll('.input-box')[index - 1];
			preInput.focus();
		} else if (index > 0) {
			// 如果不是最后一个输入框，清空当前输入框并将焦点移动到前一个输入框	
			inputList.value[index] = '';
			const preInput = document.querySelectorAll('.input-box')[index - 1];
			preInput.focus();
		}
		// 更新验证码值
		const verificationCode = inputList.value.join('');
		emits('update:modelValue', verificationCode);
		console.log(verificationCode);
		console.log(index);
	}
};
// 可以添加watch监听inputList的变化，当用户输入完所有位数的验证码后，触发一个自定义事件，向外传递验证码数据（可选功能）
watch(inputList.value, () => {
	if (!inputList.value.includes('')) {
		const verificationCode = inputList.value.join('');
		console.log(verificationCode)
		emits('input-complete', verificationCode);
	}
});
</script>