const validationRules = {
    username: {
        rule: /^[a-zA-Z0-9_]{3,20}$/, // 用户名由字母、数字、下划线组成，长度在3到20位之间
        message: '用户名需由字母、数字、下划线组成，长度在3到20位之间'
    },
    password: {
        rule: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,20}$/, // 包含大小写字母、数字，长度6到20位
        message: '密码需包含大小写字母、数字，长度6到20位'
    },
    confirmPassword: {
        compare: (password, confirmPassword) => password === confirmPassword, // 与密码是否一致的比较函数
        message: '两次输入的密码不一致'
    },
    email: {
        rule: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // 简单的邮箱格式验证正则
        message: '请输入正确的邮箱格式'
    },
    code: {
        rule: (code) => code.length === 6, // 验证码长度为6位
        message: '请输入6位验证码'
    }
};
export default validationRules;

