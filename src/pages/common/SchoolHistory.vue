<template>
  <div class="school-history-page">
    <h1 class="school-history-page-title">{{ $t('common.SchoolHistory') }}</h1>
    <p>
      Первая социалистическая школа в городе Могилёве, которая получила порядковый номер 23, приняла в свои стены
      учащихся с 1-го по 8-й класс (сентябрь 1939 года)
    </p>
    <h3>
      Когда-то на месте, где расположена наша школа, шумела березовая роща. Но в 1939 году здесь было возведено здание
      первой социалистической школы в городе Могилеве, которая получила порядковый номер 23. Так начинается история
      нашей школы. Школа была построена в поселке Чапаевка, который только в 30-ых годах был отнесен в городскую черту
    </h3>

    <h2>Первый директор Минин Захар Матвеевич</h2>
    <div class="school-history-page-director">
      <div>
        <el-image src="/src/assets/img/minin.jpg" style="width: 230px; height: 300px"/>
        <p>Минин З.М.</p>
      </div>
      <p>Первым директором новой школы стал Минин Захар Матвеевич, оставил эту должность потому, что пошел на финскую
        войну. Судьба З.М.Минина распорядилась так, что он стал участником сначала Финской войны, а потом Великой
        Отечественной, после окончания которой он вернулся в г. Могилев, но в стенах нашей школы не появлялся до 1989
        года</p>
    </div>

    <h2>Второй директор Казимирский Павел Кириллович</h2>
    <div class="school-history-page-director">
      <div>
        <el-image src="/src/assets/img/kazimirsky.jpg" style="width: 200px; height: 300px"/>
        <p>Казимирский П.К.</p>
      </div>
      <p>В 1940 году вторым директором стал Казимирский Павел Кириллович, который возглавлял СШ№23 до трагического
        1941
        года. В начале Великой Отечественной войны П.К. Казимирский выполняя особое задание НКВД, пропал без
        вести.</p>
    </div>

    <div class="school-history-page-year">
      <h1>1941 г.</h1>
      <p>
        В школе существовала комсомольская организация, пионерская дружина и звенья октябрят. Сохранилось фотография
        членов комсомольской ячейки СШ№23 (ныне 8) 1941г. На фотографии изображено 6 человек. После окончания войны в
        живых осталось только двое…. Учащиеся стремились получить образование и найти свое место в этой жизни, но
        война
        жестоко вмешалась в их планы. Выпускники нашей школы, как все советские граждане, вступили в борьбу с
        фашистской
        Германией.
      </p>
      <h2>С 3 по 26 июля</h2>
      <p>
        Оборона Могилева, один из рубежей которой проходил в районе Шкловского шоссе, где возле деревни Гаи героически
        сражался батальон милиции под командованием капитана Владимирова. К сожалению, советские воины вынуждены были
        отступать и бои продолжались на улицах города. Печкурова В.П., жительница нашего района, вспоминает, что
        ополченцы и оставшиеся в живых милиционеры батальона милиции заняли здание нашей школы и держали его оборону в
        течение семи суток. Немцы смогли захватить школу только тогда, когда погиб последний солдат, который ее
        оборонял. Вся территория школьного двора была усеяна отстреленными гильзами. Количество погибших с обеих
        сторон
        было велико настолько, что немцам пришлось просить местное население вывести трупы к соседним деревням и там
        захоронить.
      </p>
    </div>

    <div class="school-history-page-year">
      <h1>28 июня 1944 г.</h1>
      <div class="school-history-page-year-olensky">
        <div>
          <el-image src="/src/assets/img/olensky.jpg" style="width: 210px; height: 300px"/>
          <p>Оленский П.Л.</p>
        </div>
        <p>
          После освобождения Могилёва администрация города начала готовить школу к учебному году. В результате
          реформирования она получила порядковый номер 8 вместо 23. Директором был назначен участник партизанского
          движения Оленский Пётр Львович (1944-1957 гг.). В 1947 году состоялся первый выпуск 10-х классов СШ №8.
          Кулешова
          Анастасия Михайловна, заслуженный учитель Республики Беларусь среди учеников (1949 год).
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, Ref, ref, UnwrapRef} from 'vue'

</script>

<style lang="scss">
@import '/src/styles/variables.scss';

.school-history-page {
  text-align: center;
  padding: $size;

  &-director {
    @media(max-width: $small-screen-up) {
      display: block;
      text-align: center;
    }
    display: flex;
    width: 100%;
    text-align: left;
    margin-top: $radius_medium;
    margin-bottom: $radius_large;

    .el-image {
      margin-right: $radius_medium;
      border-radius: $radius_medium;
    }

    div {
      p {
        text-align: center;
        font-size: $radius_tiny * 3.4;
        font-weight: $font_w_medium;
      }
    }
  }

  &-year {
    margin-top: $size_big * 2;
    background-color: $color_main_brown_2;
    padding: $radius_medium;
    border-radius: $radius_medium;

    .el-image {
      margin-right: $radius_medium;
      border-radius: $radius_medium;
    }

    p {
      margin-top: $radius_medium;
      margin-bottom: $size_big;
    }

    &-olensky {
      @media(max-width: $small-screen-up) {
        display: block;
        text-align: center;
      }
      display: flex;
      width: 100%;
      text-align: left;
      margin-top: $radius_medium;
    }
  }

  &-title {
    margin-bottom: $radio_average;
  }


  h2 {
    text-align: left;
  }

  h3 {
    font-size: $radius_tiny * 3.4;
    margin-top: $radio_average;
    margin-bottom: $radio_average * 2;
  }

  p {
    font-size: $radius_tiny * 3.4;
  }
}
</style>