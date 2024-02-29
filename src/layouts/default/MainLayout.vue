<template>
  <div class="main-layout" :style="style">
    <el-drawer
        class="main-layout__sidebar-drawer"
        v-model="drawerState"
        :with-header="false"
        size="90%"
        :append-to-body="false"
        direction="ltr">
      <div class="main-layout__aside-container" ref="sidebar"/>
    </el-drawer>
    <el-container class="main-layout__wrap">
      <component :is="menuContainer" :width="menuContainerWidth">
        <el-container class="main-layout__aside-container">
          <el-header ref="headerAside">
            <div class="main-layout__header main-layout__header-title">
              <el-dropdown>
                <div class="main-layout__person" :class="{'is-collapse':isCollapseMenu}">
                  <el-avatar :src="getImageUrl('logoSchool.png')"/>
                </div>
              </el-dropdown>
              <div class="main-layout__header-title-container">
                School Museum №8
              </div>
            </div>
          </el-header>
          <el-main>
            <el-scrollbar class="main-layout__aside-scrollbar">
              <div class="main-layout__aside-content">
                <h3>
                  <router-link :to="{name:'main-page'}">
                    <icon-md :glyph="MaterialIcons.home"/>
                    <span>{{ $t('menu.home') }}</span>
                  </router-link>
                  <el-divider direction="vertical"/>
                  <el-dropdown trigger="click">
                    <span> <icon-md :glyph="MaterialIcons.settings"/> </span>
                    <template #dropdown>
                      <el-dropdown-menu>
                        <el-dropdown-item>
                          <el-switch v-model="locale"
                                     size="large"
                                     inline-prompt
                                     active-text="RU"
                                     inactive-text="EN"
                                     active-value="ru"
                                     inactive-value="en"
                          />
                        </el-dropdown-item>
                        <el-dropdown-item>
                          <el-switch v-model="theme"
                                     class="main-layout__theme-switch"
                                     size="large"
                                     active-value="light"
                                     inactive-value="dark"
                                     inline-prompt
                                     active-text=" "
                                     inactive-text=" "
                          />
                        </el-dropdown-item>
                      </el-dropdown-menu>
                    </template>
                  </el-dropdown>
                </h3>
                <el-collapse v-model="menuActive">
                  <el-collapse-item name="admin">
                    <template #title>
                      <icon-md :glyph="adminMenuBlock.captionIcon"/>
                      <span>{{ adminMenuBlock.caption }}</span>
                    </template>
                    <navigation-menu :menu-routs="adminMenuBlock.menuRoutes"
                                     :show-icon="true"
                                     :show-title="true"
                                     :is-vertical="true"
                    />
                  </el-collapse-item>
                  <el-collapse-item name="resources">
                    <template #title>
                      <icon-md :glyph="resourcesMenuBlock.captionIcon"/>
                      <span>{{ resourcesMenuBlock.caption }}</span>
                    </template>
                    <navigation-menu :menu-routs="resourcesMenuBlock.menuRoutes"
                                     :show-icon="true"
                                     :show-title="true"
                                     :is-vertical="true"
                    />
                  </el-collapse-item>
                </el-collapse>
              </div>
            </el-scrollbar>
            <!--                        <el-backtop target=".main-layout__aside-scrollbar .el-scrollbar__wrap" />-->
          </el-main>
          <el-footer>
            <div class="main-layout__footer">
              <div class="main-layout__collapse-button" :class="{'is-collapse':isCollapseMenu}"
                   @click="collapseMenuTrigger">
                <icon-md :glyph="MaterialIcons.chevron_left"/>
              </div>
            </div>
          </el-footer>
        </el-container>
      </component>
      <el-container class="main-layout__main-container">
        <el-header>
          <div class="main-layout__header">
            <el-button @click="drawerState = !drawerState" v-if="mq.smMinus">
              <icon-md :glyph="MaterialIcons.menu"/>
            </el-button>
            <div class="main-layout__header-dynamic-section" ref="headerMain">

            </div>
          </div>
        </el-header>
        <el-main>
          <el-scrollbar class="main-layout__main-scrollbar">
            <div class="main-layout__main-content">
              <router-view name="default" class="main-layout-view" v-slot="{ Component }">
                <transition name="fade-down" mode="out-in" appear>
                  <component :is="Component"/>
                </transition>
              </router-view>
            </div>
          </el-scrollbar>
          <el-backtop target=".main-layout__main-scrollbar .el-scrollbar__wrap"/>
        </el-main>
        <!--                    <el-footer>Footer</el-footer>-->
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import {
  computed,
  CSSProperties,
  defineComponent,
  h,
  inject,
  ref, RendererElement, Teleport, watchEffect,
} from "vue";
import {useColorMode, useElementSize, useLocalStorage} from "@vueuse/core";
import {ElAside} from "element-plus";
import NavigationMenu from "@/components/navigation/NavigationMenu.vue";
import IconMd from "@/components/IconMd.vue";
import {MaterialIcons} from "@/types";
import {useI18n} from "vue-i18n";
import {TLocales, TrSchema} from "@/locales";
import {useMenuRoutes} from "@/router/navigation";
import {getImageUrl} from "@/composables/utilites";

