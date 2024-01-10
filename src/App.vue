<template>
  <div id="app">
    <component :is="Navbar" class="nav"/>

    <el-row>
      <el-col :lg="2">
        <el-affix :offset="98">
          <Menu />
        </el-affix>
      </el-col>
      <el-col :lg="22">
        <router-view class="view"/>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import {RouterLink, RouterView, useRoute} from 'vue-router'
import Navbar from "@/components/Navbar.vue";
import {computed, ref} from "vue";
import Menu from '@/components/Menu.vue'


const route = useRoute()

// const layoutComponent: any = computed(() => {
//   if (route?.meta?.layout === 'main-layout') {
//     return MainLayout
//   }
//   return EmptyLayout
// })
</script>

<style scoped lang="scss">

</style>
