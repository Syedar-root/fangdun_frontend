import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUrlStore = defineStore('url', () => {
    const url = ref('http://120.55.183.84:8000')
    const setUrl = (newUrl) => {
        url.value = newUrl
    }
    const removeUrl = () => {
        url.value =''
    }
    return {
        url,setUrl,removeUrl
    }
}, {
    persist:true
})
// 172.20.10.7
// 192.168.63.155