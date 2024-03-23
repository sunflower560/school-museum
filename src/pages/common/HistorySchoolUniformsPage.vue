<template>
  <div class="history-school__uniforms-page">
    <teleport to=".main-layout__header-dynamic-section" v-if="isMounted">
      <transition name="fade-left" mode="out-in" appear>
        History of school uniforms page
      </transition>
    </teleport>
    <h1>История школьной формы</h1>

    <div class="history-school__uniforms-page-content">
      <div>
        <p><span>Школьная форма</span> — обязательная повседневная форма одежды для учеников
          во время их нахождения в школе и на официальных школьных мероприятиях вне школы</p>
      </div>

      <div class="history-school__uniforms-page-content__ussr">
        <h2>Школьная форма в СССР</h2>

        <h4>1920—1950 годы: От эксперимента к классике </h4>
        <el-row :gutter="20">
          <el-col :lg="7" :md="10">
            <el-image src="src/assets/img/SchoolUssrForm.jpg"/>
          </el-col>
          <el-col :lg="17" :md="14">
            <p>В 1918 году гимназическая форма дореволюционной
              России была признана буржуазным пережитком и отменена
              вместе с многими другими разумными наработками в области образования</p>
          </el-col>
        </el-row>

        <p>С точки зрения «классовой борьбы» старая форма считалась символом
          принадлежности к высшим сословиям (была даже презрительная кличка
          для сентиментальной девочки — «гимназистка»)</p>

        <p>С другой стороны — форма символизировала абсолютную несвободу ученика,
          его униженное и подневольное положение</p>

        <div class="history-school__uniforms-page-content__ussr-poverty">
          <p>
            Но у этого отказа от формы была и другая, более понятная,
            подоплёка — <span>бедность</span>
          </p>
          <p>
            Ученики ходили в школу в том, что могли
            предоставить им родители, а государство в тот момент активно боролось
            с разрухой, классовыми врагами и пережитками прошлого.
          </p>
        </div>

        <h2>Былой образ</h2>

        <div class="history-school__uniforms-page-content__ussr__former-image">
          <p>
            Однако со временем, когда эпоха экспериментов уступила место иным реалиям,
            было решено возвратиться к <span>былому образу</span> — к коричневым строгим платьям,
            фартукам, ученическим курточкам и отложным воротничкам
          </p>

          <p>
            Теперь уже <span>«свободная форма одежды»</span> стала ассоциироваться с
            буржуазной разнузданностью, а всех дерзких экспериментаторов 1920-х
            было решено объявить «вредителями» и <a target="_blank"
                                                    href="https://pandia.ru/text/category/vragi_naroda/">«врагами
            народа»</a>
          </p>

          <p>
            В СССР школьная форма несколько раз менялась.
            Существовало несколько моделей. У девочек — классическое
            коричневое платье с чёрным (повседневным) или белым
            (для торжественных мероприятий) фартуком, завязывавшимся сзади на бант
          </p>

          <el-row :gutter="20">
            <el-col :span="24">
              <swiper :slidesPerView="mq.smMinus ? 1.9 : 3"
                      :spaceBetween="mq.smMinus ? 5 : 20"
                      :loop="true">
                <swiper-slide>
                  <el-image src="src/assets/img/manFormUssr.png"/>
                </swiper-slide>
                <swiper-slide>
                  <el-image src="src/assets/img/girlFormUssr.png"/>
                </swiper-slide>
                <swiper-slide>
                  <el-image src="src/assets/img/manAndGirlFormUssr.png"/>
                </swiper-slide>
              </swiper>
            </el-col>
          </el-row>

          <p>
            <span>Платья</span> были скромно украшены кружевными воротничками и манжетами
          </p>
          <p>
            Ношение воротника и манжетов было обязательным. В дополнение к этому
            девочки могли носить чёрные или коричневые (повседневные) или белые (парадные)
            <span>банты</span>
          </p>
          <p>
            <span>Банты</span> других цветов по правилам не допускались. В целом, форма для девочек
            мало чем отличалась от дореволюционного образца
          </p>
        </div>


        <h2>Эпоха Сталина</h2>
        <div class="history-school__uniforms-page-content__ussr__era">
          <p>
            Строгость нравов эпохи Сталина распространялась,
            разумеется, и на школьную жизнь
          </p>
          <p>
            Самые незначительные эсксперименты с длиной или иными параметрами школьной
            формы сурово карались администрацией учебного заведения
          </p>

          <div class="history-school__uniforms-page-content__ussr__era__puritan-morality">
            <el-row :gutter="20">
              <el-col :lg="7" :md="10">
                <el-image src="src/assets/img/puritanMorality.png"/>
              </el-col>
              <el-col :lg="17" :md="14">
                <p>Даже причёска должна была отвечать требованиям пуританской морали —
                  «модельные стрижки» до конца 50-х годов были под строгим запретом,
                  не говоря уже об окраске волос. Девочки обязательно носили косы с бантами</p>
              </el-col>
            </el-row>
          </div>

          <p>
            <span>Школьную форму</span> эпохи можно увидеть в
            фильмах «Первоклассница», «Алёша Птицын вырабатывает
            характер» и «Васёк Трубачёв и его товарищи»
          </p>


        </div>

        <h2>Оттепель</h2>
        <div class="history-school__uniforms-page-content__ussr__thaw">
          <p>
            <span>«Потепление»</span> режима не сразу сказалось на демократизации школьной формы, однако, это всё-таки
            произошло
          </p>

          <p>
            Покрой формы стал более тождествен тем направлениям моды,
            которые имели место в <span>1960-х</span>. Правда, повезло только мальчикам.
            У мальчиков с середины <span>1970-х</span> серые шерстяные брюки и курточки были
            заменены на брюки и куртки из полушерстяной ткани синего цвета.
            Покрой курток напоминал классические джинсовые куртки (в мире набирала обороты так называемая «джинсовая
            мода»)
          </p>

          <p>
            На боковой части рукава была нашита <span>эмблема</span>
            из мягкого пластика с нарисованным открытым учебником и восходящим солнцем
          </p>
          <br>
          <p>
            Школьников конца <span>1960-х</span> мы можем видеть в культовом фильме «Доживём до понедельника»
          </p>
        </div>

        <h2><span>1980-е:</span> Перестройка в действии</h2>
        <div class="history-school__uniforms-page-content__ussr__1980">
          <el-row :gutter="20">
            <el-col :lg="5" :md="10">
              <el-image src="src/assets/img/man1980.png"/>
            </el-col>
            <el-col :lg="19" :md="14">
              <div>
                <p>
                  В начале 1980-х была введена форма для <span>старшеклассников</span>.
                  (Такую форму начинали носить с восьмого класса).
                  <span>Девочки</span> с первого по седьмой класс носили коричневое платье,
                  как и в предыдущий период. Только оно стало ненамного выше колен
                </p>
                <p>
                  У <span>мальчиков</span> брюки и куртка заменялись на брючный костюм.
                  Цвет ткани был по-прежнему синий. Также синей была <span>эмблема</span> на рукаве
                </p>
              </div>
            </el-col>
          </el-row>

          <p>
            Очень часто <span>эмблему</span> срезали, так как она выглядела
            не слишком эстетично, особенно по прошествии некоторого времени
            — краска на пластике начинала стираться
          </p>
          <br>
          <p>
            Школьную форму <span>1980-х</span> можно увидеть, например, в фильмах «Гостья из будущего» и «Приключения Электроника»
          </p>

          <el-row :gutter="20">
            <el-col :lg="12" :md="24">
              <h2>1984</h2>
              <p>
                Для <span>девочек</span> в 1984 году был введён костюм-тройка
                синего цвета, состоящий из юбки-трапеции со складками спереди,
                пиджака с накладными карманами и жилетки. Юбку можно было носить
                либо с пиджаком, либо с жилетом, либо весь костюм сразу
              </p>
            </el-col>
            <el-col :lg="12" :md="24">
              <h2>1988</h2>
              <p>
                В 1988 году для Ленинграда,
                районов Сибири и Крайнего Севера было разрешено ношение синих брюк в зимнее время
              </p>
            </el-col>
          </el-row>

          <div class="history-school__uniforms-page-content__ussr__1980-photo-girl">
            <el-image src="src/assets/img/girl1984.png"/>
            <el-image src="src/assets/img/girl1988.png"/>
          </div>
          <br>
          <p>
            В некоторых союзных республиках фасон школьной формы немного отличался, также как и цвет.
          </p>
          <p>
            Так, на Украине школьная форма была коричневого цвета, хотя не запрещалась и синяя
          </p>

          <div class="history-school__uniforms-page-content__ussr__1980-lady">
            <p>
              Именно эта форма для <span>девочек</span> способствовала тому,
              что они начинали рано осознавать свою привлекательность
            </p>
            <p>
              Плиссированная юбка, жилет и главное — блузки, с которыми
              можно было экспериментировать, превращали практически любую школьницу в <span>«юную даму»</span>
            </p>
          </div>

          <el-row :gutter="20">
            <el-col :lg="7" :md="10">
              <el-image src="src/assets/img/icons.png"/>
            </el-col>
            <el-col :lg="17" :md="14">
              <p>Обязательным дополнением к школьной форме,
                в зависимости от возраста ученика, были <a href="https://pandia.ru/text/category/oktyabryata/" target="_blank">октябрятский</a>
                (в начальных классах), пионерский (в средних классах)
                или комсомольский (в старших классах) <span>значки</span>.
                Пионеры должны были также обязательно носить <span>пионерский галстук</span></p>
            </el-col>
          </el-row>

          <p>
            Помимо обычного пионерского значка существовал особый вариант для <span>пионеров</span>,
            активно занимающихся <a href="https://pandia.ru/text/category/obshestvennie_raboti/" target="_blank">общественной работой</a>.
            Он был немного больше обычного и
            на нём была надпись <span>«За активную работу»</span>
          </p>
        </div>
      </div>

      <h2>Современная Россия</h2>
      <div>
        <p>
          В <span>современной России</span> нет единой школьной формы,
          как было в <span>СССР</span>, но многие лицеи и гимназии,
          особенно наиболее престижные, имеют свою собственную форму,
          подчёркивающую принадлежность учеников к тому или иному учебному заведению
        </p>
      </div>

      <h2>Школьная форма в других странах</h2>
      <div class="history-school__uniforms-page-content__country">
        <p>
          Самой большой европейской страной, в которой существует <span>школьная форма</span>,
          является Великобритания. Во многих её бывших колониях форма не была
          отменена и после независимости, например в Индии, Ирландии, Австстралии, Сингапуре и Южной Африке
        </p>
        <br>
        <p>
          В <span>Германии</span> нет единой школьной формы, хотя ведутся дебаты о её введении. <br>
          В некоторых школах введена <span>единая школьная одежда</span>, не являющаяся формой
          так как ученики могут участвовать в её разработке. <br> Что характерно, даже
          во времена Третьего Рейха школьники не имели единой формы — они приходили
          на занятия в повседневной одежде, в форме Гитлерюгенда (или иных детских общественных организаций)
        </p>
        <br>
        <p>
          В <span>США</span> и <span>Канаде</span> существует школьная форма во многих частных школах. <br>
          В государственных школах единой формы нет, хотя в некоторых школах введены правила ношения одежды (dress code).
          На Кубе форма обязательна для всех учащихся школ и высших учебных заведений
        </p>

        <el-row :gutter="20">
          <el-col :lg="7" :md="10">
            <el-image src="src/assets/img/japan.png"/>
          </el-col>
          <el-col :lg="17" :md="14">
            <p>
              Для большинства средних и старших школ <span>Японии</span> обязательной считается школьная форма.
              В каждой школе она своя, но на самом деле вариантов не так уж много.
              Обычно это белая рубашка и темные пиджак и брюки для <span>мальчиков</span>
              и белая рубашка и темные пиджак и юбка для <span>девочек</span>, или же сейлор фуку - "матросский костюм".
              К форме обычно даётся, ещё и большая сумка или портфель. <span>Школьники начальных классов</span>, как правило, одеваются в обычную детскую одежду
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

      .el-image {
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
            .el-image {
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
              .el-image {
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

              .el-image {
                width: $radius_big * 3;
              }
            }
          }
        }
        &-photo-girl {
          @media #{$md-and-down} {
            .el-image {
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
            .el-image {
              border-radius: $size_small * 4;
            }
          }
        }
      }
    }
  }
}
</style>