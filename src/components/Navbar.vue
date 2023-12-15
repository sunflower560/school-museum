<template>
  <div class="navbar">
    <router-link :to="MainPage">
      Header
    </router-link>
  </div>
</template>

<script setup lang="ts">
import {RouterLink} from 'vue-router'
import MainPage from "@/pages/common/MainPage.vue";

</script>

<style scoped lang="scss">
.navbar {
  background-color: #2a2a2a;
  padding: 20px;
}
</style>