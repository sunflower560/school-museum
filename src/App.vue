<template>
  <div id="app">
<!--    <component :is="layoutComponent"/>-->
    <component :is="Navbar"/>
    <router-view class="view"/>
  </div>
</template>

<script setup lang="ts">
import {RouterLink, RouterView, useRoute} from 'vue-router'
import Navbar from "@/components/Navbar.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import EmptyLayout from "@/layouts/EmptyLayout.vue";
import {computed} from "vue";

const route = useRoute()

const layoutComponent: any = computed(() => {
  if(route?.meta?.layout === 'main-layout') {
    return MainLayout
  } return EmptyLayout
})
</script>

<style scoped lang="scss">
#app {
  //.view {
  //  margin-left: 15%;
  //}
}
</style>
