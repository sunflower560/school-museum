<template>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      text-color="#fff"
      active-text-color="#d56008"
      background-color="#262626"
      :collapse="collapse"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <location/>
        </el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon>
        <icon-menu/>
      </el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon>
        <setting/>
      </el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>

    <el-button @click="isCollapse" type="text" size="large">
      <el-icon size="large">
        <el-icon>
          <Back/>
        </el-icon>
      </el-icon>
    </el-button>
  </el-menu>
</template>

<script setup lang="ts">
import {ArrowLeft, ArrowRight, Location, Setting, Back, Menu as IconMenu,} from "@element-plus/icons-vue";
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

.el-menu-vertical-demo:not(.el-menu--expand) {
  min-height: 100%;
  @media(max-width: $large-screen-up) {
    display: none;
  }
}
</style>