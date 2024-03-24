<template>
    <div class="main-page">
        <teleport to=".main-layout__header-dynamic-section" v-if="isMounted">
            <transition name="fade-left" mode="out-in" appear>
              Main page
            </transition>
        </teleport>
        <div class="main-page__container">
          <h1>{{$t('main.mainPage')}}</h1>

          <div class="main-page__introduction">
            <p>
              {{$t('main.introduction')}}
            </p>
            <h2>{{$t('main.informationTitle')}}</h2> <br>
            <ul>
              <li>{{$t('main.informationDescription.one')}}</li>
              <li>{{$t('main.informationDescription.two')}}</li>
              <li>{{$t('main.informationDescription.three')}}</li>
              <li>{{$t('main.informationDescription.four')}}</li>
              <li>{{$t('main.informationDescription.fife')}}</li>
              <li>{{$t('main.informationDescription.six')}}</li>
              <li>{{$t('main.informationDescription.seven')}}</li>
              <li>{{$t('main.informationDescription.eight')}}</li>
            </ul>

            <p>
              {{$t('main.historyTell')}} <br>
              {{$t('main.events')}}
            </p>

            <el-row :gutter="20">
              <el-col :span="24">
                <swiper  :slidesPerView="mq.smMinus ? 1.2 : 4"
                         :spaceBetween="mq.smMinus ? 5 : 20"
                         :loop="true">
                  <swiper-slide v-for="history in historyListVertical" :key="`news-${history.id}`">
                    <news-card :history="history" />
                  </swiper-slide>
                </swiper>
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="24">
                <swiper  :slidesPerView="mq.smMinus ? 1.2 : 4"
                         :spaceBetween="mq.smMinus ? 5 : 20"
                         :loop="true">
                  <swiper-slide v-for="history in historyListHorizontal" :key="`news-${history.id}`">
                    <news-card :history="history" />
                  </swiper-slide>
                </swiper>
              </el-col>
            </el-row>

            <h2>{{$t('main.importantInformation')}}</h2>
            <p>
              {{$t('main.material')}} <br>
              {{$t('main.manyInformation')}} <br> <br>
              {{$t('main.followThisSite')}}
            </p>
          </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {ref, inject} from 'vue';
import {useMounted} from "@vueuse/core";
import {IHistory} from "@/resources/types";

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import NewsCard from "@/components/cards/HistoryCard.vue";
const isMounted = useMounted()

const  mq = inject('mq',{
  smMinus: false,
})

const historyListVertical = ref<Array<IHistory>>([])
const historyListHorizontal = ref<Array<IHistory>>([])

for(let i = 1; i < 14; i++) {
  historyListVertical.value.push({
    id:i,
    image:`/src/assets/img/historyImgVertical/img${i}.jpg`
  })
}

for(let i = 1; i < 11; i++) {
  historyListHorizontal.value.push({
    id:i,
    image:`/src/assets/img/historyImgHorizontal/img${i}.jpg`
  })
}

</script>

<style lang="scss">
@use '@/styles/common/assembly.scss' as *;
@use '@/styles/common/variables.scss' as *;
@import '/src/styles/variables.scss';
.main-page{
  &__introduction {
    & > .el-row {
      margin-bottom: $block-shift-medium;
      .el-col {
        @media #{$md-and-down} {
          margin-bottom: $main-padding;
        }
      }
    }
    margin-top: $main-padding;
    p {
      margin-top: $size_average;
      margin-bottom: $radius_large;
    }

    ul {
     li {
        margin-bottom: 0.5rem;
      }
    }
    ul li::marker {
      color: $color_orange_main;
      font-size: $size_big;
    }
  }
}
</style>
