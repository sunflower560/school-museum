<template>
  <div class="main-page">
    <teleport to=".main-layout__header-dynamic-section" v-if="isMounted">
      <transition name="fade-left" mode="out-in" appear>
        Main page
      </transition>
    </teleport>
    <div class="main-page__container">
      <h1>{{ $t('main.mainPage') }}</h1>

      <div class="main-page__introduction">
        <p>
          {{ $t('main.introduction') }}
        </p>
        <h2>{{ $t('main.informationTitle') }}</h2> <br>
        <ul>
          <li>{{ $t('main.informationDescription.one') }}</li>
          <li>{{ $t('main.informationDescription.two') }}</li>
          <li>{{ $t('main.informationDescription.three') }}</li>
          <li>{{ $t('main.informationDescription.four') }}</li>
          <li>{{ $t('main.informationDescription.fife') }}</li>
          <li>{{ $t('main.informationDescription.six') }}</li>
          <li>{{ $t('main.informationDescription.seven') }}</li>
          <li>{{ $t('main.informationDescription.eight') }}</li>
        </ul>

        <p>
          {{ $t('main.historyTell') }} <br>
          {{ $t('main.events') }}
        </p>

        <!--            <el-row :gutter="20">-->
        <!--              <el-col :span="24">-->
        <!--                <swiper  :slidesPerView="mq.smMinus ? 1.2 : 4"-->
        <!--                         :spaceBetween="mq.smMinus ? 5 : 20"-->
        <!--                         :loop="true">-->
        <!--                  <swiper-slide v-for="history in historyListVertical" :key="`news-${history.id}`">-->
        <!--                    <history-card :history="history" />-->
        <!--                  </swiper-slide>-->
        <!--                </swiper>-->
        <!--              </el-col>-->
        <!--            </el-row>-->

        <!--            <el-row :gutter="20">-->
        <!--              <el-col :span="24">-->
        <!--                <swiper  :slidesPerView="mq.smMinus ? 1.2 : 4"-->
        <!--                         :spaceBetween="mq.smMinus ? 5 : 20"-->
        <!--                         :loop="true">-->
        <!--                  <swiper-slide v-for="history in historyListHorizontal" :key="`news-${history.id}`">-->
        <!--                    <history-card :history="history" />-->
        <!--                  </swiper-slide>-->
        <!--                </swiper>-->
        <!--              </el-col>-->
        <!--            </el-row>-->

        <el-row :gutter="20">
          <el-col :span="24">
            <swiper :slidesPerView="mq.smMinus ? 1.2 : 4"
                    :spaceBetween="mq.smMinus ? 5 : 20"
                    :loop="true">
              <swiper-slide>
                <div class="history-card">
                  <el-card shadow="hover">
                    <img src="/src/assets/img/historyImgVertical/img1.jpg" alt="картинки нет"/>
                  </el-card>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="history-card">
                  <el-card shadow="hover">
                    <img src="/src/assets/img/historyImgVertical/img2.jpg" alt="картинки нет"/>
                  </el-card>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="history-card">
                  <el-card shadow="hover">
                    <img src="/src/assets/img/historyImgVertical/img3.jpg" alt="картинки нет"/>
                  </el-card>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="history-card">
                  <el-card shadow="hover">
                    <img src="/src/assets/img/historyImgVertical/img4.jpg" alt="картинки нет"/>
                  </el-card>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="history-card">
                  <el-card shadow="hover">
                    <img src="/src/assets/img/historyImgVertical/img5.jpg" alt="картинки нет"/>
                  </el-card>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="history-card">
                  <el-card shadow="hover">
                    <img src="/src/assets/img/historyImgVertical/img6.jpg" alt="картинки нет"/>
                  </el-card>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="history-card">
                  <el-card shadow="hover">
                    <img src="/src/assets/img/historyImgVertical/img7.jpg" alt="картинки нет"/>
                  </el-card>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="history-card">
                  <el-card shadow="hover">
                    <img src="/src/assets/img/historyImgVertical/img8.jpg" alt="картинки нет"/>
                  </el-card>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="history-card">
                  <el-card shadow="hover">
                    <img src="/src/assets/img/historyImgVertical/img9.jpg" alt="картинки нет"/>
                  </el-card>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="history-card">
                  <el-card shadow="hover">
                    <img src="/src/assets/img/historyImgVertical/img10.jpg" alt="картинки нет"/>
                  </el-card>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="history-card">
                  <el-card shadow="hover">
                    <img src="/src/assets/img/historyImgVertical/img11.jpg" alt="картинки нет"/>
                  </el-card>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="history-card">
                  <el-card shadow="hover">
                    <img src="/src/assets/img/historyImgVertical/img12.jpg" alt="картинки нет"/>
                  </el-card>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="history-card">
                  <el-card shadow="hover">
                    <img src="/src/assets/img/historyImgVertical/img13.jpg" alt="картинки нет"/>
                  </el-card>
                </div>
              </swiper-slide>
            </swiper>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="24">
            <swiper :slidesPerView="mq.smMinus ? 1.2 : 4"
                    :spaceBetween="mq.smMinus ? 5 : 20"
                    :loop="true">
              <swiper-slide>
                <div class="history-card">
                  <el-card shadow="hover">
                    <img src="/src/assets/img/historyImgHorizontal/img1.jpg" alt="картинки нет"/>
                  </el-card>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="history-card">
                  <el-card shadow="hover">
                    <img src="/src/assets/img/historyImgHorizontal/img2.jpg" alt="картинки нет"/>
                  </el-card>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="history-card">
                  <el-card shadow="hover">
                    <img src="/src/assets/img/historyImgHorizontal/img3.jpg" alt="картинки нет"/>
                  </el-card>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="history-card">
                  <el-card shadow="hover">
                    <img src="/src/assets/img/historyImgHorizontal/img4.jpg" alt="картинки нет"/>
                  </el-card>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="history-card">
                  <el-card shadow="hover">
                    <img src="/src/assets/img/historyImgHorizontal/img5.jpg" alt="картинки нет"/>
                  </el-card>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="history-card">
                  <el-card shadow="hover">
                    <img src="/src/assets/img/historyImgHorizontal/img6.jpg" alt="картинки нет"/>
                  </el-card>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="history-card">
                  <el-card shadow="hover">
                    <img src="/src/assets/img/historyImgHorizontal/img7.jpg" alt="картинки нет"/>
                  </el-card>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="history-card">
                  <el-card shadow="hover">
                    <img src="/src/assets/img/historyImgHorizontal/img8.jpg" alt="картинки нет"/>
                  </el-card>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="history-card">
                  <el-card shadow="hover">
                    <img src="/src/assets/img/historyImgHorizontal/img9.jpg" alt="картинки нет"/>
                  </el-card>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="history-card">
                  <el-card shadow="hover">
                    <img src="/src/assets/img/historyImgHorizontal/img10.jpg" alt="картинки нет"/>
                  </el-card>
                </div>
              </swiper-slide>
            </swiper>
          </el-col>
        </el-row>

        <h2>{{ $t('main.importantInformation') }}</h2>
        <p>
          {{ $t('main.material') }} <br>
          {{ $t('main.manyInformation') }} <br> <br>
          {{ $t('main.followThisSite') }}
        </p>
      </div>

      <div class="main-page__container-programmer">
        <span>{{ $t('common.developer') }}:</span> {{ $t('common.daniil') }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref, inject} from 'vue';
