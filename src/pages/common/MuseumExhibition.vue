<template>
  <div class="museum-exhibition-page">
    <teleport to=".main-layout__header-dynamic-section" v-if="isMounted">
      <transition name="fade-left" mode="out-in" appear>
       Museum exhibition page
      </transition>
    </teleport>
    <div class="museum-exhibition-page-main">
      <h1>{{$t('museum.infoMuseum')}}</h1>
      <h2>
        {{$t('menu.museum.routes.exhibition')}} <p>"{{$t('museum.schoolHistory')}}"</p>
      </h2>
      <p>
        {{$t('museum.schoolAddressOne')}} <br> {{$t('museum.schoolAddressTwo')}}
      </p>
      <a href="https://school8mogilev.by/muzeikomnata" target="_blank">{{$t('museum.virtualExposition')}}</a>
    </div>

    <div class="museum-exhibition-page-content">
      <h2>{{$t('museum.valid')}}</h2>
      <ol>
        <li><span>{{$t('museum.searchScientific')}}:</span> {{$t('museum.searchScientificDescriptions')}}</li>
        <li><span>{{$t('museum.workMuseumOffice')}}:</span> {{$t('museum.workMuseumOfficeDescriptions')}}
        </li>
        <li><span>{{$t('museum.culturalActivities')}}:</span>
          {{$t('museum.culturalActivitiesDescriptions')}}
        </li>
      </ol>

      <div class="museum-exhibition-page-exhibit">
        <h2>{{$t('museum.museumExhibits')}}</h2>
        <el-tabs v-model="activeTabs" class="demo-tabs">
          <el-tab-pane :label="$t('museum.schoolAccessories')" name="accessories">
            <p>
              {{$t('museum.schoolAccessoriesDescription')}}
            </p>
          </el-tab-pane>
          <el-tab-pane :label="$t('museum.photoArchive')">
            <p>
              {{$t('museum.photoArchiveDescription')}}
            </p>
          </el-tab-pane>
          <el-tab-pane :label="$t('museum.periodicals')">
            <p>
              {{$t('museum.periodicalsDescription')}}
            </p>
          </el-tab-pane>
        </el-tabs>
      </div>

      <div class="museum-exhibition-page-sections">
        <h2>{{$t('museum.sectionsExhibition')}}:</h2>
        <ul>
          <li>{{$t('museum.historySchool')}}</li>
          <li>{{$t('museum.fateSchool')}}</li>
          <li>{{$t('museum.teacherWork')}}</li>
          <li>{{$t('museum.graduates')}}</li>
          <li>{{$t('museum.pioneer')}}</li>
          <li>{{$t('museum.schoolUniform')}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, reactive, ref, watchEffect} from 'vue'
import {useMounted} from "@vueuse/core/index";

const activeTabs = ref('accessories')
const isMounted = useMounted()
</script>

<style lang="scss">
@import '/src/styles/variables.scss';

.museum-exhibition-page {
  text-align: center;
  padding: $size_big;

  &-main {
    margin-bottom: 4rem;

    h1 {
      margin-bottom: 3rem;
    }

    h2 {
      margin-bottom: 2rem;
    }

    p:nth-child(3) {
      font-size: $size_small * 2;
      margin-bottom: 1.5rem;
    }

    a {
      color: $color_blue_light_2;
      background-color: $color_blue_very_dark;
      padding: 0.7rem;
      border-radius: 1rem;
      transition: all 0.2s linear;
    }

    a:hover {
      color: $color_blue_light_1;
      background-color: $color_blue_dark_1;
    }
  }

  &-content {
    h2 {
      margin-bottom: 1rem;
    }

    ol {
      font-size: $size_small * 2;
      border: $color_blue_light_3 2px solid;
      padding: 2rem;
      border-radius: 0.5rem;
      text-align: left;
      margin-bottom: 5rem;

      li {
        span {
          color: $color_orange;
        }
      }

      li:nth-child(2) {
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
    }
  }

  &-exhibit {
    margin-bottom: 5rem;

    .demo-tabs {
      padding: 2rem;
      border: $color_blue_light_3 2px solid;
      border-radius: 0.5rem;
    }
  }

  &-sections {
    h2 {
      margin-bottom: 1.5rem;
    }

    ul {
      text-align: left;

      li {
        margin-bottom: 1rem;
      }
    }
    ul li::marker {
      color: $color_orange_main;
      font-size: $shift_large;
    }
  }
}
</style>