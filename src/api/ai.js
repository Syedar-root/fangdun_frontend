import axios from "axios";
import {useTokenStore} from "../store/token";
import { useUrlStore } from "../store/url";
const tokenStore = useTokenStore();
const urlStore = useUrlStore();
export async function nodeExplanation(query1, query2) {
    const response = await fetch(urlStore.url + '/ai/stream-explanation/', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + tokenStore.token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ node_data: query1,ancestors_data:query2 })
    });
    // 判断请求是否成功，如果不成功则抛出错误
    if (!response.ok) {
        throw new Error(`请求失败，状态码：${response.status}`);
    }
    return response;
}

export async function nodeGenerate(query1, query2) {
    console.log('Generating');
    return axios.post(urlStore.url+'/ai/generate-child-nodes/', {
        parent_content: query1,
        ancestors_content: query2
    }, {
        headers: { Authorization: 'Bearer '+ tokenStore.token },
    }, )
}

// ai生成选择题
export async function generateChoice(query1) {
    // return axios.post('http://127.0.0.1:4523/m1/5442936-5118081-default/ai/generate-choice-questions/', {
    //     text: query1,
    // }, {
    //     headers: { Authorization: 'Bearer '+ tokenStore.token },
    // }, )
    return axios.post(urlStore.url+'/ai/generate-choice-questions/', {
        text: query1,
    }, {
        headers: { Authorization: 'Bearer '+ tokenStore.token },
    }, )
}

// ai生成判断题
export async function generateJudge(query1) {
    // return axios.post('http://127.0.0.1:4523/m1/5442936-5118081-default/ai/generate-true-or-false-questions/', {
    //     text: query1,
    // }, {
    //     headers: { Authorization: 'Bearer '+ tokenStore.token },
    // },)
    return axios.post(urlStore.url + '/ai/generate-true-or-false-questions/', {
        text: query1,
    }, {
        headers: { Authorization: 'Bearer '+ tokenStore.token },
    }, )
}

// ai生成主观题
export async function generateSubjective(query1) {
    return axios.post(urlStore.url + '/ai/generate-subjective-questions/', {
        text: query1,
    }, {
        headers: { Authorization: 'Bearer '+ tokenStore.token },
    }, )
}

export async function get_model_list() {
    return axios.get(urlStore.url + '/ai/model-configurations/', {
        headers: { Authorization: 'Bearer '+ tokenStore.token },
    }, )
}
