<template>
  <div class="history-school-uniforms-page">

    <el-row>
      <el-col :lg="9">
        <div class="history-school-uniforms-page-people">
          <div class="history-school-uniforms-page-people-management">
            <el-button @click="addNewHuman" type="success">Add human</el-button>
            <el-button @click="peopleSources = allManHuman" type="primary">All Man</el-button>
            <el-button @click="peopleSources = allWomanHuman" type="primary">All Woman</el-button>
            <br>
            <el-tag effect="dark" type="warning" size="large">SUM: {{ peopleSalarySumma.toFixed(2) }}</el-tag>
            <el-tag effect="light" type="success" size="large">MAN: {{ manHumanCount }}</el-tag>
            <el-tag effect="light" type="danger" size="large">WOMAN: {{ womanHumanCount }}</el-tag>
          </div>
          <el-input v-model="searchHuman" />
          <ul v-for="human in filteredPeople" :key="human.id">
            <li>
              <el-button @click="removeHuman(human.id)" type="danger" size="small">
                <p>X</p></el-button>
              {{human.id}}) {{human.name}} {{human.lastName}} {{human.age}}, salary: {{human.salary.toFixed(2)}} ₽
              <el-checkbox @click="items" v-model="human.isActive" :label="human.isActive">{{human.isActive }}</el-checkbox>
              {{human.gender}}
            </li>
            <br>
          </ul>
        </div>
      </el-col>

      <el-col :lg="15">
        <el-tag effect="dark" type="danger" size="large">MIN: {{ minItemValue }}</el-tag>
        <el-tag effect="dark" type="success" size="large">MAX: {{ maxItemValue }}</el-tag>

        <el-tag effect="dark" type="warning" size="large">SUM: {{ itemsSumma }}</el-tag>
        <el-tag effect="light" type="success" size="large">ODD: {{ oddItemCount }}</el-tag>
        <el-tag effect="light" type="danger" size="large">EVEN: {{ evenItemCount }}</el-tag>

        <el-button @click="addNewItem" type="primary">Add new number</el-button>
        <el-button @click="clearItems" type="danger">Clear Array</el-button>

        <el-row v-for="item in itemsSources" :key="item">
          <el-col>
            <p>{{ item.value }}
              <el-checkbox @click="items" v-model="item.isActive" :label="item.isActive">{{ item.isActive }}
              </el-checkbox>
            </p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import {computed, reactive, ref} from "vue";

interface IHuman {
  id: number,
  name: string,
  lastName: string,
  age: number,
  salary: number,
  isActive: boolean,
  gender: string
}

interface IItem {
  value: number
  isActive: boolean
}

const searchHuman = ref('')

const fieldHuman: Array<string> = ['id', 'age', 'salary', 'name', 'lastName', 'gender']

const filteredPeople = computed(() => peopleSources.value.filter(human => {
      return fieldHuman.some(field => typeof human[field] === 'string' || 'number' ? human[field]
          .toString().toUpperCase().includes(searchHuman.value.toUpperCase()) : '')
    })
)

const namesMan = ['Max', 'Vlad', 'Andrei']
const namesWoman = ['Sofia', 'Elena', 'Maria']
const lastNames = ['Sidorenko', 'Aksenchik', 'Trifonova', 'Sinitsen']

const peopleSources = ref<Array<IHuman>>([
  {id: 1, name: 'Max', lastName: 'Sidorenko', age: 27, salary: 30000, isActive: true, gender: 'Man'},
  {id: 2, name: 'Vlad', lastName: 'Aksenchik', age: 24, salary: 25000, isActive: true, gender: 'Man'},
  {id: 3, name: 'Sofia', lastName: 'Trifonova', age: 31, salary: 27000, isActive: true, gender: 'Woman'},
  {id: 4, name: 'Andrei', lastName: 'Sinitsen', age: 24, salary: 80000, isActive: true, gender: 'Man'}
])

const people = computed(() => peopleSources.value
    .filter(human => human?.isActive && typeof human?.salary === 'number')
    .map(human => ({salary: human.salary, gender: human.gender})))

const addNewHuman = () => {
  const humanId = peopleSources.value.length + 1
  const name = [namesWoman, namesMan][Math.floor(Math.random() * 2)][Math.floor(Math.random() * 3)]
  const gender = namesMan.includes(name) ? 'Man' : 'Woman'
  peopleSources.value.push({
    id: humanId,
    name: name,
    lastName: lastNames[Math.floor(Math.random() * 4)],
    age: Math.floor(Math.random() * 56),
    salary: Math.random() * 500000,
    isActive: true,
    gender: gender
  })
}
const peopleSalarySumma = computed(() => people.value.reduce((previousSalary, currentSalary) => previousSalary + currentSalary.salary, 0))
const removeHuman = (id: number) => peopleSources.value = peopleSources.value.filter(human => human.id !== id)

const manHumanCount = computed(() => people.value.filter(human => human.gender === 'Man').length)
const womanHumanCount = computed(() => people.value.length - manHumanCount.value)
const allManHuman = computed(() => peopleSources.value.filter(human => human.gender === 'Man'))
const allWomanHuman = computed(() => peopleSources.value.filter(human => human.gender === 'Woman'))


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
  for (let i = 0; i < itemsSources.value.length; i++)
    if (itemsSources.value[i]?.isActive && typeof itemsSources.value[i]?.value === 'number')
      filterItemValues.push(itemsSources.value[i].value)
  return filterItemValues
})

const items = computed(() => itemsSources.value
    .filter(item => item?.isActive && typeof item?.value === 'number')
    .map(item => item.value))


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

  ul {
    list-style-type: none;
  }

  &-people {
    .el-input {
      width: $radius_big * 6;
      margin-bottom: $radio_average;
    }

    &-management {
      margin-bottom: $radio_average;

      .el-tag {
        margin-right: $radio_average;
        margin-top: $radius_medium;
      }
    }
  }
}
</style>