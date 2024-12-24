<script setup>
import { onMounted, ref } from 'vue';
import { generateSubjective } from '../../api/ai';
import { ElMessage } from 'element-plus';


const questions = ref([])

const props = defineProps({
    text: {
        type: String,
    }
})
const loading = ref(false)

onMounted(() => {
    console.log(props.text);
    loading.value = true;
    generateSubjective(props.text).then(res => {
        console.log(res);
        questions.value = res.data.questions_and_answers;
        loading.value = false;
    }).catch(err => {
        ElMessage({
            message: '生成失败',
            type: 'error',
            duration: 3000
        })
        loading.value = false;
    })
})

// 主观题容器实例
const sc = ref(null);
const translateX = ref(0);
function toRight() {
    if (translateX.value > -4) {
        translateX.value = translateX.value - 1;
        sc.value.style.transform = `translateX(${translateX.value}00%)`;
    }
}
function toLeft() {
    if (translateX.value < 0) {
        translateX.value = translateX.value + 1;
        sc.value.style.transform = `translateX(${translateX.value}00%)`;
    }
}

function showAnwser(item, itemIndex) {
    let question = document.getElementsByName(item.question + itemIndex)[0];
    console.log(question);
    let answerMask = question.getElementsByClassName('answerMask')[0];
    console.log(answerMask);
    answerMask.style.display = 'none';
    let answer = question.querySelector('p');
    console.log(answer);
    answer.style.display = 'block';
}
</script>

<template>
    <div class="subjectiveQuestionsContainer" ref="sc" v-loading="loading"
        element-loading-background="rgba(100,100,100,0.3)" element-loading-text="生成中，请稍等">
        <div class="subjectiveQuestionsContent" v-for="(item, itemIndex) in questions"
            :name="item.question + itemIndex">
            <div class="header">
                <div class="header">
                    <div class="questionContent">
                        <span>
                            <h3>{{ itemIndex + 1 }} / 5</h3>{{ item.question }}
                        </span>
                    </div>
                </div>
            </div>
            <div class="main">
                <div class="answerContent" @click='showAnwser(item, itemIndex)'>
                    <h3>参考答案:</h3>
                    <div class="answerMask">
                        <span>
                            点击查看参考答案
                        </span>
                    </div>
                    <p style="display: none;">{{ item.answer }}</p>
                </div>
            </div>

            <div class="bttnGroup">
                <button @click=toLeft>
                    <el-icon>
                        <ArrowLeftBold />
                    </el-icon>
                </button>
                <button @click=toRight>
                    <el-icon>
                        <ArrowRightBold />
                    </el-icon>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
}

$color1: #fafafa;
$color2: #AADBFF;

.subjectiveQuestionsContainer {
    position: relative;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transition: 0.2s;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    overflow-x: visible;
}

.subjectiveQuestionsContent {
    position: relative;
    min-width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
    gap: 3vmin;
}

.header {
    position: relative;
    width: 100%;
    min-height: 15%;
    flex-grow: 0;
    flex-shrink: 1;
    display: flex;
    justify-content: center;

    .questionContent {
        position: relative;
        width: 90%;
        height: inherit;

        h3 {
            margin-top: 5%;
        }

        span {
            position: relative;
            width: 80%;
            word-wrap: break-word;
            white-space: normal;
        }
    }
}

.main {
    position: relative;
    flex-grow: 1;
    flex-shrink: 1;
    width: 100%;
    min-height: 60%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;



    .answerContent {
        position: relative;
        width: 90%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        gap: 2vmin;

        .answerMask {
            position: relative;
            width: 100%;
            height: 50%;
            align-self: center;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: $color2;
            border-radius: 10px;
            transition: 0.2s;
            pointer-events: none;
        }
    }

    .bttnGroup {
        position: absolute;
        bottom: 15%;
        width: 100%;
        height: 8%;
        display: flex;
        justify-content: space-between;

        button {
            position: relative;
            aspect-ratio: 1/1;
            border-radius: 50%;
            border: 3px solid $color2;
            background-color: $color1;
            margin-left: 5%;
            margin-right: 5%;
        }
    }
}
</style>