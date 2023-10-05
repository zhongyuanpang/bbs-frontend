import {defineNuxtPlugin} from '#app';

import TDesign from 'tdesign-vue-next';
// 引入组件库的少量全局样式变量
import 'tdesign-vue-next/es/style/index.css';
import * as Icons from 'tdesign-icons-vue-next'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(TDesign)
    for (const [key, component] of Object.entries(Icons)) {
        nuxtApp.vueApp.component(key, component)
    }
})