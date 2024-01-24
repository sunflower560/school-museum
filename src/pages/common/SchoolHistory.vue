<template>
  <div class="school-history-page">
    <h1 class="school-history-page-title">{{ $t('common.SchoolHistory') }}</h1>

    <p>
      {{ $t('SchoolMuseum.FirstSocialistSchool') }}
    </p>
    <h3>
      {{ $t('SchoolMuseum.FirstSocialistSchoolMogilev') }}
    </h3>

    <h2>{{ $t('SchoolMuseum.OneDirector') }}</h2>
    <div class="school-history-page-director">
      <div>
        <el-image src="/src/assets/img/minin.jpg" style="width: 230px; height: 300px"/>
        <p>{{ $t('SchoolMuseum.OneDirectorName') }}</p>
      </div>
      <p>{{ $t('SchoolMuseum.OneDirectorDescription') }}</p>
    </div>

    <h2>{{ $t('SchoolMuseum.TwoDirector') }}</h2>
    <div class="school-history-page-director">
      <div>
        <el-image src="/src/assets/img/kazimirsky.jpg" style="width: 200px; height: 300px"/>
        <p>{{ $t('SchoolMuseum.TwoDirectorName') }}</p>
      </div>
      <p>{{ $t('SchoolMuseum.TwoDirectorDescription') }}</p>
    </div>

    <div class="school-history-page-year">
      <h1>1941 г.</h1>
      <p>
        {{ $t('SchoolMuseum.YearDescription') }}
      </p>
      <h2>С 3 по 26 июля</h2>
      <p>
        {{ $t('SchoolMuseum.YearDescriptionDefenseMogilev') }}
      </p>
    </div>

    <div class="school-history-page-year">
      <h1>{{ $t('SchoolMuseum.Year') }}</h1>
      <div class="school-history-page-year-olensky">
        <div>
          <el-image src="/src/assets/img/olensky.jpg" style="width: 210px; height: 300px"/>
          <p>{{ $t('SchoolMuseum.DirectorOlensky') }}</p>
        </div>
        <p>
          {{ $t('SchoolMuseum.DirectorOlenskyDescription') }}
        </p>
      </div>
    </div>

    <div class="school-history-page-collapse">
      <el-collapse v-model="collapseDate" accordion>
        <el-collapse-item title="1962 г." name="1">
          <div>
            {{ $t('SchoolMuseum.PTY') }}
            <br>
            {{ $t('SchoolMuseum.PTYTwo') }}
            <br>
            {{ $t('SchoolMuseum.PTYThree') }}
          </div>
        </el-collapse-item>
        <el-collapse-item title="1991 г." name="2">
          <div>
            {{ $t('SchoolMuseum.DemolishedBuilding') }}
            <br>
            {{ $t('SchoolMuseum.DemolishedBuildingTwo') }}
          </div>
        </el-collapse-item>
        <el-collapse-item title="2002 г." name="3">
          <div>
            {{ $t('SchoolMuseum.SymbolicKey') }}
          </div>
          <el-image src="/src/assets/img/klepchukov.jpg" style="width: 210px; height: 300px"/>
        </el-collapse-item>
        <el-collapse-item title="2014 г." name="4">
          <div>
            {{ $t('SchoolMuseum.SchoolBlown') }}
            <br>
            {{ $t('SchoolMuseum.SchoolBlownTwo') }}
            <br>
          </div>
          <el-image src="/src/assets/img/korzun.jpg" style="width: 210px; height: 300px"/>
        </el-collapse-item>
        <el-collapse-item title="2023 г." name="5">
          <div>
            {{ $t('SchoolMuseum.DirectorIrinaLeonidovnaRybakova') }}
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>

  </div>
</template>

<script setup lang="ts">
import {computed, Ref, ref, UnwrapRef} from 'vue'


const collapseDate = ref('1')

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
      --el-collapse-content-bg-color: #181818;
      --el-collapse-border-color: #414141;
      --el-collapse-content-text-color: white;
      --el-collapse-header-bg-color: #181818;
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
    background-color: $color_main_brown_2;
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