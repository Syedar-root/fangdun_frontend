<script setup>
import { Close, Check } from '@element-plus/icons-vue';
import { generateChoice, generateJudge } from '../../api/ai';
import { ref, computed, onMounted, watch } from 'vue'
import { ElMessage } from 'element-plus';
const questions = ref(null)

const props = defineProps({
    text: {
        type: String,
    },
    isChoised: {
        type: Number,
        default: 100
    }
})
const loading = ref(false)
function initQuestion() {
    loading.value = true;
    if (props.isChoised === 1) {
        generateChoice(props.text).then((res) => {
            console.log(res);
            questions.value = res.data.questions_and_answers;
            loading.value = false;
        }).catch((err) => {
            ElMessage({
                message: '生成失败',
                type: 'error',
                duration: 3000
            })
            loading.value = false;
        });
    }
    else {
        generateJudge(props.text).then((res) => {
            console.log(res);
            questions.value = res.data.questions_and_answers;
            loading.value = false;
        }).catch((err) => {
            ElMessage({
                message: '生成失败',
                type: 'error',
                duration: 3000
            })
            loading.value = false;
        });
    }
}

watch(props.isChoised, initQuestion())

onMounted(() => {
    // initQuestion();
})

const testC = ref(null);
const translateX = ref(0);
function toRight() {
    if (translateX.value > -4) {
        translateX.value = translateX.value - 1;
        testC.value.style.transform = `translateX(${translateX.value}00%)`;
    }
}
function toLeft() {
    if (translateX.value < 0) {
        translateX.value = translateX.value + 1;
        testC.value.style.transform = `translateX(${translateX.value}00%)`;
    }
}

const selectOptions = ref(Array(5).fill(null));
function getSelectedValue(item, itemIndex) {
    let selectOption = selectOptions.value[itemIndex]
    let options = document.getElementsByName('Q' + itemIndex + item.question);
    // 正确答案高亮
    options[item.answer].style.border = '3px solid #44CA8B';
    // 選項標識樣式
    let optionFlag = options[item.answer].querySelector('.optionFlag');
    optionFlag.style.border = '2px solid #44CA8B';
    optionFlag.style.backgroundColor = '#44CA8B';
    optionFlag.style.color = '#fafafa';
    // 對錯圖標顯示
    let optionAnswer = options[item.answer].querySelector('.optionAnswer');
    optionAnswer.style.opacity = 1;
    if (selectOption !== item.answer) {
        // 错误答案高亮
        options[selectOption].style.border = '3px solid #F26665';
        let errorOptionFlag = options[selectOption].querySelector('.optionFlag');
        errorOptionFlag.style.border = '2px solid #F26665';
        errorOptionFlag.style.backgroundColor = '#F26665';
        errorOptionFlag.style.color = '#fafafa';
        // 對錯圖標顯示
        let errorOptionAnswer = options[selectOption].querySelector('.optionAnswer');
        errorOptionAnswer.style.opacity = 1;
    }
    // 不可选状态
    for (let i = 0; i < options.length; i++) {
        let radios = options[i].querySelector('input');
        radios.disabled = true;
    }
}
</script>

<template>
    <div class="testContainer" ref="testC" id="testContainer" v-loading="loading"
        element-loading-background="rgba(100,100,100,0.3)" element-loading-text="生成中，请稍等">
        <div class="testContent" v-for="(item, itemIndex) in questions" :id="'question' + itemIndex">
            <div class="header">
                <div class="questionContent">
                    <span>
                        <h3>{{ itemIndex + 1 }} / 5</h3>{{ item.question }}
                    </span>
                </div>
            </div>
            <div class="main">
                <div class="optionForm">
                    <div class="option" v-for="(option, index) in item.options" :key="index"
                        :name="'Q' + itemIndex + item.question">
                        <input :id="'option' + index" type="radio" :value="index" :name="item.question"
                            v-model="selectOptions[itemIndex]" @change="getSelectedValue(item, itemIndex)">
                        <div class="optionFlag"><span>{{ String.fromCharCode(65 + index) }}</span></div>
                        <div class="optionText">
                            <p>{{ option }}</p>
                        </div>
                        <div class="optionAnswer">
                            <el-icon v-if="item.answer === index" style="color: #44CA8B;">
                                <Check />
                            </el-icon>
                            <el-icon v-else style="color: #F26665;">
                                <Close />
                            </el-icon>
                        </div>
                    </div>
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
$color3: #44CA8B;
$color4: #F26665;

.testContainer {
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


.testContent {
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

    .optionForm {
        position: relative;
        width: 90%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        gap: 2vmin;
    }

    .option {
        position: relative;
        width: 100%;
        height: 10%;
        background-color: $color1;
        border-width: 3px;
        border-style: solid;
        border-color: $color2;
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        transition: 0.2s;

        input[type='radio'] {
            position: absolute;
            z-index: 2;
            width: 100%;
            height: 100%;
            appearance: none;

            &:disabled {
                pointer-events: none;
            }
        }

        @media screen and (max-device-width: 767px) {
            .optionFlag {
                width: 10%;
            }
        }

        @media screen and (min-device-width: 768px) {
            .optionFlag {
                width: 7%;
            }
        }

        .optionFlag {
            position: relative;
            align-self: center;
            margin-left: 2%;
            aspect-ratio: 1/1;
            border-width: 2px;
            border-style: solid;
            border-color: $color2;
            border-radius: 10px;
            background-color: $color1;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.2s;
        }

        .optionText {
            position: relative;
            width: 75%;
            height: 90%;
            margin-left: 2%;
            display: flex;
            justify-content: start;
            align-items: center;

        }

        .optionAnswer {
            position: relative;
            width: 10%;
            aspect-ratio: 1/1;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.2s;
            opacity: 0;

            .el-icon {
                font-size: 1.8rem;

            }
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
