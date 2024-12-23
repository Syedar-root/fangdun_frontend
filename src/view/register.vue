<template>
	<div class="wrap">
		<div class="header">
			<div class="back_icon" @click="router.push('/login')">
				<ArrowLeft />
			</div>
			<span class="title">注册</span>
		</div>
		<div class="main">
			<div class="form">
				<div class="item1" style="--i: 1">
					<input type="text" v-model="registerList.username" placeholder="用户名" />
					<el-icon class="label_icon">
						<User />
					</el-icon>
					<span v-if="errors.username" class="error-message">{{ errors.username }}</span>
				</div>
				<div class="item2" style="--i: 2">
					<el-icon class="label_icon">
						<Key />
					</el-icon>
					<input type="text" v-model="registerList.password" placeholder="密码" />
					<span v-if="errors.password" class="error-message">{{ errors.password }}</span>
				</div>
				<div class="item1" style="--i: 3">
					<input type="text" v-model="registerList.confirmPassword" placeholder="确认密码" />
					<el-icon class="label_icon">
						<CircleCheck />
					</el-icon>
					<span v-if="errors.confirmPassword" class="error-message">{{ errors.confirmPassword }}</span>
				</div>
				<div class="item2" style="--i: 4">
					<el-icon class="label_icon">
						<Message />
					</el-icon>
					<input type="text" v-model="registerList.email" placeholder="邮箱" />
					<span v-if="errors.email" class="error-message">{{ errors.email }}</span>
				</div>
				<div class="button_item">
					<button class="toVerify_button" @click="toVerify">
						<el-icon>
							<Right />
						</el-icon>
					</button>
				</div>
			</div>
		</div>
	</div>

	<div class="next_wrap" v-if="verifyViewShow" v-loading="loading" element-loading-backgound="rbga(100,100,100,0.2)">
		<div class="verify_text">
			<span>
				<div class="back_icon" @click="verifyViewShow = false">
					<ArrowLeft />
				</div>
				邮箱验证
			</span>
			<p>验证码已发送至：{{ registerList.email }}</p>
			<a @click="toVerify">{{ verifyText }}</a>
		</div>
		<div class="verify_input">
			<!-- <verifyInputVue v-model="registerList.code" :digitCount="4" @input-complete="handleInputComplete">
			</verifyInputVue> -->
			<verifyInput2 class="verifyInput2" v-if="verifyViewShow" :digitCount="6"
				@input-complete="handleInputComplete"></verifyInput2>
			<span v-if="errors.code" class="error-message">{{ errors.code }}</span>
			<!-- <button style="width: 100px; height: 100px;" @click="() => { console.log(registerList) }"></button> -->
		</div>
	</div>
</template>

<script setup>
import {
	ref
} from 'vue';
import verifyInputVue from '../components/verifyInput.vue';
import verifyInput2 from '../components/verifyInput2.vue';
import { useRouter } from 'vue-router';
import validationRules from '../util/validationRule.js'
import { verify_service_register, register_service } from '../api/register';
import { login_service } from '../api/login.js';
import { ElMessage } from 'element-plus';
import { useTokenStore } from '../store/token';
import { ArrowLeft } from '@element-plus/icons-vue';

const tokenStore = useTokenStore();
const router = useRouter();

const registerList = ref({
	email: '',
	password: '',
	confirmPassword: '',
	code: [],
	username: '',
	loginType: 'password'
})



// 显示安全验证页
const verifyViewShow = ref(false)
const errors = ref({});
const verifyText = ref('发送验证码')
const sendDisable = ref(true);
function toVerify() {
	const {
		username,
		password,
		confirmPassword,
		email,
		code
	} = registerList.value;
	//把错误列表清空
	errors.value = {};
	console.log(email);

	// 验证用户名
	if (!validationRules.username.rule.test(username)) {
		errors.value.username = validationRules.username.message;
	}
	// 验证密码
	if (!validationRules.password.rule.test(password)) {
		errors.value.password = validationRules.password.message;
	}
	// 验证确认密码与密码是否一致
	if (!validationRules.confirmPassword.compare(password, confirmPassword)) {
		errors.value.confirmPassword = validationRules.confirmPassword.message;
	}
	// 验证邮箱
	if (!validationRules.email.rule.test(email)) {
		errors.value.email = validationRules.email.message;
	}
	if (Object.keys(errors.value).length === 0) {
		// 所有验证通过，执行后续操作，比如显示验证页面或者提交表单等
		verifyViewShow.value = true;
		let seconds = 10
		sendDisable.value = true;
		const countdownInterval = setInterval(() => {
			verifyText.value = `重试（${seconds--}s）`
			if (seconds === 0) {
				clearInterval(countdownInterval);
				sendDisable.value = false;
				verifyText.value = '重新发送验证码'
			}
		}, 1000)
		//请求验证码接口
		verify_service_register(registerList).then((response) => {
			if (response.status === 200) {
				ElMessage({
					message: '验证码发送成功',
					type: 'success',
					duration: 2500,
					offset: 45
				});
			}
		}).catch((e) => {
			console.log(e);
		})
	} else {
		// 有验证不通过的项，展示错误提示信息，可以通过UI组件来显示具体的错误提示，比如Toast提示或者在对应输入框下方显示红色文字提示等
		console.log(errors);
	}
}

//验证码输满自动注册登录
const loading = ref(false)
async function handleInputComplete(code) {
	registerList.value.code = code;
	console.log(registerList.value);
	loading.value = true;
	await register_service(registerList).then((response) => {
		if (response.status === 201) {
			ElMessage({
				message: '注册成功',
				type: 'success',
				duration: 2500,
				offset: 45,
				onClose: login(),
			});
			loading.value = false;
		}
	}).catch((e) => {
		ElMessage({
			message: '注册失败',
			type: 'error',
			duration: 2500,
			offset: 45
		});
		console.log(e)
		loading.value = false;
	})
}

function login() {
	login_service(registerList, registerList.value.loginType).then((res) => {
		//更新token
		tokenStore.setToken(res.data.access);
		if (res.status === 200) {
			// ElMessage({
			// 	message: '登录成功',
			// 	type: 'success',
			// 	duration: 2500,
			// 	offset: 45,
			// });
			router.push('/indexPage');
		}
	}).catch((e) => {
		console.log(e);
		ElMessage({
			message: '登录失败',
			type: 'error',
			duration: 2500,
			offset: 45
		});
	})
}

</script>

<style lang="scss" scoped>
@import './scss/register.scss';
@import './scss/registerAnimation.scss'
</style>