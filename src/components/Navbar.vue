<template>
  <div class="navbar">
    <router-link :to="MainPage">
      Главная
    </router-link>
  </div>
</template>

<script setup lang="ts">
import {RouterLink} from 'vue-router'
import MainPage from "@/pages/common/MainPage.vue";

</script>

<style scoped lang="scss">
.navbar {

}
</style>