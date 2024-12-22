<template>
	<div class="wrap">
		<div class="header">
			重置密码（前端不想做页面）
		</div>
		<div class="main">
			<div class="form">
				<div class="formItem">
					<label for="">邮箱</label>
					<input type="text" v-model="resetList.email" />
				</div>
				<div class="formItem">
					<label for="">验证码</label>
					<input type="text" v-model="resetList.code" />
					<button @click="sendVerify" :disabled="sendDisable">{{verifyText}}</button>
				</div>
				<div class="formItem">
					<label for="">新密码</label>
					<input type="text" v-model="resetList.password" />
				</div>
				<div class="formItem" @click="resetPassword">
					<button @click="">确认</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
</style>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		verify_service
	} from '../api/login.js'
	import {
		resetPassword_service
	} from '../api/resetPassword.js';

	const resetList = ref({
		email: '',
		code: '',
		password: ''
	})

	const verifyText = ref("发送验证码");
	const sendDisable = ref(false);

	function sendVerify() {
		sendDisable.value = true;
		let seconds = 30
		const countdownInterval = setInterval(() => {
			verifyText.value = `重新发送（${seconds--}s）`
			if (seconds === 0) {
				clearInterval(countdownInterval);
				sendDisable.value = false;
				verifyText.value = '发送验证码'
			}
		}, 1000)
		//发送验证码接口
		verify_service(resetList.value.email).then((response) => {
			if (response.status === 200) {
				ElMessage({
					message: '验证码发送成功',
					type: 'success',
					duration: 2500,
					offset: 45
				})
			}
		}).catch((e) => {
			ElMessage({
				message: '验证码发送失败',
				type: 'error',
				duration: 2500,
				offset: 45
			})
		})
	}

	function resetPassword() {
		resetPassword(resetList).then((res) => {
			if (response.status === 200) {
				ElMessage({
					message: '密码修改成功',
					type: 'success',
					duration: 2500,
					offset: 45
				})
			}
		}).catch((e) => {
			ElMessage({
				message: '密码修改失败',
				type: 'error',
				duration: 2500,
				offset: 45
			})
		})
	}
</script>