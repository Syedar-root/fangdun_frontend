import {
	ref
} from 'vue';
import axios from 'axios';
import {
	useUrlStore
} from '../store/url';
const urlStore = useUrlStore();

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


