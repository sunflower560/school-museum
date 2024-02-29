<template>
  <div class="history-school-uniforms-page">
    <h1>История школьной формы</h1>

    <div class="history-school-uniforms-page-content">
      <div>
        <p><span>Школьная форма</span> — обязательная повседневная форма одежды для учеников
          во время их нахождения в школе и на официальных школьных мероприятиях вне школы</p>
      </div>

      <div class="history-school-uniforms-page-content-card">
        <el-card style="--el-card-bg-color: #3d3d3d; --el-card-border-color: #646464">
          <template #header>
            <div class="card-header">
              <span>Школьная форма в СССР</span>
              <el-icon><School /></el-icon>
            </div>
          </template>
          <div class="card-content">
            <el-image src="/src/assets/img/SchoolSssrForm.jpg" />
          </div>
          <template #footer>
            <p>
              1918 году гимназическая форма дореволюционной России была признана буржуазным
              пережитком и отменена вместе с многими другими разумными наработками в области образования
            </p>
          </template>
        </el-card>

        <el-card style="--el-card-bg-color: #3d3d3d; --el-card-border-color: #646464">
          <template #header>
            <div class="card-header">
              <span>Школьная форма в СССР</span>
            </div>
          </template>
          <div>
            С точки зрения «классовой борьбы» старая форма считалась
            символом принадлежности к высшим сословиям (была даже презрительная
            кличка для сентиментальной девочки — «гимназистка»). С другой стороны — форма символизировала
            абсолютную несвободу ученика, его униженное и подневольное положение
          </div>
        </el-card>
      </div>

      <div class="history-school-uniforms-page-content-sssr">
        <p>
          Но у этого отказа от формы была и другая, более понятная,
          подоплёка — бедность. Ученики ходили в школу в том, что могли
          предоставить им родители, а государство в тот момент активно боролось
          с разрухой, классовыми врагами и пережитками прошлого
        </p>
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

      &-card {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        .el-card {
          @media(max-width: 1000px) {
            width: $drawer-width - 50;
          }
          margin-top: $radius_big;
          margin-right: $radius_big;
          width: $drawer-width - 50;
          color: white;
          .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .card-content {
            display: flex;
            justify-content: left;
            .el-image {
              width: $radius_big * 5;
              height: $height-big;
              border-radius: $radius_medium;
              box-shadow: $size_tiny - 2 $size_tiny - 2 $radius_medium $radius_small / 5 gray;
            }
          }
        }
      }

    &-sssr {
      text-align: left;
      margin-top: $radius_big;
    }
    margin-top: $radius_big;
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
  }
}
</style>