import {
	ref
} from 'vue';
import axios from 'axios';
import {
	useUrlStore
} from '../store/url';
const urlStore = useUrlStore();

export function resetPassword_service(resetList){
	axios.post(urlStore.url+'/user/reset_password/',{
		email:resetList.value.email,
		code:resetList.value.code,
		password:resetList.value.password,
	})
}


