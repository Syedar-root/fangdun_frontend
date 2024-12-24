import {
	createApp
} from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus, { ElMessage } from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {
	createPinia
} from 'pinia';
import {
	createPersistedState
} from 'pinia-plugin-persistedstate';
import { Uploader } from 'vant';
import 'vant/lib/index.css';

const app = createApp(App);
const pinia = createPinia();
const persist = createPersistedState();
pinia.use(persist)
app.use(router);
app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}
app.use(pinia)
app.use(Uploader);

app.mount('#app');


let firstBackPressTime = 0;
document.addEventListener("backbutton", function (e) {
  e.preventDefault();
  if (firstBackPressTime === 0) {
    firstBackPressTime = new Date().getTime();
    // 提示用户再次按下返回键退出应用
	  ElMessage({
		  message: '再按一次退出应用',
		  type: 'info',
		  duration: 2000,
	  });
  } else {
    let secondBackPressTime = new Date().getTime();
    if (secondBackPressTime - firstBackPressTime < 2000) {
      // 如果两次按下返回键的时间间隔小于2秒，退出应用
      navigator.app.exitApp();
    } else {
      firstBackPressTime = secondBackPressTime;
      ElMessage({
		message: '再按一次退出应用',
		type: 'info',
		duration: 2000,
	});
    }
  }
});