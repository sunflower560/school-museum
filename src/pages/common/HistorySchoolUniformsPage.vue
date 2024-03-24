<template>
  <div class="history-school__uniforms-page">
    <teleport to=".main-layout__header-dynamic-section" v-if="isMounted">
      <transition name="fade-left" mode="out-in" appear>
        History of school uniforms page
      </transition>
    </teleport>
    <h1>{{$t('historyUniforms.historySchoolUniforms')}}</h1>

    <div class="history-school__uniforms-page-content">
      <div>
        <p><span>{{$t('historyUniforms.schoolForms')}}</span> — {{$t('historyUniforms.eventsForms')}}</p>
      </div>

      <div class="history-school__uniforms-page-content__ussr">
        <h2>{{$t('historyUniforms.formsUssr')}}</h2>

        <h4>{{$t('historyUniforms.1950')}}</h4>
        <el-row :gutter="20">
          <el-col :lg="7" :md="10">
            <img src="/src/assets/img/SchoolUssrForm.jpg" alt="картинки нет"/>
          </el-col>
          <el-col :lg="17" :md="14">
            <p>{{$t('historyUniforms.1918')}}</p>
          </el-col>
        </el-row>

        <p>{{$t('historyUniforms.classStruggle')}}</p>

        <p>{{$t('historyUniforms.studentLackFreedom')}}</p>

        <div class="history-school__uniforms-page-content__ussr-poverty">
          <p>
            {{$t('historyUniforms.background')}} — <span>{{$t('historyUniforms.poverty')}}</span>
          </p>
          <p>
            {{$t('historyUniforms.provideParents')}}
          </p>
        </div>

        <h2>{{$t('historyUniforms.formerImage')}}</h2>

        <div class="history-school__uniforms-page-content__ussr__former-image">
          <p>
            {{$t('historyUniforms.experiments')}} <span>{{$t('historyUniforms.formersImage')}}</span> — {{$t('historyUniforms.strict')}}
          </p>

          <p>
            {{$t('historyUniforms.nowAlready')}} <span>{{$t('historyUniforms.looseUniform')}}</span> {{$t('historyUniforms.bourgeoisLicentiousness')}}
            <a target="_blank" href="https://pandia.ru/text/category/vragi_naroda/">{{$t('historyUniforms.enemiesPeople')}}</a>
          </p>

          <p>
            {{$t('historyUniforms.ussrForms')}}
          </p>

          <el-row :gutter="20">
            <el-col :span="24">
              <swiper :slidesPerView="mq.smMinus ? 1.9 : 3"
                      :spaceBetween="mq.smMinus ? 5 : 20"
                      :loop="true">
                <swiper-slide>
                  <img src="/src/assets/img/manFormUssr.png" alt="картинки нет"/>
                </swiper-slide>
                <swiper-slide>
                  <img src="/src/assets/img/girlFormUssr.png" alt="картинки нет"/>
                </swiper-slide>
                <swiper-slide>
                  <img src="/src/assets/img/manAndGirlFormUssr.png" alt="картинки нет"/>
                </swiper-slide>
              </swiper>
            </el-col>
          </el-row>

          <p>
            <span>{{$t('historyUniforms.dresses')}}</span> {{$t('historyUniforms.cuffs')}}
          </p>
          <p>
            {{$t('historyUniforms.compulsory')}}
            <span>{{$t('historyUniforms.bows')}}</span>
          </p>
          <p>
            <span>{{$t('historyUniforms.bowsBig')}}</span> {{$t('historyUniforms.wereNotAllowed')}}
          </p>
        </div>


        <h2>{{$t('historyUniforms.stalinEra')}}</h2>
        <div class="history-school__uniforms-page-content__ussr__era">
          <p>
            {{$t('historyUniforms.spread')}}
          </p>
          <p>
            {{$t('historyUniforms.administration')}}
          </p>

          <div class="history-school__uniforms-page-content__ussr__era__puritan-morality">
            <el-row :gutter="20">
              <el-col :lg="7" :md="10">
                <img src="/src/assets/img/puritanMorality.png" alt="картинки нет"/>
              </el-col>
              <el-col :lg="17" :md="14">
                <p>{{$t('historyUniforms.hairstyle')}}</p>
              </el-col>
            </el-row>
          </div>

          <p>
            <span>{{$t('historyUniforms.schoolUniform')}}</span> {{$t('historyUniforms.movies')}}
          </p>


        </div>

        <h2>{{$t('historyUniforms.thaw')}}</h2>
        <div class="history-school__uniforms-page-content__ussr__thaw">
          <p>
            <span>{{$t('historyUniforms.warming')}}</span> {{$t('historyUniforms.affected')}}
          </p>

          <p>
            {{$t('historyUniforms.shapeCut')}} <span>{{$t('historyUniforms.1960')}}</span>. {{$t('historyUniforms.luckyMans')}} <span>{{$t('historyUniforms.1970')}}</span> {{$t('historyUniforms.grayTrousers')}}
          </p>

          <p>
            {{$t('historyUniforms.sleeves')}} <span>{{$t('historyUniforms.emblem')}}</span>
            {{$t('historyUniforms.plastic')}}
          </p>
          <br>
          <p>
            {{$t('historyUniforms.schoolchildrenEnd')}} <span> {{$t('historyUniforms.1960')}}</span> {{$t('historyUniforms.cultFilm')}}
          </p>
        </div>

        <h2><span>{{$t('historyUniforms.1980')}}</span> {{$t('historyUniforms.perestroikaInAction')}}</h2>
        <div class="history-school__uniforms-page-content__ussr__1980">
          <el-row :gutter="20">
            <el-col :lg="5" :md="10">
              <img src="/src/assets/img/man1980.png" alt="картинки нет"/>
            </el-col>
            <el-col :lg="19" :md="14">
              <div>
                <p>
                  {{$t('historyUniforms.introduced')}} <span>{{$t('historyUniforms.highSchoolStudents')}}</span>.
                  {{$t('historyUniforms.eighth')}}.
                  <span>{{$t('historyUniforms.girls')}}</span> {{$t('historyUniforms.fromFirstToSeventhGrade')}}
                </p>
                <p>
                  {{$t('historyUniforms.u')}} <span>{{$t('historyUniforms.mans')}}</span> {{$t('historyUniforms.costume')}} <span>{{$t('historyUniforms.emblem')}}</span> {{$t('historyUniforms.onTheSleeve')}}
                </p>
              </div>
            </el-col>
          </el-row>

          <p>
            {{$t('historyUniforms.veryOften')}} <span>{{$t('historyUniforms.emblems')}}</span> {{$t('historyUniforms.cutOff')}}
          </p>
          <br>
          <p>
            {{$t('historyUniforms.schoolUniform')}} <span>{{$t('historyUniforms.1980H')}}</span> {{$t('historyUniforms.canSee')}}
          </p>

          <el-row :gutter="20">
            <el-col :lg="12" :md="24">
              <h2>1984</h2>
              <p>
                {{$t('historyUniforms.for')}} <span>{{$t('historyUniforms.forGirls')}}</span> {{$t('historyUniforms.threePieceSuit')}}
              </p>
            </el-col>
            <el-col :lg="12" :md="24">
              <h2>1988</h2>
              <p>
                {{$t('historyUniforms.leningrad')}}
              </p>
            </el-col>
          </el-row>

          <div class="history-school__uniforms-page-content__ussr__1980-photo-girl">
            <img src="/src/assets/img/girl1984.png" alt="картинки нет"/>
            <img src="/src/assets/img/girl1988.png" alt="картинки нет"/>
          </div>
          <br>
          <p>
            {{$t('historyUniforms.wasDifferent')}}
          </p>
          <p>
            {{$t('historyUniforms.ukraine')}}
          </p>

          <div class="history-school__uniforms-page-content__ussr__1980-lady">
            <p>
              {{$t('historyUniforms.ThisTheFormFor')}} <span>{{$t('historyUniforms.forGirls')}}</span> {{$t('historyUniforms.contributed')}}
            </p>
            <p>
              {{$t('historyUniforms.pleated')}} <span>{{$t('historyUniforms.youngLady')}}</span>
            </p>
          </div>

          <el-row :gutter="20">
            <el-col :lg="7" :md="10">
              <img src="/src/assets/img/icons.png" alt="картинки нет"/>
            </el-col>
            <el-col :lg="17" :md="14">
              <p>{{$t('historyUniforms.mandatoryAddition')}} <a href="https://pandia.ru/text/category/oktyabryata/" target="_blank">{{$t('historyUniforms.october')}}</a>
                {{$t('historyUniforms.pioneer')}} <span>{{$t('historyUniforms.icons')}}</span>.
                {{$t('historyUniforms.mustWear')}} <span>{{$t('historyUniforms.pioneerTie')}}</span></p>
            </el-col>
          </el-row>

          <p>
            {{$t('historyUniforms.pioneerBadge')}} <span>{{$t('historyUniforms.pioneers')}}</span>,
            {{$t('historyUniforms.activelyInvolved')}} <a href="https://pandia.ru/text/category/obshestvennie_raboti/" target="_blank">{{$t('historyUniforms.socialWork')}}</a>.
            {{$t('historyUniforms.bitMore')}} <span>{{$t('historyUniforms.activeWork')}}</span>
          </p>
        </div>
      </div>

      <h2>{{$t('historyUniforms.modernRussia')}}</h2>
      <div>
        <p>
          {{$t('historyUniforms.in')}} <span>{{$t('historyUniforms.modernsRussia')}}</span> {{$t('historyUniforms.thereNoSingle')}} <span>{{$t('historyUniforms.ussr')}}</span>, {{$t('historyUniforms.ownForm')}}
        </p>
      </div>

      <h2>{{$t('historyUniforms.uniformsInOtherCountries')}}</h2>
      <div class="history-school__uniforms-page-content__country">
        <p>
          {{$t('historyUniforms.bigEuropeanCountry')}} <span>{{$t('historyUniforms.schoolUniforms')}}</span>,
          {{$t('historyUniforms.greatBritain')}}. {{$t('historyUniforms.formerColonies')}}
        </p>
        <br>
        <p>
          {{$t('historyUniforms.in')}} <span>{{$t('historyUniforms.germany')}}</span> {{$t('historyUniforms.noUniformUniform')}}. <br>
          {{$t('historyUniforms.someSchoolsHaveIntroduced')}} <span>{{$t('historyUniforms.uniformClothes')}}</span>, {{$t('historyUniforms.studentsCanDevelopment')}}. <br>
          {{$t('historyUniforms.duringThirdReich')}}
        </p>
        <br>
        <p>
          {{$t('historyUniforms.in')}} <span>{{$t('historyUniforms.america')}}</span> {{$t('historyUniforms.and')}} <span>{{$t('historyUniforms.canada')}}</span>
          {{$t('historyUniforms.privateSchools')}}. <br>
          {{$t('historyUniforms.publicSchools')}}
        </p>

        <el-row :gutter="20">
          <el-col :lg="7" :md="10">
            <img src="src/assets/img/japan.png" alt="картинки нет"/>
          </el-col>
          <el-col :lg="17" :md="14">
            <p>
              {{$t('historyUniforms.mostAverage')}} <span>{{$t('historyUniforms.japan')}}</span> {{$t('historyUniforms.options')}} <span>{{$t('historyUniforms.mans')}}</span>
              {{$t('historyUniforms.whiteShirt')}} <span>{{$t('historyUniforms.forGirls')}}</span>, {{$t('historyUniforms.sailorSuit')}}. <span>{{$t('historyUniforms.primaryStudents')}}</span>, {{$t('historyUniforms.rule')}}
            </p>
          </el-col>
        </el-row>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, inject, reactive, ref} from "vue";
