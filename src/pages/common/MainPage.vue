<template>
  <div class="main-page">
    <div class="main-page-main">
      <h1>Информация о музейной экспозиции</h1>
      <h2>
        Экспозиция музея <p>"История школы в истории города"</p>
      </h2>
      <p>
        Государства образовательные учреждения Средняя школа №8 Могилев
        Минский переулок 4, каб 307, <br> историко-краеведческий профиль, базовое
        направление – история нашей школы
      </p>
      <a href="https://school8mogilev.by/muzeikomnata" target="_blank">Виртуальная экспозиция</a>
    </div>

    <div class="main-page-content">
      <h2>Действует с 2004 года</h2>
      <ol>
        <li><span>Поисковая и научная:</span> исследовательская деятельность</li>
        <li><span>Работа школьного музейного кабинета:</span> Накопление
          материала и экспонатов, учет и хранение музейной коллекции
        </li>
        <li><span>Культурно-просветительская деятельность:</span>
          На базе музея действует объединение по интересам «Юные экскурсоводы»
        </li>
      </ol>

      <div class="main-page-exhibit">
        <h2>Экспонаты музея</h2>
        <el-tabs v-model="activeName" class="demo-tabs">
          <el-tab-pane label="Шк.принадлежности">
            <p>
              Учебники, чернильные ручки, чернильница,
              тетради, дневники учащихся СШ №8 разных лет,
              аттестаты об образовании и аттестат зрелости,
              детские газеты и журналы 70-80-х годов, школьные учебники 50-80-х годов,
              школьные фотографии, начиная с 1941 года, школьная и пионерская форма советского образца,
              школьный ранец, значки октябретцев, пионеров, комсомольцев, пионерские галстуки, комсомольские билеты выпускников школ
            </p>
          </el-tab-pane>
          <el-tab-pane label="Фотоархив">
            Фотоархив составлен не только из школьных фотографий,
            но есть и фотографии всех директоров и завучей школы,
            выдающихся выпускников, среди которых есть воины-интернационалисты, спортсмены,
            художник, профессор, директор областного краеведческого музея и ветеран Байканура, преподаватели, а также многие другие
          </el-tab-pane>
          <el-tab-pane label="Периодические издания">
            В музейном зале представлена подборка периодических изданий, в которых публиковались статьи о нашей школе.
            Экспонаты периода Великой Отечественной войны, аусвайс 1943 года, выданные комендатурой Могилёва (переданы из
            семейного архива в 2016 году), медицинские инструменты и граммофон 1959 года, семьи выпускника школы 1956
            года.
          </el-tab-pane>
        </el-tabs>
      </div>

      <div class="main-page-sections">
        <h2>Экспозиция представлена в следующих разделах:</h2>
        <ul>
          <li>История средней школы №8</li>
          <li>Судьба школы, ее учителей и выпускников в годы Великой Отечественной войны</li>
          <li>О работе учителей нашей школы</li>
          <li>О выдающихся выпускниках нашей школы</li>
          <li>История пионерской и комсомольской организации</li>
          <li>История школьной формы и школьных принадлежностей</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeName = ref('first')

</script>

<style lang="scss">
.main-page {
  text-align: center;
  margin-left: 20%;
  margin-right: 20%;
  padding: 20px;
  @media(max-width: 1000px) {
    margin-left: 0;
    margin-right: 0;
  }

  &-main {
    margin-bottom: 4rem;

    h1 {
      margin-bottom: 3rem;
    }

    h2 {
      margin-bottom: 2rem;
    }

    p:nth-child(3) {
      font-size: 16px;
      margin-bottom: 1.5rem;
    }

    a {
      color: #509ce5;
      background-color: #062a50;
      padding: 0.7rem;
      border-radius: 1rem;
      transition: all 0.2s linear;
    }

    a:hover {
      color: #237bd2;
      background-color: #1a3652;
    }
  }

  &-content {
    h2 {
      font-weight: 600;
      margin-bottom: 1rem;
    }

    ol {
      font-size: 16px;
      background-color: #3b3329;
      padding: 2rem;
      border-radius: 0.5rem;
      text-align: left;
      margin-bottom: 5rem;
      li {
        span {
          color: #d37c00;
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
  }
}
</style>