<template>
  <div class="history-school-uniforms-page">
    <el-tag effect="dark" type="danger" size="large">MIN: {{ minItemValue }}</el-tag>
    <el-tag effect="dark" type="success" size="large">MAX: {{ maxItemValue }}</el-tag>

    <el-tag effect="dark" type="warning" size="large">SUM: {{ itemsSumma }}</el-tag>
    <el-tag effect="light" type="success" size="large">ODD: {{ oddItemCount }}</el-tag>
    <el-tag effect="light" type="danger" size="large">EVEN: {{ evenItemCount }}</el-tag>

    <el-button @click="addNewItem" type="primary">Add new number</el-button>
    <el-button @click="clearItems" type="danger">Clear Array</el-button>
    <el-row v-for="item in items" :key="item">
      <el-col>
        <p>{{ item }}</p>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";

const items = ref<Array<number>>([])

const addNewItem = () => items.value.push(Math.floor(Math.random() * 100))
const clearItems = () => items.value = []

const maxItemValue = computed(() => Number.isFinite(Math.max(...items.value)) ? Math.max(...items.value) : 0)

const minItemValue = computed(() => Number.isFinite(Math.min(...items.value)) ? Math.min(...items.value) : 0)

const itemsSumma = computed(() => items.value.reduce((previousValue, currentValue) => previousValue + currentValue, 0))

const oddItemCount = computed(() => items.value.filter((number: number) => number % 2 !== 0).length)

const evenItemCount = computed(() => items.value.length - oddItemCount.value)
</script>

<style lang="scss">
@import '/src/styles/variables.scss';

.history-school-uniforms-page {
  //text-align: center;
  padding: $size;
  //&-odd {
  //  display: flex;
  //  color: $color_green;
  //  div {
  //    display: inline-block;
  //    p {
  //      margin-right: $radius_tiny;
  //    }
  //  }
  //}

  .el-tag {
    margin-right: $radio_average;
  }
}
</style>