import {useMounted} from "@vueuse/core/index";
import 'swiper/css';
import {Swiper, SwiperSlide} from 'swiper/vue';

const mq = inject('mq', {
  smMinus: false,
})

const isMounted = useMounted()
</script>

<style lang="scss">
@use "@/styles/common/variables.scss" as *;
@import '/src/styles/variables.scss';

.history-school__uniforms-page {
  padding: $size_big;

  h1 {
    margin-bottom: $radio_average;
  }

  a {
    font-weight: $font_w_medium;
    color: $color_orange_main;
  }

  &-content {
    span {
      color: $color_main_dark_2;
      font-weight: $font_w_medium;
    }

    h2 {
      margin-top: $radius_big;
      margin-bottom: $radio_average;
    }

    &__ussr {
      margin-top: $radio_average;

      h4 {
        text-align: center;
      }

      img {
        width: $radius_big * 5;
        border-radius: $size_small * 4;
      }

      .el-row {
        margin-top: $radius_medium;
        margin-bottom: $radio_average;

        .el-col {
          &:nth-child(2) {
            display: flex;
            align-items: flex-end;
          }
        }
      }

      &-poverty {
        margin-top: $radius_large;
      }

      &__former-image {
        p {
          margin-bottom: $radius_medium;
        }

        .el-row {
          .el-col {
            img {
              cursor: pointer;
              width: ($radius_large - 1) * 5;
              @include transition(transform);

              &:hover {
                transform: scale(.95) rotate(1deg);
              }
            }
          }
        }
      }

      &__era {
        &__puritan-morality {
          .el-row {
            .el-col {
              img {
                width: $radius_big * 5;
              }
            }
          }
        }
      }

      &__thaw {
        p {
          margin-top: $radius_medium;
        }
      }

      &__1980 {
        .el-row {
          .el-col {
            &:nth-child(2) {
              display: block;
            }
          }

          &:nth-child(1) {
            .el-col {
              @media #{$md-and-down} {
                &:nth-child(1) {
                  text-align: center;
                }
              }

              &:nth-child(2) {
                display: flex;
                align-items: flex-start;

                p {
                  margin-bottom: $radius_small;
                }
              }

              img {
                width: $radius_big * 3;
              }
            }
          }
        }
        &-photo-girl {
          @media #{$md-and-down} {
            img {
              &:nth-child(1) {
                display: none;
              }
            }
          }
          display: flex;
          justify-content: space-around;
        }
        &-lady {
          margin-bottom: $radius_big;
          p {
            margin-top: $radius_medium;
          }
        }
      }
    }

    &__country {
      .el-row {
        margin-top: $radius_big;
        .el-col {
          &:nth-child(1) {
            img {
              border-radius: $size_small * 4;
            }
          }
        }
      }
    }
  }
}
</style>