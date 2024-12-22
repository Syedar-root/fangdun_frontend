<template>
    <div class="wrap">
        <div class="header">
            <div class="icon" @click="router.push('/')">
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.875 8.75C21.875 8.75 13.125 15.1944 13.125 17.5C13.125 19.8056 21.875 26.25 21.875 26.25"
                        stroke="#1A1A1A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <h2>{{ time }}，{{ userForm.username }}</h2>
        </div>

        <div class="main">
            <div class="infoContainer">
                <div class="infoContent">
                    <!-- 用户信息设置 -->
                    <div class="infoForm">
                        <div class="infoFormTitle">
                            个人信息
                        </div>
                        <div class="infoFormItem">
                            <div class="infoFormItemTitle">
                                用户名
                            </div>
                            <div class="infoFormItemContent">
                                <input v-model="userForm.username" type="text">
                            </div>
                        </div>
                        <div class="infoFormItem">
                            <div class="infoFormItemTitle">
                                邮箱
                            </div>
                            <div class="infoFormItemContent">
                                {{ userForm.email }}
                            </div>
                        </div>
                        <div class="infoFormItem">
                            <a>修改密码</a>
                        </div>
                        <div class="infoFormItem">
                            <button class="confirm" @click="userFormSubmit">确认</button>
                            <button class="cancel" @click="userFormSubmitCancel">取消</button>
                        </div>
                    </div>


                    <!-- <hr> -->


                    <!-- AI相关设置 -->
                    <div class="infoForm">
                        <div class="infoFormTitle">
                            AI设置
                        </div>
                        <div class="infoFormItem">
                            <div class="infoFormItemTitle">
                                模式
                            </div>
                            <div class="infoFormItemContent">
                                <div class="mode_seletion_item">
                                    <input v-model="AiForm.model_selection_status" type="radio" value="default">
                                    <label for="">默认</label>
                                </div>
                                <div class="mode_seletion_item">
                                    <input v-model="AiForm.model_selection_status" type="radio" value="select">
                                    <label for="">预设</label>
                                </div>
                                <div class="mode_seletion_item">
                                    <input v-model="AiForm.model_selection_status" type="radio" value="custom">
                                    <label for="">自定义</label>
                                </div>
                            </div>
                        </div>
                        <!-- 预设 -->
                        <div class="infoFormItem" v-if="modeConvert('select')">
                            <div class="infoFormItemTitle">
                                模型
                            </div>
                            <div class="infoFormItemContent">
                                <el-select v-model="AiForm.model_configuration_id" placeholder="请选择">
                                    <el-option v-for="item in modelList" :label="item.model" :value="item.id" />
                                </el-select>
                            </div>
                        </div>

                        <!-- 自定义 -->
                        <div class="infoFormItem" v-if="modeConvert('custom') || modeConvert('select')">
                            <div class="infoFormItemTitle">
                                apikey
                            </div>
                            <div class="infoFormItemContent">
                                <input v-model="AiForm.api_key" type="text">
                            </div>
                        </div>
                        <div class="infoFormItem" v-if="modeConvert('custom')">
                            <div class="infoFormItemTitle">
                                model
                            </div>
                            <div class="infoFormItemContent">
                                <input v-model="AiForm.custom_model" type="text">
                            </div>
                        </div>
                        <div class="infoFormItem" v-if="modeConvert('custom')">
                            <div class="infoFormItemTitle">
                                base_url
                            </div>
                            <div class="infoFormItemContent">
                                <input v-model="AiForm.custom_base_url" type="text">
                            </div>
                        </div>
                        <div class="infoFormItem">
                            <button class="confirm" @click="AiFormSubmit">确认</button>
                            <button class="cancel" @click="AiFormSubmitCancel">取消</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "scss/userCenter.scss";
</style>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { get_user_profile, update_username, update_apikey } from '../api/userCenter';
import { get_model_list } from '../api/ai';
import cloneDeep from 'lodash/cloneDeep';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';

const router = useRouter();

const userForm = ref({
    username: undefined,
})
const AiForm = ref({
    model_selection_status: "default",
    model_configuration_id: "1",
    api_key: "",
    custom_model: "",
    custom_base_url: "",
})
// 模式切换
function modeConvert(flag) {
    if (flag === AiForm.value.model_selection_status) {
        return true;
    }
    return false;
}

// 用户信息提交
async function userFormSubmit() {
    console.log(userForm.value);
    await update_username(userForm.value.username).then(res => {
        console.log(res);
        ElMessage({
            message: '修改成功',
            type: 'success',
        });
    }).catch(err => {
        console.log(err);
        ElMessage({
            message: '修改失败' + err.message,
            type: 'error',
        });
    })
}
function userFormSubmitCancel() {
    // 还原信息
    userForm.value.username = user_profile_query.user_info.username;
}
// AI信息提交
async function AiFormSubmit() {
    console.log(AiForm.value);
    await update_apikey(AiForm.value).then(res => {
        console.log(res);
        ElMessage({
            message: '修改成功',
            type: 'success',
        });
    }).catch(err => {
        console.log(err);
        ElMessage({
            message: '修改失败' + err.message,
            type: 'error',
        });
    })
}
function AiFormSubmitCancel() {
    // 还原信息
    AiForm.value.api_key = user_profile_query.ai_info.api_key;
    AiForm.value.custom_model = user_profile_query.ai_info.custom_model;
    AiForm.value.custom_base_url = user_profile_query.ai_info.custom_base_url;
    AiForm.value.model_selection_status = user_profile_query.ai_info.model_selection_status;
    AiForm.value.model_configuration_id = user_profile_query.ai_info.model_configuration_id;
}

let user_profile_query = null;
const modelList = ref(null);
function initForm(user_info, ai_info) {
    userForm.value = user_info;
    AiForm.value = ai_info;
}
const time = computed(() => {
    let now = new Date().getHours();;
    if (now < 6) {
        return "凌晨在睡会吧";
    } else if (now < 12) {
        return "早上好";
    } else if (now < 18) {
        return "下午好";
    } else {
        return "晚安";
    }
})
onMounted(async () => {
    await get_user_profile().then(res => {
        user_profile_query = cloneDeep(res.data);
        console.log(user_profile_query.user_info);
        initForm(res.data.user_info, res.data.ai_info);
    })
    await get_model_list().then(res => {
        console.log(res);
        modelList.value = res.data;
    })
})
</script>