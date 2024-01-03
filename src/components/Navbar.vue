<template>
  <div class="navbar">
    <div class="navbar-logo">
      <div class="navbar-logo-school">
        School №8 museum
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

<!--    <div class="navbar-content">-->
<!--      <router-link :to="{name: 'test'}">Test</router-link>-->
<!--      <router-link :to="{name: 'main'}">Main</router-link>-->
<!--    </div>-->
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
.navbar {
  background-color: #2a2a2a;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &-content {
    display: flex;
    flex-direction: column;
    a {
      font-size: 18px;
      background-color: #3b3329;
      border-radius: 8px;
      padding: 10px;
      margin: 5px;
      transition: all linear 0.2s;
    }

    a:hover {
      background-color: #625545;
    }
  }

  &-logo {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    &-school {
      margin-right: 20px;
      border-radius: 15px;
      padding: 20px;
      font-size: 18px;
      color: #483e32;
      font-weight: bold;
      background-color: black;
    }
  }
}
</style>