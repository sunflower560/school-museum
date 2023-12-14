<template>
  <div>
    <navbar />
  </div>

  <RouterView/>
</template>

<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import Navbar from "@/components/Navbar.vue";

</script>

<style scoped>

</style>
