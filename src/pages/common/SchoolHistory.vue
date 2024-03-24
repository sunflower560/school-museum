<template>
  <div class="school-history-page">
    <teleport to=".main-layout__header-dynamic-section" v-if="isMounted">
      <transition name="fade-left" mode="out-in" appear>
        School history page
      </transition>
    </teleport>
    <h1 class="school-history-page-title">{{ $t('menu.resources.routes.schoolHistory') }}</h1>

    <p>
      {{ $t('schoolMuseum.firstSocialistSchool') }}
    </p>
    <h3>
      {{ $t('schoolMuseum.firstSocialistSchoolMogilev') }}
    </h3>

    <h2>{{ $t('schoolMuseum.oneDirector') }}</h2>
    <div class="school-history-page-director">
      <div>
        <img src="/src/assets/img/minin.jpg" style="width: 230px; height: 300px" alt="картинки нет"/>
        <p>{{ $t('schoolMuseum.oneDirectorName') }}</p>
      </div>
      <p>{{ $t('schoolMuseum.oneDirectorDescription') }}</p>
    </div>

    <h2>{{ $t('schoolMuseum.twoDirector') }}</h2>
    <div class="school-history-page-director">
      <div>
        <img src="/src/assets/img/kazimirsky.jpg" style="width: 200px; height: 300px" alt="картинки нет"/>
        <p>{{ $t('schoolMuseum.twoDirectorName') }}</p>
      </div>
      <p>{{ $t('schoolMuseum.twoDirectorDescription') }}</p>
    </div>

    <div class="school-history-page-year">
      <h1>1941 г.</h1>
      <p>
        {{ $t('schoolMuseum.yearDescription') }}
      </p>
      <h2>{{ $t('schoolMuseum.fromJulyToJuly') }}</h2>
      <p>
        {{ $t('schoolMuseum.yearDescriptionDefenseMogilev') }}
      </p>
    </div>

    <div class="school-history-page-year">
      <h1>1942 г.</h1>
      <p>
        {{ $t('schoolMuseum.1942') }}
      </p>
    </div>

    <div class="school-history-page-year">
      <h1>{{ $t('schoolMuseum.year') }}</h1>
      <div class="school-history-page-year-olensky">
        <div>
          <img src="/src/assets/img/olensky.jpg" style="width: 210px; height: 300px" alt="картинки нет"/>
          <p>{{ $t('schoolMuseum.directorOlensky') }}</p>
        </div>
        <p>
          {{ $t('schoolMuseum.directorOlenskyDescription') }}
        </p>
      </div>
    </div>

    <div class="school-history-page-collapse">
      <el-collapse v-model="collapseDate" accordion>
        <el-collapse-item title="1962 г." name="1">
          <div>
            {{ $t('schoolMuseum.pty') }}
            <br>
            {{ $t('schoolMuseum.ptyTwo') }}
            <br>
            {{ $t('schoolMuseum.ptyThree') }}
          </div>
        </el-collapse-item>
        <el-collapse-item title="1991 г." name="2">
          <div>
            {{ $t('schoolMuseum.demolishedBuilding') }}
            <br>
            {{ $t('schoolMuseum.demolishedBuildingTwo') }}
          </div>
        </el-collapse-item>
        <el-collapse-item title="2002 г." name="3">
          <div>
            {{ $t('schoolMuseum.symbolicKey') }}
          </div>
          <img src="/src/assets/img/klepchukov.jpg" alt="картинки нет" style="width: 210px; height: 300px"/>
        </el-collapse-item>
        <el-collapse-item title="2014 г." name="4">
          <div>
            {{ $t('schoolMuseum.schoolBlown') }}
            <br>
            {{ $t('schoolMuseum.schoolBlownTwo') }}
            <br>
          </div>
          <img src="/src/assets/img/korzun.jpg" style="width: 210px; height: 300px" alt="картинки нет"/>
        </el-collapse-item>
        <el-collapse-item title="2023 г." name="5">
          <div>
            {{ $t('schoolMuseum.directorIrinaLeonidovnaRybakova') }}
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>

  </div>
</template>

<script setup lang="ts">
import {computed, Ref, ref, UnwrapRef} from 'vue'
import {useMounted} from "@vueuse/core/index";


const collapseDate = ref('1')
const isMounted = useMounted()
</script>

<style lang="scss">
@use '@/styles/common/variables.scss' as *;
@import '/src/styles/variables.scss';

.school-history-page {
  text-align: center;
  padding: $size;

  img {
    border-radius: $radius_medium;
  }

  &-collapse {
    text-align: left;
    margin-top: $radius_big;
    margin-bottom: $radius_big;

    .el-collapse {
      --el-collapse-border-color: #414141;
      --el-collapse-header-text-color: #F5853C
    }
  }

  &-director {
    @media(max-width: $small-screen-up) {
      display: block;
      text-align: center;
    }
    display: flex;
    width: 100%;
    text-align: left;
    margin-top: $radius_medium;
    margin-bottom: $radius_large;

    img {
      margin-right: $radius_medium;
    }

    div {
      p {
        text-align: center;
        font-size: $radius_tiny * 3.4;
        font-weight: $font_w_medium;
      }
    }
  }

  &-year {
    margin-top: $size_big * 2;
    border: $color_main_dark_2 solid $size_tiny - 1;
    padding: $radius_medium;
    border-radius: $radius_medium;

    img {
      margin-right: $radius_medium;
    }

    p {
      margin-top: $radius_medium;
      margin-bottom: $size_big;
    }

    &-olensky {
      @media(max-width: $small-screen-up) {
        display: block;
        text-align: center;
      }
      display: flex;
      width: 100%;
      text-align: left;
      margin-top: $radius_medium;
    }
  }

  &-title {
    margin-bottom: $radio_average;
  }


  h2 {
    text-align: left;
  }

  h3 {
    @media #{$md-and-down} {
      font-size: $radius_medium - 2;
    }
    font-size: $radius_tiny * 3.4;
    margin-top: $radio_average;
    margin-bottom: $radio_average * 2;
  }

  p {
    @media #{$md-and-down} {
      font-size: $radius_medium - 3;
    }
    font-size: $radius_tiny * 3.4;
  }
}
</style>