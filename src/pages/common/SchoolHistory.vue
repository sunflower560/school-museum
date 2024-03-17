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
        <el-image src="/src/assets/img/minin.jpg" style="width: 230px; height: 300px"/>
        <p>{{ $t('schoolMuseum.oneDirectorName') }}</p>
      </div>
      <p>{{ $t('schoolMuseum.oneDirectorDescription') }}</p>
    </div>

    <h2>{{ $t('schoolMuseum.twoDirector') }}</h2>
    <div class="school-history-page-director">
      <div>
        <el-image src="/src/assets/img/kazimirsky.jpg" style="width: 200px; height: 300px"/>
        <p>{{ $t('schoolMuseum.twoDirectorName') }}</p>
      </div>
      <p>{{ $t('schoolMuseum.twoDirectorDescription') }}</p>
    </div>

    <div class="school-history-page-year">
      <h1>1941 г.</h1>
      <p>
        {{ $t('schoolMuseum.yearDescription') }}
      </p>
      <h2>С 3 по 26 июля</h2>
      <p>
        {{ $t('schoolMuseum.yearDescriptionDefenseMogilev') }}
      </p>
    </div>

    <div class="school-history-page-year">
      <h1>{{ $t('schoolMuseum.year') }}</h1>
      <div class="school-history-page-year-olensky">
        <div>
          <el-image src="/src/assets/img/olensky.jpg" style="width: 210px; height: 300px"/>
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
          <el-image src="/src/assets/img/klepchukov.jpg" style="width: 210px; height: 300px"/>
        </el-collapse-item>
        <el-collapse-item title="2014 г." name="4">
          <div>
            {{ $t('schoolMuseum.schoolBlown') }}
            <br>
            {{ $t('schoolMuseum.schoolBlownTwo') }}
            <br>
          </div>
          <el-image src="/src/assets/img/korzun.jpg" style="width: 210px; height: 300px"/>
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
@import '/src/styles/variables.scss';

.school-history-page {
  text-align: center;
  padding: $size;

  .el-image {
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

    .el-image {
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
    border: $color_main_dark_2 solid 2px;
    padding: $radius_medium;
    border-radius: $radius_medium;

    .el-image {
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
    font-size: $radius_tiny * 3.4;
    margin-top: $radio_average;
    margin-bottom: $radio_average * 2;
  }

  p {
    font-size: $radius_tiny * 3.4;
  }
}
</style>