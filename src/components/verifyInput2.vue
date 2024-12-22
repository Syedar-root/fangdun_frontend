<script setup>
import { onMounted, ref, watch } from 'vue';

const props = defineProps({
    digitCount: {
        type: Number,
        default: 4
    }
})
const emits = defineEmits(['input-complete']);
const inputContent = ref(new Array(props.digitCount).fill(''))
let inputs = null;
watch(inputContent.value, () => {
    if (!inputContent.value.includes('')) {
        console.log(inputContent.value.join(''));
        emits('input-complete', inputContent.value.join(''))
    }
})
onMounted(() => {
    inputs = document.querySelectorAll('.verify_input_container .verify_input');
})

function handleInput(event, index) {
    console.log(inputs[index])
    const value = inputs[index].value;
    if (value.length === 1) {
        const nextIndex = index + 1;
        if (nextIndex < inputs.length) {
            inputs[nextIndex].focus();
        }
    }
}

function handleKeyDown(index) {
    const keyCode = event.keyCode || event.which;
    if (event.keyCode === 8) {
        const value = inputs[index].value;
        if (value.length === 0) {
            const prevIndex = index - 1;
            if (prevIndex >= 0) {
                inputs[prevIndex].focus();
                inputs[prevIndex].select();
            }
        }
    }
}
</script>

<template>
    <div class="verify_input_container">
        <input v-for="(item, index) in digitCount" v-model="inputContent[index]" type="text" class="verify_input"
            @input="handleInput(event, index)" @keydown="handleKeyDown(index)" maxlength="1">
    </div>
</template>

<style lang="scss" scoped>
.verify_input_container {
    width: 300px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2%;
}

.verify_input {
    width: 10%;
    aspect-ratio: 1/1;
    outline: none;
    border-style: solid;
    border-width: 2px;
    border-color: #ccc;
    border-radius: 5px;
    text-align: center;
    transition: 0.2s;

    &:focus {
        border-color: #000;
    }
}
</style>