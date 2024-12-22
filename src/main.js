import {
	createApp
} from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus'
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