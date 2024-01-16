<template>
    <div class="school-history-page">
<!--      {{$t('common.SchoolHistory')}}-->
      <el-checkbox @click="checked == !checked" v-model="checked" label="Filter" size="large" />

      <div v-for="user in filterUsers" :key="user.age">
        {{user.name}} {{user.last_name}} {{user.age}}
      </div>
    </div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'

const users = [
  {
    name: 'Daniil',
    last_name: 'Melnikov',
    age: 15
  },
  {
    name: 'Max',
    last_name: 'Petrov',
    age: 17
  },
  {
    name: 'Eugene',
    last_name: 'Sidorenko',
    age: 13
  },
  {
    name: 'Kirill',
    last_name: 'Bogdan',
    age: -1
  }
]

const checked = ref(false)

const filterUsers = computed(() => {
  if (checked.value === false) {
    return users.filter(user => user.age < 0)
  } else {
    return users.filter(user => user.age >= 0)
  }
})

</script>

<style lang="scss">
@import '/src/styles/variables.scss';
.school-history-page {
  text-align: center;
  padding: $size;
}
</style>