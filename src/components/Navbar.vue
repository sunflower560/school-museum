<template>
  <div class="navbar">
    <div class="navbar-logo">
      <div class="navbar-logo-school">
        <p>School №8 museum</p>
      </div>
      <el-switch
          v-model="switchLanguage"
          inline-prompt
          size="large"
          active-text="Ru"
          inactive-text="En"
          style="--el-switch-on-color: #9f6004; --el-switch-off-color: #575757"
      />
    </div>
    <el-button type="warning" style="margin-left: 16px" @click="drawer = true">
      Страницы
    </el-button>

    <el-drawer v-model="drawer" title="Страницы" size="55vh">
          <div class="navbar-content">
            <router-link :to="{name: 'test'}">Test</router-link>
            <router-link :to="{name: 'main'}">Main</router-link>
          </div>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {RouterLink} from 'vue-router'
import MainPage from "@/pages/common/MainPage.vue";

const drawer = ref(false)
const switchLanguage = ref(false)

</script>

<style scoped lang="scss">
@import '/src/styles/variables.scss';
.navbar {
  background-color: $color_main_black;
  padding: $size_big;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &-content {
    display: flex;
    flex-direction: column;
    a {
      background-color: $color_main_brown;
      border-radius: $size_small;
      padding: $size;
      margin: $shift;
      transition: all linear 0.2s;
    }

    a:hover {
      background-color: $color_main_brown_2;
    }
  }

  &-logo {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    &-school {
      p {
        margin-right: $size_big;
        border-radius: $radius_tiny * 3;
        padding: $size_big;
        color: $color_main_brown_1;
        font-weight: bold;
        background-color: black;
      }
    }
  }
}
</style>