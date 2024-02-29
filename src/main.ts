import './styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import {createI18n} from 'vue-i18n'
import ElementPlus from 'element-plus'
import { Vue3Mq } from "vue3-mq"
import {LocalesMap, type TLocales, type TrSchema} from "./locales";
import {pluralizationRuleForSlavic} from "@/composables/utilites";

const i18n = createI18n<[TrSchema], TLocales>({
    locale: 'en',
    legacy: false,
    pluralRules: {
        ru:pluralizationRuleForSlavic
    },
    messages: {
        ...LocalesMap
    },
    warnHtmlMessage:false
})


const app = createApp(App)

app.use(createPinia())
app.use(Vue3Mq, {
    breakpoints: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1400,
        xxl: 1920
    }
})
app.use(router)
app.use(ElementPlus)
app.use(i18n)
app.mount('#app')
