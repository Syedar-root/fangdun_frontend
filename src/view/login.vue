<template>
	<div class="wrap">
		<div class="head">
			<span class="title">方顿</span>
			<div style="width: 300px;height: 100px;">
				<verifyInput2 :digitCount="6"></verifyInput2>
			</div>
		</div>
		<div class="main">
			<div class="form">
				<input v-model="loginList.email" type="text" class="email" placeholder="输入邮箱" />
				<input v-model="loginList.password" type="password" class="password" placeholder="输入密码"
					v-if="loginModelShow" />
				<div class="verify_mode" v-if="!loginModelShow">
					<input v-model="loginList.password" type="password" class="password_verify" placeholder="输入验证码" />
					<button class="verify" @click="sendVerify" :disabled='sendDisable'>{{ verifyText }}</button>
				</div>

				<a href="#" class="loginModel" @click="transLoginModel">
					<svg class="loginModel_icon" width="14" height="14" viewBox="0 0 14 14" fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_631_58)">
							<path fill-rule="evenodd" clip-rule="evenodd"
								d="M1.62044 0.0512695H10.9318C11.7889 0.0512695 12.4837 0.746078 12.4837 1.60317V1.68034L6.27613 4.78414L0.0685425 1.68035V1.60317C0.0685425 0.746078 0.763351 0.0512695 1.62044 0.0512695ZM0.0685425 3.07789V7.81076C0.0685425 8.66785 0.763351 9.36266 1.62044 9.36266H6.54743C6.8044 9.07078 7.16902 8.8528 7.64131 8.77063C8.15676 8.68096 8.56722 8.28972 8.68179 7.77976L8.70253 7.68508C9.13396 5.71422 11.9402 5.70195 12.3889 7.66897L12.398 7.70928C12.4043 7.73695 12.4091 7.75832 12.4141 7.77934C12.4297 7.84583 12.4503 7.91029 12.4754 7.9723C12.4809 7.9192 12.4837 7.86531 12.4837 7.81076V3.07788L6.55563 6.04193C6.37968 6.12991 6.17257 6.12991 5.99662 6.04193L0.0685425 3.07789ZM9.7646 7.91757C9.94768 7.08124 11.1385 7.07603 11.3289 7.91073L11.3378 7.95019C11.3438 7.97709 11.3496 8.00194 11.3557 8.02784C11.575 8.96193 12.3309 9.67568 13.2772 9.8403C14.1495 9.99206 14.1495 11.2443 13.2772 11.3961C12.3259 11.5616 11.5669 12.282 11.3522 13.2235L11.3289 13.3256C11.1385 14.1603 9.94768 14.1551 9.7646 13.3188L9.74542 13.2311C9.53858 12.2862 8.78063 11.5604 7.82767 11.3946C6.95698 11.2431 6.95698 9.99323 7.82767 9.84175C8.77731 9.67654 9.5333 8.95515 9.74324 8.01508L9.7574 7.95059L9.7646 7.91757Z"
								fill="black" />
						</g>
						<defs>
							<clipPath id="clip0_631_58">
								<rect width="14" height="14" fill="white" />
							</clipPath>
						</defs>
					</svg>
					{{ loginModelText }}
				</a>
				<button class="login" @click="login">登录</button>
			</div>
		</div>


		<div class="footer">
			<div class="item">
				<button class="other" @click="toSuggest">
					<svg class="other_icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M12 11.36V11.15C12 10.47 12.42 10.11 12.84 9.82001C13.25 9.54001 13.66 9.18002 13.66 8.52002C13.66 7.60002 12.92 6.85999 12 6.85999C11.08 6.85999 10.34 7.60002 10.34 8.52002M11.9955 13.75H12.0045M17 18.4301H13L8.54999 21.39C7.88999 21.83 7 21.3601 7 20.5601V18.4301C4 18.4301 2 16.4301 2 13.4301V7.42999C2 4.42999 4 2.42999 7 2.42999H17C20 2.42999 22 4.42999 22 7.42999V13.4301C22 16.4301 20 18.4301 17 18.4301Z"
							stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</button>
				<span>问题反馈</span>
			</div>
			<div class="item">
				<button class="other" @click="toRegister">
					<svg class="other_icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M12 4.79999L12 19.2M19.2 12L4.8 12" stroke="black" stroke-width="2"
							stroke-linecap="round" />
					</svg>
				</button>
				<span>注册</span>
			</div>
			<div class="item">
				<button class="other" @click="toResetPassword">
					<svg class="other_icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M3.8064 6.20641C4.70653 5.30655 5.92721 4.80104 7.2 4.80104C8.47279 4.80104 9.69346 5.30655 10.5936 6.20641L12 7.61161L13.4064 6.20641C13.8492 5.74796 14.3788 5.38229 14.9645 5.13072C15.5501 4.87916 16.1799 4.74675 16.8173 4.74121C17.4546 4.73567 18.0867 4.85712 18.6766 5.09847C19.2665 5.33982 19.8024 5.69623 20.2531 6.14691C20.7038 6.5976 21.0602 7.13353 21.3015 7.72343C21.5429 8.31333 21.6643 8.9454 21.6588 9.58274C21.6533 10.2201 21.5208 10.8499 21.2693 11.4356C21.0177 12.0212 20.652 12.5508 20.1936 12.9936L12 21.1884L3.8064 12.9936C2.90654 12.0935 2.40102 10.8728 2.40102 9.60001C2.40102 8.32722 2.90654 7.10654 3.8064 6.20641V6.20641Z"
							stroke="black" stroke-width="2" stroke-linejoin="round" />
					</svg>
				</button>
				<span>找回密码</span>
			</div>
		</div>

		<div class="toRegister" v-if="toRegisterVisiable" @animationend="handleAnimationEnd">
			<div class="circle1" style="--i:1"></div>
			<div class="circle2" style="--i:2"></div>
			<div class="circle3" style="--i:3"></div>
			<div class="circle4" style="--i:4"></div>
			<div class="circle5" style="--i:5"></div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import url(./scss/login.scss);
