import {
	ref
} from 'vue';
import axios from 'axios';
import {
	useUrlStore
} from '../store/url';
import {
	useTokenStore
} from '../store/token';
const tokenStore = useTokenStore();
const urlStore = useUrlStore();

// 获取用户信息
export function get_user_profile() {
	return axios.get(urlStore.url + '/user/profile/', {
		headers: { 'Authorization': 'Bearer ' + tokenStore.token }
	})
}

// 修改用户名
export function update_username(user_name) {
    return axios.post(urlStore.url + '/user/update_username/',
        { username: user_name},
        { headers: { 'Authorization': 'Bearer ' + tokenStore.token } }
    )
}

// 修改apikey
export function update_apikey(AiForm) {
    return axios.post(urlStore.url + '/user/update_key/',
        {
            api_key: AiForm.api_key,
            model_configuration_id: AiForm.model_configuration_id,
            custom_model: AiForm.custom_model,
            custom_base_url: AiForm.custom_base_url,
            model_selection_status: AiForm.model_selection_status,
        },
        { headers: { 'Authorization': 'Bearer '+ tokenStore.token } }
    )
}
