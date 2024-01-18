<template>
  <div class="school-history-page">
    <div class="school-history-page-odd">
      <p>ODD:</p>
      <div v-for="num in oddArrayValue" :key="num" v-if="oddArrayValue.length > 0">
        <p>{{ num }}</p>
      </div>
      <p v-else>No odd numbers</p>
    </div>
    <br>
    <el-tag effect="dark" type="danger" size="large">MIN: {{ minArrayValue }}</el-tag>
    <el-tag effect="dark" type="success" size="large">MAX: {{ maxArrayValue }}</el-tag>
    <el-tag effect="dark" type="warning" size="large">SUM: {{ sumArrayValue }}</el-tag>
    <el-tag effect="light" type="success" size="large">ODD: {{ oddArrayValue.length }}</el-tag>
    <el-button @click="addNewNumber" type="primary">Add new number</el-button>
    <el-button @click="clearArray" type="danger">Clear Array</el-button>
    <el-button @click="array = evenArrayValue" type="info">EVEN</el-button>
    <el-row v-for="number in array" :key="number">
      <el-col>
        <p>{{ number }}</p>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import {computed, Ref, ref, UnwrapRef} from 'vue'

const array: Ref<UnwrapRef<number[]> | any | number> = ref([])

const addNewNumber = () => array.value.push(Math.floor(Math.random() * 100))
const clearArray = () => array.value = []

const maxArrayValue = computed(() => Math.max(...array.value))

const minArrayValue = computed(() => Math.min(...array.value))

const sumArrayValue = computed(() => array.value.reduce((acc: any, number: number) => acc + number, 0))

const oddArrayValue = computed(() => array.value.filter((number: number) => number % 2 !== 0))

const evenArrayValue = computed(() => array.value.filter((number: number) => number % 2 == 0))

</script>

<style lang="scss">
@import '/src/styles/variables.scss';

.school-history-page {
  //text-align: center;
  padding: $size;

  &-odd {
    display: flex;
    color: $color_green;
    div {
      display: inline-block;
      p {
        margin-right: $radius_tiny;
      }
    }
  }

  .el-tag {
    margin-right: $radio_average;
  }
}
</style>