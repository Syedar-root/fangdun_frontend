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
const urlStore = useUrlStore();
const tokenStore = useTokenStore();

export function getMindMap(title) {
	// return axios.get('http://127.0.0.1:4523/m1/5442936-5118081-default/mindmap/select/', {
	// 	params: {
	// 		title: title,
	// 	},
	// 	headers: {
	// 		Authorization: 'Bearer ' + tokenStore.token
	// 	}
	// })
	
	return axios.get(urlStore.url + '/mindmap/select/', {
		params: {
			title: title,
		},
		headers: {
			Authorization: 'Bearer ' + tokenStore.token
		}
	})
}

export function updateMindMap(data, title, id, picUrl) {
	return axios.put(urlStore.url + '/mindmap/update/' + id + '/', {
		data: {
			data: data,
			picUrl: picUrl
		},
		title: title,
	}, {
		headers: {
			Authorization: 'Bearer ' + tokenStore.token
		}
	})
}

export function createMindMap(title, data) {
	console.log(title, data, tokenStore.token)
	return axios.post(urlStore.url + '/mindmap/create/', {
		title: title,
		data: data,
	}, {
		headers: {
			Authorization: 'Bearer ' + tokenStore.token
		},
	})
}

// 删除思维导图
export function deleteMindMap(id) {
	return axios.delete(urlStore.url + '/mindmap/delete/' + id + '/', {
		headers: {
			Authorization: 'Bearer '+ tokenStore.token
		}
	})
}