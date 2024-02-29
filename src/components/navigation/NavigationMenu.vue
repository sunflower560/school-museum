<script lang="ts">
import {computed, PropType, defineComponent,h,toRefs} from "vue";
import {IMenuRoute} from "@/types";
import {RouteRecordRaw, RouterLink, RouterLinkProps, useRoute, useRouter} from "vue-router";
import IconMd from "@/components/IconMd.vue";
import {Effect, ElTooltip} from "element-plus";

export default defineComponent({
  name: "NavigationMenu",
  props:{
    menuRouts:{
      type:Array as PropType<Array<IMenuRoute>>,
      required: true
    },
    isVertical:{
      type:Boolean,
      default:false
    },
    collapse:{
      type:Boolean,
      default:false
    },
    showIcon:{
      type:Boolean,
      default:true
    },
    showTitle:{
      type:Boolean,
      default:true
    },
    iconsSize:{
      type:Number,
      default:20
    },
  },
  setup(props){
    const {menuRouts,isVertical,collapse,showIcon,showTitle,iconsSize} = toRefs(props)
    const route = useRoute()
    const router = useRouter()
    const  rootRoutName = computed(() =>{
      // const mainRoute = router.options.routes.find(r => r.meta?.rootRoute === '/')
      // console.log(router.options.routes)
      // return mainRoute ? mainRoute.name : ''
      return (route.meta?.rootRoute as RouteRecordRaw)?.name  ?? '__unknown'
    })
    return ()=>{
      return h('div',{
            class:{'navigation-menu':true,'navigation-menu--is-vertical':isVertical.value,'navigation-menu--is-collapse':collapse.value},
            style:{'--font-size':`${iconsSize.value}px`}
          },
          h('ul',{class:['navigation-menu__list']},
              menuRouts.value.map( link =>  {
                    return  h('ul',{class:['navigation-menu__list-item']},
                        h(RouterLink, { to:link.route,class:{
                                'router-link-active':link.route.name === route.name,
                                'is-root-route':link.route.name === rootRoutName.value} } as RouterLinkProps,
                            {
                              default:()=>[
                                showIcon.value ? h(ElTooltip,{
                                  effect:Effect.LIGHT,
                                  content:link.title,
                                  placement:'right',
                                  disabled:isVertical.value && !collapse.value},{default:()=>h(IconMd,{glyph: link.icon,isPointer: true}) }): null,
                                showTitle.value ? h('b',link.title) : null,
                              ]
                            })
                    )
                  },
              )
          ))
    }
  }
})
</script>

<style lang="scss">
@use '@/styles/common/assembly.scss' as *;
@use '@/styles/common/variables.scss' as *;
.navigation-menu {
  position: relative;
  $menu:&;
  $icon-size:var(--font-size);
  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    width: 100%;
    margin: 0;
    padding:0;
    background-color: transparent;
    line-height: calc(#{$main-padding} * 2 + #{$font-size-base});
    #{$menu}.navigation-menu--is-vertical &{
      flex-direction: column;
      align-items: flex-start;
    }
    &-item {
      height: inherit;
      line-height: inherit;
      font-size: $font-size-base;
      color: #FFFFFF;
      list-style: none;
      cursor: pointer;
      @include transition();
      box-sizing: border-box;
      white-space: nowrap;
      padding: 0;
      #{$menu}.navigation-menu--is-vertical & {
        width: 100%;
      }
      #{$menu}.navigation-menu--is-collapse &{
        width: calc(#{$icon-size} + #{$main-padding});
      }
      a {
        display: flex;
        align-items: center;
        font-weight: $font-weight-normal;
        color: white;
        line-height: inherit;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-decoration: none;
        #{$menu}:not(.navigation-menu--is-vertical) & {
          border-bottom: 2px solid transparent;
        }
        #{$menu}.navigation-menu--is-vertical &{
          border:none;
          // border-right: 2px solid transparent;
        }
        &:hover{
          color: $color-primary-light-3;
        }
        %route-active{
          border-color:$color-primary;
          color: $color-primary;
        }
        &.router-link-active,
        &.router-link-exact-active,
        &.is-root-route{
          border-color:$color-primary;
          color: $color-primary;
        }
        .icon,.icon-md{
          margin: 0 $main-padding;
        }
        b{
          font-weight: $font-weight-normal;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
