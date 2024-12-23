import { defineStore } from 'pinia';
import { ref } from 'vue';

// mindMap列表的缓存
export const useMindMapListStore = defineStore('mindMapList', () => {
    const mindMapList = ref([]);
    const setMindMapList = (newMindMap) => {
        mindMap.value = newMindMap
    }
    const removeMindMapList = () => {
        mindMap.value = {}
    }
    return {
        mindMapList,setMindMapList,removeMindMapList
    }
}, {
    persist:true
})