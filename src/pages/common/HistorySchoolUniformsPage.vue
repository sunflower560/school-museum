<template>
  <div class="history-school-uniforms-page">
    <teleport to=".main-layout__header-dynamic-section" v-if="isMounted">
      <transition name="fade-left" mode="out-in" appear>
        History of school uniforms page
      </transition>
    </teleport>
    <h1>История школьной формы</h1>

    <div class="history-school-uniforms-page-content">
      <div>
        <p><span>Школьная форма</span> — обязательная повседневная форма одежды для учеников
          во время их нахождения в школе и на официальных школьных мероприятиях вне школы</p>
      </div>


    </div>
  </div>
</template>

<script setup lang="ts">
import {
  School
} from "@element-plus/icons-vue";
import {computed, reactive, ref} from "vue";
import {useMounted} from "@vueuse/core/index";
const isMounted = useMounted()
</script>

<style lang="scss">
@import '/src/styles/variables.scss';

.history-school-uniforms-page {
  text-align: center;
  padding: $size_big;
  &-content {
    span {
      color: $color_main_dark_2;
      font-weight: $font_w_medium;
    }
    margin-top: $radius_big;

  }
}
</style>