import {useMounted} from "@vueuse/core";
import 'swiper/css';
import {Swiper, SwiperSlide} from 'swiper/vue';
import HistoryCard from "@/components/cards/HistoryCard.vue";

export interface IHistory {
  id: number,
  img: string
}

const isMounted = useMounted()

const mq = inject('mq', {
  smMinus: false,
})

const historyListVertical = ref<Array<IHistory>>([])
const historyListHorizontal = ref<Array<IHistory>>([])

for (let i = 1; i < 14; i++) {
  historyListVertical.value.push({
    id: i,
    img: `src/assets/img/historyImgVertical/img${i}.jpg`
  })
}

for (let i = 1; i < 11; i++) {
  historyListHorizontal.value.push({
    id: i,
    img: `src/assets/img/historyImgHorizontal/img${i}.jpg`
  })
}

</script>

<style lang="scss">
@use "@/styles/common/variables.scss" as *;
@use "@/styles/mixins/environment.scss" as env;
@use "@/styles/common/assembly.scss" as *;
@use "@/styles/animations/rotation.scss";
@import '/src/styles/variables.scss';

.main-page {
  &__container {
    &-programmer {
      span {
        font-weight: 700;
      }
    }
  }

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

    .history-card {
      cursor: pointer;

      .el-card {
        @include transition(transform);

        &:hover {
          transform: scale(.95) rotate(1deg);

          p {
            color: $color-primary;
          }
        }

        &__body {
          min-height: 100px;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          p {
            @include transition(color);
            padding: $card-padding;
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