export default defineComponent({
  name: "MainLayout",
  components: {
    IconMd,
    NavigationMenu
  },
  setup() {
    const mq = inject('mq', {
      smMinus: false,
    })
    const {locale} = useI18n<{ message: TrSchema }, TLocales>({useScope: 'global'})
    const adminMenuBlock = useMenuRoutes('admin')
    const resourcesMenuBlock = useMenuRoutes('resources')
    const drawerState = ref(false)
    const headerMain = ref<HTMLElement | null>(null)
    const headerAside = ref<HTMLElement | null>(null)
    const sidebar = ref()
    const isCollapseMenu = ref(false)
    const {height: heightMain} = useElementSize(headerMain)
    const {height: heightAside} = useElementSize(headerMain)
    const style = computed<CSSProperties>(() => {
      return {
        ...(heightMain ? {'--layout-header-main-height': `${heightMain.value}px`} : {}),
        ...(heightAside ? {'--layout-header-aside-height': `${heightAside.value}px`} : {}),
      } as CSSProperties
    })

    const menuContainerWidth = computed(() => isCollapseMenu.value ? '60px' : '300px')
    watchEffect(() => {
      if (!mq.smMinus && drawerState.value)
        drawerState.value = false
    })
    const menuContainer = computed<RendererElement | undefined>(() => {
      if (mq.smMinus) {
        if (!sidebar.value)
          return
        return h(Teleport as any, {to: sidebar.value, disabled: false})
      }
      return h(ElAside)
    })
    const collapseMenuTrigger = () => isCollapseMenu.value = !isCollapseMenu.value
    const theme = useColorMode()
    const menuActive = ref(['editor'])

    useLocalStorage('ss-sidebar-menu', menuActive)
    useLocalStorage('ss-sidebar-collapse', isCollapseMenu)
    useLocalStorage('ss-ui-local', locale)
    return {
      theme,
      menuActive,
      locale,
      MaterialIcons,
      adminMenuBlock,
      menuContainerWidth,
      style,
      headerMain,
      headerAside,
      drawerState,
      mq,
      sidebar,
      menuContainer,
      collapseMenuTrigger,
      isCollapseMenu,
      getImageUrl,
      resourcesMenuBlock
    }
  }

})
</script>

<style lang="scss">
@use '@/styles/common/assembly.scss' as *;
@use '@/styles/common/variables.scss' as *;
@use "@/styles/common/icons.scss" as *;
@use "@/styles/icons.scss" as *;

