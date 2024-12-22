
import axios from 'axios';
import {
	useUrlStore
} from '../store/url';
import { get_user_profile } from './userCenter';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import { useTokenStore } from '../store/token';
const urlStore = useUrlStore();
const tokenStore = useTokenStore();
// const router = useRouter();

export function login_service(loginList, loginType) {
	// return axios.post('http://127.0.0.1:4523/m1/5442936-5118081-default/user/login/', {
	// 	email: loginList.value.username,
	// 	password: loginList.value.password,
	// 	code: loginList.value.password,
	// 	login_type: loginType
	// })
	return axios.post(urlStore.url + '/user/login/', {
		email: loginList.value.email,
		password: loginList.value.password,
		code: loginList.value.password,
		login_type:loginType
	})
}

export function verify_service(email) {
	return axios.post(urlStore.url + '/user/code/', {
		email:email,
	})
}

export function refresh_token() {
	return axios.post(urlStore.url + '/user/refresh/', {
		refresh:tokenStore.refresh
	})
}

export function isInvaid(router) {
	if (tokenStore.token !== '') {
		get_user_profile().then((response) => {
			if (response.status === 200) {
				router.push('/indexPage');
			}
		}).catch((e) => {
			console.log(e);
			if (e.status === 403) {
				refresh_token().then((res) => {
					tokenStore.removeToken();
					tokenStore.setToken(res.data.access);
					get_user_profile().then((response) => {
						if (response.status === 200) {
							router.push('/indexPage');
						}
					})
				}).catch((e) => {
					ElMessage({
						message: '登录过期，请重新登录',
						type: 'warning',
						duration: 2500,
						offset: 45
					})
					router.push('/login');
				})
			}
		})
	} else {
		router.push('/login');
	}

}
