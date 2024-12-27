<script setup>
import { onMounted, ref, defineProps } from 'vue';
import learnVue from './learn.vue';
import choiceQuestionsVue from './choiceQuestions.vue';
import subjectiveQuestionsVue from './subjectiveQuestions.vue';
const props = defineProps({
    topic: {
        type: String,
    },
    ancestorTopic: {
        type: Array,
    }
})

const questionsTypeItemMenuShow = ref(false);
// 学习
const learnVueShow = ref(false);
// 选择题测试
const choiseTestVueShow = ref(false);
const TFTestVueShow = ref(false);
// 主观题测试
const subjectiveQuestionsVueShow = ref(false);
const flags = ref(0);
const selectedChoiceQuestions = (flag) => {
    console.log("Selected");
    questionsTypeItemMenuShow.value = false;
    learnVueShow.value = false;
    subjectiveQuestionsVueShow.value = false;
    if (flag === 1) {
        choiseTestVueShow.value = true;
        TFTestVueShow.value = false;
    } else if (flag === 2) {
        TFTestVueShow.value = true;
        choiseTestVueShow.value = false;
    }
    flags.value = flag;
}
const selectedSubjectiveQuestions = () => {
    questionsTypeItemMenuShow.value = false;
    learnVueShow.value = false;
    choiseTestVueShow.value = false;
    TFTestVueShow.value = false;
    subjectiveQuestionsVueShow.value = true;
}

const emit = defineEmits(['wantBack', 'addToNodeRemark'])

function back() {
    questionsTypeItemMenuShow.value = false;
    if (learnVueShow.value != true) {
        learnVueShow.value = true;
        choiseTestVueShow.value = false;
        TFTestVueShow.value = false;
        subjectiveQuestionsVueShow.value = false;
    }
    else {
        emit('wantBack', false);
    }
}

function handleAddToNodeRemark(text) {
    emit('addToNodeRemark', text)
}

const learnText = ref('');
function handleLearnText(text) {
    learnText.value = text;
}

onMounted(() => {
    console.log(props);
    learnVueShow.value = true;
})

</script>

<template>
    <div class="aiExtendedContainer">
        <div class="header">
            <div class="left" @click="back">
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.875 8.75C21.875 8.75 13.125 15.1944 13.125 17.5C13.125 19.8056 21.875 26.25 21.875 26.25"
                        stroke="#1A1A1A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </div>
            <div class="center">
                <div class="title">AI节点解释</div>
            </div>
            <div class="right" @click="questionsTypeItemMenuShow = !questionsTypeItemMenuShow">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M24.0481 10.1094C24.0481 10.1094 24.9231 10.9844 25.7981 12.7344C25.7981 12.7344 28.5788 8.35939 31.048 7.4844M15.3244 1.36818C10.9511 1.18443 7.57367 1.68668 7.57367 1.68668C5.44043 1.84068 1.35245 3.03418 1.35245 10.0201C1.35245 16.9431 1.3087 25.4795 1.35245 28.8833C1.35245 30.9623 2.64045 35.8132 7.09592 36.0722C12.5121 36.3872 22.2683 36.4555 26.7448 36.0722C27.9418 36.004 31.9318 35.0642 32.4358 30.7243C32.959 26.2268 32.8558 23.1031 32.8558 22.3593"
                        stroke="#1A1A1A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M10.0482 20.6093H17.0481M10.0482 27.6093H24.0481M36.333 10.1094C36.333 14.9411 32.413 18.8593 27.5743 18.8593C26.4245 18.8605 25.2858 18.635 24.2232 18.1958C23.1606 17.7566 22.1949 17.1123 21.3815 16.2996C20.5681 15.487 19.9228 14.522 19.4825 13.4599C19.0422 12.3977 18.8156 11.2592 18.8156 10.1094C18.8156 5.27592 22.7373 1.35944 27.5743 1.35944C28.7241 1.35829 29.8629 1.58377 30.9255 2.02298C31.9881 2.46219 32.9537 3.10652 33.7671 3.91915C34.5806 4.73177 35.2259 5.69674 35.6661 6.75891C36.1064 7.82107 36.333 8.95959 36.333 10.1094Z"
                        stroke="#1A1A1A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </div>

            <!-- 题型菜单 -->
            <transition name="questionsType">
                <div class="questionsTypeMenu" v-show="questionsTypeItemMenuShow">
                    <transition name="questionsTypeItem">
                        <a class="typeItem" v-show="questionsTypeItemMenuShow" style="--i:1"
                            @click="selectedChoiceQuestions(1)">选择题</a>
                    </transition>
                    <transition name="questionsTypeItem">
                        <a class="typeItem" v-show="questionsTypeItemMenuShow" style="--i:2"
                            @click="selectedChoiceQuestions(2)">判断题</a>
                    </transition>
                    <transition name="questionsTypeItem">
                        <a class="typeItem" v-show="questionsTypeItemMenuShow" style="--i:3"
                            @click="selectedSubjectiveQuestions">主观题</a>
                    </transition>
                </div>
            </transition>
        </div>

        <div class="main">
            <transition name="mainVue">
                <learnVue :topic="props.topic" :ancestorTopic="props.ancestorTopic"
                    @addToNodeRemark="handleAddToNodeRemark" @learnText="handleLearnText" v-show="learnVueShow">
                </learnVue>
            </transition>
            <transition name="mainVue">
                <choiceQuestionsVue v-if="choiseTestVueShow" :text="learnText" :isChoised="flags">
                </choiceQuestionsVue>
            </transition>
            <transition name="mainVue">
                <choiceQuestionsVue v-if="TFTestVueShow" :text="learnText" :isChoised="flags"></choiceQuestionsVue>
            </transition>
            <transition name="mainVue">
                <subjectiveQuestionsVue v-if="subjectiveQuestionsVueShow" :text="learnText">
                </subjectiveQuestionsVue>
            </transition>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../scss/aiExtendedLearning.scss'
</style>