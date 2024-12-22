import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMindMapStore = defineStore('mindMap', () => {
    const mindMap = ref({ data: { data: {root:{
		"data": {
			"text": "中心议题"
		},
        "children": [
            {
                "data": {
                    "text": "二级议题1"
                },
                "children": []
            },
            {
                "data": {
                    "text": "二级议题2"
                },
                "children": []
            },
            {
                "data": {
                    "text": "二级议题3"
                },
                "children": []
            },
            {
                "data": {
                    "text": "二级议题4"
                },
                "children": []
            }
        ]}}} })
    const setMindMap = (newMindMap) => {
        mindMap.value = newMindMap
    }
    const removeMindMap = () => {
        mindMap.value = {}
    }
    return {
        mindMap,setMindMap,removeMindMap
    }
}, {
    persist:true
})