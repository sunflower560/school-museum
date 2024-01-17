<template>
  <div class="school-history-page">
    <!--      {{$t('common.SchoolHistory')}}-->
    <el-tag type="warning" size="large">MIN: {{ minArrValue }}</el-tag>
    <el-tag type="success" size="large">MAX: {{ maxArrValue }}</el-tag>
    <el-button @click="addNewNumber" type="primary">Add new number</el-button>
    <el-button @click="clearArray" type="danger">Clear Array</el-button>

    <el-row v-for="num in arr" :key="num">
      <el-col>
        <p>{{ num }}</p>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import {computed, Ref, ref, UnwrapRef} from 'vue'

const arr: Ref<UnwrapRef<number[]> | any> = ref([])

const addNewNumber = () => arr.value.push(Math.floor(Math.random() * 100))
const clearArray = () => arr.value = []

const maxArrValue = computed(() => Math.max.apply(null, arr.value))

const minArrValue = computed(() => Math.min.apply(null, arr.value))

</script>

<style lang="scss">
@import '/src/styles/variables.scss';

.school-history-page {
  //text-align: center;
  padding: $size;
  .el-tag {
    margin-right: $radio_average;
  }
}
</style>