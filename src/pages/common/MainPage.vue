<template>
  <div class="main-page">
    <div class="main-page-main">
      <h1>{{$t('museum.InfoMuseum')}}</h1>
      <h2>
        {{$t('museum.MuseumExposition')}} <p>"{{$t('museum.SchoolHistory')}}"</p>
      </h2>
      <p>
        {{$t('museum.SchoolAddressOne')}} <br> {{$t('museum.SchoolAddressTwo')}}
      </p>
      <a href="https://school8mogilev.by/muzeikomnata" target="_blank">{{$t('museum.VirtualExposition')}}</a>
    </div>

    <div class="main-page-content">
      <h2>{{$t('museum.Valid')}}</h2>
      <ol>
        <li><span>{{$t('museum.SearchScientific')}}:</span> {{$t('museum.SearchScientificDescriptions')}}</li>
        <li><span>{{$t('museum.WorkMuseumOffice')}}:</span> {{$t('museum.WorkMuseumOfficeDescriptions')}}
        </li>
        <li><span>{{$t('museum.CulturalActivities')}}:</span>
          {{$t('museum.CulturalActivitiesDescriptions')}}
        </li>
      </ol>

      <div class="main-page-exhibit">
        <h2>{{$t('museum.MuseumExhibits')}}</h2>
        <el-tabs v-model="activeName" class="demo-tabs">
          <el-tab-pane :label="$t('museum.SchoolAccessories')">
            <p>
              {{$t('museum.SchoolAccessoriesDescription')}}
            </p>
          </el-tab-pane>
          <el-tab-pane :label="$t('museum.PhotoArchive')">
            <p>
              {{$t('museum.PhotoArchiveDescription')}}
            </p>
          </el-tab-pane>
          <el-tab-pane :label="$t('museum.Periodicals')">
            <p>
              {{$t('museum.PeriodicalsDescription')}}
            </p>
          </el-tab-pane>
        </el-tabs>
      </div>

      <div class="main-page-sections">
        <h2>{{$t('museum.SectionsExhibition')}}:</h2>
        <ul>
          <li>{{$t('museum.HistorySchool')}}</li>
          <li>{{$t('museum.FateSchool')}}</li>
          <li>{{$t('museum.TeacherWork')}}</li>
          <li>{{$t('museum.Graduates')}}</li>
          <li>{{$t('museum.Pioneer')}}</li>
          <li>{{$t('museum.SchoolUniform')}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, reactive, Ref, ref, watchEffect} from 'vue'
import {Document, Location, Setting, Menu as IconMenu,} from "@element-plus/icons-vue";

const activeName = ref('first')

const state = reactive({ count: 0 })

const count = ref(0)

const stateTo = reactive({
  count
})
console.log(state.count) // 0
stateTo.count = 1
console.log(count.value) // 1
const addCount = () => {
  count.value++
}

const obj = ref({
  nested: { count: 0 },
  arr: [ 'baz', 'bar' ]
})
const mutateDeeply = () => {
  obj.value.nested.count++
  obj.value.arr.push('nestle')
}

const raw = {}
const proxy = reactive(raw)
console.log(proxy === raw) // false


// interface Author {
//   name: string,
//   books: Array<string>
// }
//
// const author: Author = reactive({
//   name: 'John Doe',
//   books: [
//     'Vue 2 - Advanced Guide',
//     'Vue 3 - Basic Guide',
//     'Vue 4 - The Mystery'
//   ]
// })
//
// const publishedBooksMessage = computed<string | number>(() => {
//   return author.books.length > 0 ? 'Yes' : 'No'
// })
///////////////////////////
// const year: Ref<string | number> = ref('2020')
// console.log(year.value)
// year.value = 2024
// console.log(year.value)
//
//
// interface Book {
//   title: string,
//   description?: string
// }
//
// const book: Book = reactive({ title: 'Harry Potter' })
// console.log(book)
//
//
// const count = ref('Harry')
//
// const double = computed<string>(() => count.value + 'Potter')
//
// const result = double.value.split('')
// console.log(result)
/////////////////////////////////////
// const A0 = ref(0)
// const A1 = ref(1)
// const A2 = computed(() => A1.value + A0.value)
// console.log(A2.value)
// A0.value = 2
// console.log(A2.value)
</script>

<style lang="scss">
@import '/src/styles/variables.scss';

.main-page {
  text-align: center;
  padding: $size_big;

  &-main {
    margin-bottom: 4rem;

    h1 {
      margin-bottom: 3rem;
    }

    h2 {
      margin-bottom: 2rem;
    }

    p:nth-child(3) {
      font-size: $size_small * 2;
      margin-bottom: 1.5rem;
    }

    a {
      color: $color_blue_light_2;
      background-color: $color_blue_very_dark;
      padding: 0.7rem;
      border-radius: 1rem;
      transition: all 0.2s linear;
    }

    a:hover {
      color: $color_blue_light_1;
      background-color: $color_blue_dark_1;
    }
  }

  &-content {
    h2 {
      margin-bottom: 1rem;
    }

    ol {
      font-size: $size_small * 2;
      background-color: $color_main_brown;
      padding: 2rem;
      border-radius: 0.5rem;
      text-align: left;
      margin-bottom: 5rem;

      li {
        span {
          color: $color_orange;
        }
      }

      li:nth-child(2) {
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
    }
  }

  &-exhibit {
    margin-bottom: 5rem;

    .demo-tabs {
      padding: 2rem;
      background-color: #575757;
      border-radius: 0.5rem;
    }
  }

  &-sections {
    h2 {
      margin-bottom: 1.5rem;
    }

    ul {
      text-align: left;

      li {
        margin-bottom: 1rem;
      }
    }
    ul li::marker {
      color: $color_orange_main;
      font-size: $shift_large;
    }
  }
}
</style>