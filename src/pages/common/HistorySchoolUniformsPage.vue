<template>
  <div class="history-school-uniforms-page">
<!--    <el-tag effect="dark" type="danger" size="large">MIN: {{ minItemValue }}</el-tag>-->
<!--    <el-tag effect="dark" type="success" size="large">MAX: {{ maxItemValue }}</el-tag>-->

<!--    <el-tag effect="dark" type="warning" size="large">SUM: {{ itemsSumma }}</el-tag>-->
<!--    <el-tag effect="light" type="success" size="large">ODD: {{ oddItemCount }}</el-tag>-->
<!--    <el-tag effect="light" type="danger" size="large">EVEN: {{ evenItemCount }}</el-tag>-->

    <el-button @click="addNewItem" type="primary">Add new number</el-button>
    <el-button @click="clearItems" type="danger">Clear Array</el-button>

    <el-row v-for="item in itemsSources" :key="item">
      <el-col>
        <p>{{item.value}} <el-checkbox v-model="item.isActive" :label="item.isActive">{{item.isActive}}</el-checkbox></p>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";

interface IItem{
  value:number
  isActive:boolean
}

const itemsSources = ref<Array<IItem>>([
  {
    value: 16,
    isActive: true
  }
])

const items = computed(() => {
  const filteredItems = []
  for(let i = 0; i < itemsSources.value.length; i++) {
    if(itemsSources.value[i]?.isActive) {
      filteredItems.push(itemsSources.value[i])
    }
  }
  return filteredItems
})

const addNewItem = () => itemsSources.value.push({value: Math.floor(Math.random() * 100), isActive: true})
const clearItems = () => itemsSources.value = []
//
// const maxItemValue = computed(() => !itemsSources.value.length ? 0 : Math.max(...itemsSources.value))
// const minItemValue = computed(() => !itemsSources.value.length ? 0 : Math.min(...itemsSources.value))
//
// const itemsSumma = computed(() => itemsSources.value.reduce((previousValue, currentValue) => previousValue + currentValue, 0))
//
// const oddItemCount = computed(() => itemsSources.value.filter((number: number) => number % 2 !== 0).length)
//
// const evenItemCount = computed(() => itemsSources.value.length - oddItemCount.value)



// const maxItemValue = computed(() => {
//   let max = 0
//   items.value.forEach((item, i, items) => items[i].value > max ? max = items[i].value : 0)
//   return max
// })
//
// const minItemValue = computed(() => {
//   let min = 100
//   if (!items.value.length) {
//     min = 0
//   }
//   items.value.forEach((item, i, items) => items[i].value < min ? min = items[i].value : 0)
//   return min
// })
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