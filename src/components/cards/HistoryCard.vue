<template>
  <div class="news-card">
    <el-card shadow="hover">
      <img :src="history.image" alt="картинки нет"/>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import {IHistory} from "@/resources/types";

const props = defineProps<{
  history: IHistory
}>()

</script>

<style lang="scss">
@use "@/styles/common/variables.scss" as *;
@use "@/styles/mixins/environment.scss" as env;
@use "@/styles/common/assembly.scss" as *;
@use "@/styles/animations/rotation.scss";
.news-card{
  cursor: pointer;
  .el-card{
    @include transition(transform);
    &:hover{
      transform: scale(.95) rotate(1deg);
      p{
        color: $color-primary;
      }
    }
    &__body{
      min-height: 100px;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p{
        @include transition(color);
        padding: $card-padding;
        margin: 0;
      }
    }
  }

}
</style>