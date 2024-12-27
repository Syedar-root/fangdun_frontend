<script setup>
import { computed, onActivated, onMounted, ref } from 'vue';
import MarkdownIt from 'markdown-it';
import { nodeExplanation } from '../../api/ai';
import { ElMessage } from 'element-plus';
const markdown = new MarkdownIt();
const props = defineProps({
    topic: {
        type: String,
    },
    ancestorTopic: {
        type: Array,
    }
})
const emits = defineEmits(['addToNodeRemark', 'learnText']);

const queryText = ref('');
const learnText = computed(() => {
    return markdown.render(queryText.value)
})
const addBttnShow = ref(false);
const loading = ref(false);

// 添加到节点备注
const addToNodeRemark = () => {
    try {
        emits('addToNodeRemark', learnText.value);
        ElMessage({
            message: '添加成功',
            type: 'success',
            duration: 2500,
            offset: 45
        })
    } catch (error) {
        console.error('处理响应出现错误：', error);
    }

}

onMounted(async () => {
    console.log('组件挂载完成')
    console.log(props.ancestorTopic)
    try {
        const response = await nodeExplanation(props.topic, props.ancestorTopic); // 传入具体的查询参数
        loading.value = false;
        const reader = response.body.getReader();
        const textDecoder = new TextDecoder();
        while (1) {
            const { done, value } = await reader.read();
            if (done) break;
            const str = textDecoder.decode(value);
            console.log(str);
            queryText.value += str;
            emits('learnText', queryText.value);
        }
        addBttnShow.value = true;
    } catch (error) {
        console.error('处理响应出现错误：', error);
        if (error.code === 'ERR_NETWORK') {
            ElMessage({
                message: '网络错误',
                type: 'error',
                duration: 2500,
                offset: 45
            })
        } else {
            ElMessage({
                message: error.response.data.error,
                type: 'error',
                duration: 2500,
                offset: 45
            })
        }
        addBttnShow.value = false;
        loading.value = false;
    }
})
</script>

<template>
    <div class="learnContainer">
        <div class="learnContent" v-loading="loading" element-loading-background="rgba(255,255,255,0.2)">
            <div v-html="learnText">
            </div>
            <transition name="addBttnShow">
                <button v-show="addBttnShow" @click="addToNodeRemark">添加节点笔记</button>
            </transition>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../assets/style/variables.scss";

$learnContentBackgroundColor: $Color7;
$learnContentButtonColor: $Color1;
$textColor-light: $Color5;


.learnContainer {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;

    /* 隐藏滚动条 */
    &::-webkit-scrollbar {
        display: none;
    }
}

.learnContent {
    position: relative;
    width: 70%;
    height: 90%;
    background: $learnContentBackgroundColor;
    border-radius: 10px;
    padding-left: 10%;
    padding-right: 10%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: start;

    div {
        width: 100%;
        height: auto;
        font-size: 2.5vmin;

        @media screen and (max-width: 768px) {
            font-size: 4vmin;
        }

        overflow-y: scroll;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    button {
        position: relative;
        align-self: flex-end;
        margin-top: 5%;
        margin-bottom: 5%;
        width: 45%;
        min-height: 8%;
        text-align: center;
        border-radius: 10px;
        border-width: 0;
        background-color: $learnContentButtonColor;
        color: $textColor-light;
    }
}

.addBttnShow-enter-from,
.addBttnShow-leave-to {
    transform: translateX(100%);
}

.addBttnShow-enter-active,
.addBttnShow-leave-active {
    transition: 1s;
}
</style>