import './styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {createI18n} from 'vue-i18n'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {LocalesMap, type TLocales, type TrSchema} from "./locales";
import {pluralizationRuleForSlavic} from "@/composable/utilites";

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

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(i18n)

app.mount('#app')
