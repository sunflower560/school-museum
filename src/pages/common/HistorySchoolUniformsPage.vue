<template>
  <div class="history-school-uniforms-page">
    <el-tag effect="dark" type="danger" size="large">MIN: {{ minItemValue }}</el-tag>
    <el-tag effect="dark" type="success" size="large">MAX: {{ maxItemValue }}</el-tag>

    <el-tag effect="dark" type="warning" size="large">SUM: {{ itemsSumma }}</el-tag>
    <el-tag effect="light" type="success" size="large">ODD: {{ oddItemCount }}</el-tag>
    <el-tag effect="light" type="danger" size="large">EVEN: {{ evenItemCount }}</el-tag>

    <el-button @click="addNewItem" type="primary">Add new number</el-button>
    <el-button @click="clearItems" type="danger">Clear Array</el-button>

    <el-row v-for="item in itemsSources" :key="item">
      <el-col>
        <p>{{item.value}} <el-checkbox @click="items" v-model="item.isActive" :label="item.isActive">{{item.isActive}}</el-checkbox></p>
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

const addNewItem = () => itemsSources.value.push({value: Math.floor(Math.random() * 100), isActive: true})
const clearItems = () => itemsSources.value = []

//filter + map
const itemsFilterMap = computed(() => {
  const filterItemValues = []
  for(let i = 0; i < itemsSources.value.length; i++)
    if(itemsSources.value[i]?.isActive && typeof itemsSources.value[i]?.value === 'number')
      filterItemValues.push(itemsSources.value[i].value)
  return filterItemValues
})

const items = computed(() => {
  return itemsSources.value
      .filter(item => item?.isActive && typeof item?.value === 'number')
      .map(item => item.value)
})


const maxItemValue = computed(() => !items.value.length ? 0 : Math.max(...items.value))
const minItemValue = computed(() => !items.value.length ? 0 : Math.min(...items.value))

const itemsSumma = computed(() => items.value.reduce((previousValue, currentValue) => previousValue + currentValue, 0))

const oddItemCount = computed(() => items.value.filter((number: number) => number % 2 !== 0).length)

const evenItemCount = computed(() => items.value.length - oddItemCount.value)



// filter
// const items = computed(() => {
//   const filteredItems = []
//   for(let i = 0; i < itemsSources.value.length; i++) {
//     if(itemsSources.value[i]?.isActive) {
//       filteredItems.push(itemsSources.value[i])
//     }
//   }
//   return filteredItems
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