
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

export async function refresh_token() {
	return axios.post(urlStore.url + '/user/refresh/', {
		refresh:tokenStore.refresh
	})
}

export function isInvaid(router) {
	if (tokenStore.token !== '') {
		get_user_profile().then((response) => {
			if (response.status === 200) {
				router.push('/indexPage');
				return false;
			}
		}).catch((e) => {
			console.log(e);
			refresh_token().then((res) => {
				tokenStore.removeToken();
				tokenStore.setToken(res.data.access);
				get_user_profile().then((response) => {
					if (response.status === 200) {
						router.push('/indexPage');
						return false;
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
				return true;
			})
		})
	} else {
		router.push('/login');
		return true;
	}
}

export async function isEnpiredOrInvaid() {
    if (tokenStore.token!== '') {
        try {
            const response = await get_user_profile();
            if (response.status === 200) {
                return false;
            }
        } catch (e) {
			console.log(e);
			if (e.code === 'ERR_NETWORK') {
				ElMessage({
					message: '网络错误',
					type: 'error',
					duration: 2500,
					offset: 45
				})
				return false;
			}
            try {
                const res = await refresh_token();
                tokenStore.removeToken();
                tokenStore.setToken(res.data.access);
                return false;
            } catch (e) {
                console.log(e);
                return true;
            }
        }
    } else {
        return true;
    }
}
