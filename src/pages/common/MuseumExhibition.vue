<template>
  <div class="museum-exhibition-page">
    <div class="museum-exhibition-page-main">
      <h1>{{$t('museum.InfoMuseum')}}</h1>
      <h2>
        {{$t('menu.admin.routes.exhibition')}} <p>"{{$t('museum.SchoolHistory')}}"</p>
      </h2>
      <p>
        {{$t('museum.SchoolAddressOne')}} <br> {{$t('museum.SchoolAddressTwo')}}
      </p>
      <a href="https://school8mogilev.by/muzeikomnata" target="_blank">{{$t('museum.VirtualExposition')}}</a>
    </div>

    <div class="museum-exhibition-page-content">
      <h2>{{$t('museum.Valid')}}</h2>
      <ol>
        <li><span>{{$t('museum.SearchScientific')}}:</span> {{$t('museum.SearchScientificDescriptions')}}</li>
        <li><span>{{$t('museum.WorkMuseumOffice')}}:</span> {{$t('museum.WorkMuseumOfficeDescriptions')}}
        </li>
        <li><span>{{$t('museum.CulturalActivities')}}:</span>
          {{$t('museum.CulturalActivitiesDescriptions')}}
        </li>
      </ol>

      <div class="museum-exhibition-page-exhibit">
        <h2>{{$t('museum.MuseumExhibits')}}</h2>
        <el-tabs v-model="activeTabs" class="demo-tabs">
          <el-tab-pane :label="$t('museum.SchoolAccessories')" name="accessories">
            <p>
              {{$t('museum.SchoolAccessoriesDescription')}}
            </p>
          </el-tab-pane>
          <el-tab-pane :label="$t('museum.PhotoArchive')">
            <p>
              {{$t('museum.PhotoArchiveDescription')}}
            </p>
          </el-tab-pane>
          <el-tab-pane :label="$t('museum.Periodicals')">
            <p>
              {{$t('museum.PeriodicalsDescription')}}
            </p>
          </el-tab-pane>
        </el-tabs>
      </div>

      <div class="museum-exhibition-page-sections">
        <h2>{{$t('museum.SectionsExhibition')}}:</h2>
        <ul>
          <li>{{$t('museum.HistorySchool')}}</li>
          <li>{{$t('museum.FateSchool')}}</li>
          <li>{{$t('museum.TeacherWork')}}</li>
          <li>{{$t('museum.Graduates')}}</li>
          <li>{{$t('museum.Pioneer')}}</li>
          <li>{{$t('museum.SchoolUniform')}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, reactive, ref, watchEffect} from 'vue'

const activeTabs = ref('accessories')

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