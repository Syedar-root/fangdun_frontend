import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
export const useTokenStore = defineStore('token', () => {
    const token = ref('')
    const refresh = ref('')
    const setToken = (newToken) => {
        token.value = newToken
    }
    const removeToken = () => {
        token.value =''
    }
    const setRefresh = (newRefresh) => {
        refresh.value = newRefresh
    }
    const removeRefresh = () => {
        refresh.value = ''
    }
    return {
        token,setToken,removeToken,refresh,setRefresh,removeRefresh
    }
}, {
    persist:true
})