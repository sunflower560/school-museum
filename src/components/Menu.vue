<template>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      text-color="#fff"
      active-text-color="#d56008"
      background-color="#262626"
      router
      :collapse="collapse"
  >
    <el-menu-item :route="{name: 'main'}" index="2">
      <el-icon>
        <Document/>
      </el-icon>
      <template #title>{{ $t('museum.MuseumExhibition') }}</template>
    </el-menu-item>
    <el-menu-item :route="{name: 'school-history'}" index="4">
      <el-icon>
        <School/>
      </el-icon>
      <template #title>{{ $t('common.SchoolHistory') }}</template>
    </el-menu-item>
    <el-menu-item :route="{name: 'school-history-uniforms'}" index="6">
      <el-icon>
        <UserFilled/>
      </el-icon>
      <template #title>{{ $t('common.historyUniforms') }}</template>
    </el-menu-item>

    <el-button @click="isCollapse" type="text" size="large">
      <el-icon size="large">
        <el-icon color="#d56008">
          <Back/>
        </el-icon>
      </el-icon>
    </el-button>
  </el-menu>
</template>

<script setup lang="ts">
import {
  ArrowLeft,
  ArrowRight,
  Location,
  Setting,
  Document,
  Back,
  UserFilled,
  School,
  House,
  Menu as IconMenu,
} from "@element-plus/icons-vue";
import {computed, Ref, ref} from "vue";

const collapse: Ref<boolean> = ref(false)
const isCollapse = () => collapse.value = !collapse.value

</script>

<style scoped lang="scss">
@import '/src/styles/variables.scss';

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: $height-large;
  min-height: 800px;
  @media(max-width: $large-screen-up) {
    display: none;
  }
}

.el-menu-vertical-demo {
  height: 100vh;
}

.el-menu-vertical-demo:not(.el-menu--expand) {
  min-height: 100%;
  @media(max-width: $large-screen-up) {
    display: none;
  }
}
</style>