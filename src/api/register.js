import {
	ref
} from 'vue';
import axios from 'axios';
import {
	useUrlStore
} from '../store/url';
const urlStore = useUrlStore();

export function register_service(registerList) {
	return axios.post(urlStore.url + '/user/register/', {
		email: registerList.value.email,
		password: registerList.value.password,
		code: registerList.value.code,
		username:registerList.value.username
	})
}

export function verify_service_register(registerList) {
	return axios.post(urlStore.url + '/user/code/', {
		email: registerList.value.email,
	})
}
