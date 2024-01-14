<template>
  <el-affix>
  <div class="navbar">
    <div class="navbar-logo">
      <div class="navbar-logo-school">
        <p>{{$t('common.SchoolMuseum8')}}</p>
      </div>
      <el-switch
          v-model="locale"
          inline-prompt
          size="large"
          active-text="RU"
          inactive-text="EN"
          active-value="ru"
          inactive-value="en"
          style="--el-switch-on-color: #9f6004; --el-switch-off-color: #575757"
      />
    </div>
    <el-button type="warning" style="margin-left: 16px" @click="drawer = true">
      {{$t('common.Pages')}}
    </el-button>

    <el-drawer v-model="drawer" :title="$t('common.Pages')" size="55vh">
          <div class="navbar-content">
            <router-link :to="{name: 'main'}">{{$t('museum.MuseumExhibition')}}</router-link>
            <router-link :to="{name: 'school-history'}">{{$t('common.SchoolHistory')}}</router-link>
          </div>
    </el-drawer>
  </div>
  </el-affix>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useLocalStorage} from "@vueuse/core";
import {RouterLink} from 'vue-router'
import {useI18n} from "vue-i18n";
import {TLocales, TrSchema} from "@/locales";

const drawer = ref(false)

const {locale} = useI18n<{ message: TrSchema }, TLocales>({useScope: 'global'})

useLocalStorage('ss-ui-local', locale)

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
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>