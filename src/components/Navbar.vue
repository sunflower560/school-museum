<template>
  <div class="navbar">
    <div class="navbar-logo">
      School №8 museum
    </div>
    <div class="navbar-content">

    </div>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  &-logo {
    border-radius: 15px;
    padding: 20px;
    font-size: 18px;
    color: #483e32;
    font-weight: bold;
    background-color: black;
  }
}
</style>