.main-layout{
  &__theme-switch{
    span.is-text{
      @extend .icon-md;
      font-size: $font-size-medium;
      &:before {
        content: $icon-md-dark_mode;
      }
      &[ aria-hidden = 'true'] {
        &:before {
          content: $icon-md-light_mode;
        }
      }
    }
  }
  &__sidebar-drawer{
    .el-drawer__body{
      height: 100%;
      padding: 0;
    }
  }
  &__header,&__footer{
    min-height: 100%;
    display: flex;
    align-items: center;
  }
  &__wrap,
  &__main-container,
  &__aside-container{
    height: 100%;
  }
  .el-main {
    padding:0;
  }
  .el-aside{
    @include transition();

  }
  &__header-title{
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    &-container{
      white-space: nowrap;
      display: flex;
      align-items: center;
      padding-left:$main-padding;
      color:$layout-side-title-color;
      font-weight: bold;
    }
    &-logo{
      padding-left:$main-padding;
    }
    .main-layout__person{
      margin-left: auto;
      cursor: pointer;
      .el-avatar{
        @include transition();
        max-width: 36px;
        max-height: 36px;
      }
      &.is-collapse{
        .el-avatar{
          max-width: 18px;
          max-height: 18px;
        }
      }
    }
  }
  &__header-dynamic-section{
    //z-index: 0;
    width: 100%;
    .page-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 0;
      & > * {
        display: inherit;
        align-items: inherit;
      }
      &__left {

        & > * {
          margin-right: $main-padding-half;
        }

        a {
          line-height: 100%;
        }
      }
      &__right {
        .el-form-item:last-child{
          margin-left: auto;
          margin-right: 0;
        }
      }
    }
    .page-title-status{
      display: flex;
      align-items: center;
      margin-top: 0;
      border: 1px solid transparent;
      &__section{
        margin-right: $main-padding;
        display: flex;
        align-items: center;
        & > * {
          margin-right: $main-padding;
        }
        &-is--right{
          margin-left:auto ;
          margin-right: 0;
        }
        .el-progress{
          width: 300px;
        }
      }
    }
    .el-select-v2{
      min-width: 240px;
    }
  }
  &__aside-content{
    h3{
      display: flex;
      align-items: center;
      overflow: hidden;
      a{
        flex: 1;
        display: flex;
        align-items: center;
        font-weight: $font-weight-normal;
        color: white;
        line-height: inherit;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-decoration: none;
        &:hover{
          color: $color-primary-light-7;
        }
        %route-active{
          border-color:$color-primary;
          color: $color-primary-light-5;
        }
        &.router-link-active:not(.is-root-route),
        &.router-link-exact-active.is-root-route{
          border-color:$color-primary;
          color: $color-primary-light-5;
        }
      }
      .icon-md{
        padding: $main-padding
      }
      .el-divider{
        margin-right: 0;
        border-color: $aside-item-border-color;
      }
      .el-tooltip__trigger{
        cursor: pointer;
      }
    }
    .el-collapse {
      --el-collapse-content-bg-color:"transparent";
      --el-collapse-border-color:#{$aside-item-border-color};
      &-item__header{
        background-color: $layout-side-sections-color;
        color: white;
        overflow: hidden;
        text-overflow: ellipsis;
        .el-icon.el-collapse-item__arrow{
          margin-right: $main-padding;
        }
        .icon-md{
          padding: 0 $main-padding;
        }
      }
      &-item__content{
        .review-tree{
          padding: 0 $main-padding;
        }
      }
    }
  }
  &__main-content{
    padding: $main-padding;
  }
  &__main-container{
    .el-header{
      border-bottom:var(--el-border-color) 1px solid;
      min-height: 60px;
      --el-header-height:var(--layout-header-main-height);
      transition: none;
      .main-layout__header{
        display: flex;
        justify-content: space-between;
      }
    }
    .el-main{
      height: calc(100% - (var(--layout-header-main-height) + #{$main-padding} * 2));
    }
  }
  &__aside-container{
    color: white;
    background-color:$layout-side-background-color;
    border-right:var(--el-border-color) 1px solid;;
    .el-header,.el-footer{
      background-color: $layout-side-sections-color;
    }
    .el-header{
      border-bottom:$aside-item-border-color 1px solid ;
    }
    .el-main{
      height: calc(100% - (var(--layout-header-aside-height) + #{$main-padding} * 2));
    }
  }
  &__footer{
    position: relative;
  }
  &__collapse-button{
    display: flex;
    position: absolute;
    cursor: pointer;
    right: 0;
    @include transition(transform,$transition-duration-slow);
    &.is-collapse{
      transform: rotate(-180deg);
    }
  }
}
</style>