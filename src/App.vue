<template>
  <el-config-provider :locale="elementLocal">
    <component :is="layoutComponent"/>
  </el-config-provider>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router'
import MainLayout from "@/layouts/default/MainLayout.vue";
import EmptyLayout from "@/layouts/default/EmptyLayout.vue";
import {computed, ref, watchEffect} from "vue";
import {useI18n} from "vue-i18n";
import {useMenuAllRouts} from "@/router/navigation";
import {useLocalStorage, useNavigatorLanguage, useTitle} from "@vueuse/core";
import {storeToRefs} from "pinia";
import {useNavigationStore} from "@/stores/storeNavigation";
import {IMenuRoute} from "@/types";
import {LocalesInfo, localToElSchema, TLocales, TrSchema} from "./locales";
const { locale,t} = useI18n<{ message: TrSchema}, TLocales>({useScope: 'global'})
const {layout} = storeToRefs(useNavigationStore())
const storageUiLocal = useLocalStorage('ss-stat-ui-local','')
const storageRwLocal = useLocalStorage('ss-stat-rw-local','')

const layoutComponent = computed(()=> {
  if(route?.meta?.layout?.default === 'main-layout')
    return MainLayout
  return EmptyLayout
})

if(!storageUiLocal.value){
  const navigatorLanguage = useNavigatorLanguage()
  const storageLocale = navigatorLanguage.isSupported.value ? LocalesInfo.find(l => {
    if(navigatorLanguage.language.value)
      return  navigatorLanguage.language.value.includes(l.code)
  })?.code : 'en'
  storageUiLocal.value = storageLocale
  storageRwLocal.value = storageLocale
}
const route = useRoute()
const allRouts = useMenuAllRouts()
const title = useTitle()
watchEffect(()=>{
  if(route.name && locale.value){
    if(layout.value.default === 'main-layout') {
      const nav = allRouts.value.find( (m:IMenuRoute) => m.route.name === route.name)
      if(nav)
        title.value = nav.title
      if(route.name.toString().endsWith('main-page'))
        title.value = t('navigation.main.title')
    }
  }
})

const elementLocal = computed(()=>localToElSchema((locale.value)))
</script>

<style lang="scss">
@import "@/styles/common.scss";
@import "element-plus/theme-chalk/src/index.scss";
@import 'element-plus/theme-chalk/src/dark/css-vars.scss';
@import "@/assets/fonts/stylesheet.css";
$namespace:live !default;
body{
  font-family: 'Open Sans', serif;
  margin: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  #app{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