@import './scss/login2.scss';
</style>

<script setup>
import {
	onMounted,
	ref
} from 'vue';
import {
	ElMessage
} from 'element-plus';
import {
	login_service,
	verify_service
} from '../api/login';
import { useRouter } from 'vue-router';
import { useTokenStore } from '../store/token';
import verifyInput2 from '../components/verifyInput2.vue'
// import { nodeExplanation, nodeExplanation1 } from '../api/ai';

const router = useRouter();
const tokenStore = useTokenStore();

//登录模式转换
const loginModelShow = ref(false); //默认是验证码
const loginModelText = ref("验证码登录");

function transLoginModel() {
	loginModelShow.value = !loginModelShow.value;
	if (loginModelShow.value) {
		loginModelText.value = "验证码登录";
	} else {
		loginModelText.value = "密码登录";
	}
}
//验证码发送
const verifyText = ref('发送验证码');
const sendDisable = ref(false)

function sendVerify() {
	console.log('ok')
	//空值处理
	if (loginList.value.email === '') {
		ElMessage({
			message: '邮箱不能为空',
			type: 'warning',
			duration: 2500.,
			offset: 45
		})
		return;
	}
	sendDisable.value = true;
	//发送验证码接口
	verify_service(loginList.value.email).then((response) => {
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
	let seconds = 30
	const countdownInterval = setInterval(() => {
		verifyText.value = `重新发送（${seconds--}s）`
		if (seconds === 0) {
			clearInterval(countdownInterval);
			sendDisable.value = false;
			verifyText.value = '发送验证码'
		}
	}, 1000)
}

//登录
const loginList = ref({
	email: '',
	password: ''
});

const status = ref(null);
async function login() {
	// router.push('/mindMap');
	// router.push('/indexPage');
	let msg = '请输入邮箱和验证码';
	//空值处理
	if (loginList.value.username === '' || loginList.value.password === '') {
		if (loginModelShow.value) {
			msg = '请输入邮箱和密码';
		} else {
			msg = '请输入邮箱和验证码'
		}
		ElMessage({
			message: msg,
			type: 'error',
			duration: 2500,
			offset: 45
		})
		return;
	}
	let loginType = 'code';
	if (loginModelShow.value === false) {
		loginType = 'code';
	} else {
		loginType = 'password';
	}
	//登录接口
	status.value = '正在发送'
	await login_service(loginList, loginType).then((response) => {
		status.value = response.status;
		console.log(response.data);
		if (response.status === 200) {
			tokenStore.setToken(response.data.access);
			console.log(tokenStore.token)
			ElMessage({
				message: '登录成功',
				type: 'success',
				duration: 2500,
				offset: 45,
				onClose: () => {
					router.push('/indexPage');
				}
			})
		}
	}).catch((e) => {
		console.log(e);
		status.value = e;
		if (e.status === 400) {
			ElMessage({
				message: '邮箱或密码或验证码错误',
				type: 'error',
				duration: 2500,
				offset: 45
			})
		}
		else if (e.status === 401) {
			ElMessage({
				message: '用户不存在',
				type: 'error',
				duration: 2500,
				offset: 45
			})
		}
	})
}

//切换到注册界面
const toRegisterVisiable = ref(false);
function toRegister() {
	toRegisterVisiable.value = true;
}

function handleAnimationEnd() {
	router.push('/register')
}

//切换到修改密码页面
function toResetPassword() {
	router.push('/resetPassword');
}

//切换到问题反馈页面
async function toSuggest() {
	ElMessage({
		message: '想反馈？没门！',
		type: 'warning',
		duration: 2500,
		offset: 45
	})

	// try {
	// 	const response = await nodeExplanation('离散数学'); // 传入具体的查询参数
	// 	const reader = response.body.getReader();
	// 	const textDecoder = new TextDecoder();
	// 	while (1) {
	// 		const { done, value } = await reader.read();
	// 		if (done) break;
	// 		const str = textDecoder.decode(value);
	// 		console.log(str);
	// 	}
	// } catch (error) {
	// 	console.error('处理响应出现错误：', error);
	// }
}
</script>