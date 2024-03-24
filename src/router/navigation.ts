import {useI18n} from "vue-i18n";
import {type IMenuRoute, MaterialIcons} from "@/types";
import {computed, type ComputedRef} from "vue";
import type {TrSchema} from "@/locales";

type TMenuBlock = 'museum' | 'resources'
interface IMenuBlock {
    caption:string
    captionIcon:MaterialIcons
    menuRoutes:Array<IMenuRoute>
}
const useMenuRoutes = (menuType:TMenuBlock): ComputedRef<IMenuBlock> =>{
    const { t} = useI18n<{ message: TrSchema}>({
        useScope: 'global'
    })
    return computed(() => {
        switch (menuType) {
            case "museum":
                return {
                    caption: t('menu.museum.caption'),
                    captionIcon:MaterialIcons.location_city,
                    menuRoutes: [
                        {
                            route: {name:'museum-exhibition'},
                            icon: MaterialIcons.museum,
                            title: t('menu.museum.routes.exhibition'),
                        }
                    ]
                }
            case "resources":
                return {
                    caption: t('menu.resources.caption'),
                    captionIcon:MaterialIcons.topic,
                    menuRoutes: [
                        {
                            route: {name:'school-history'},
                            icon: MaterialIcons.school,
                            title: t('menu.resources.routes.schoolHistory'),
                        },
                        {
                            route: {name:'school-history-uniforms'},
                            icon: MaterialIcons.history_edu,
                            title: t('menu.resources.routes.historyUniforms'),
                        }
                    ]
                }
            default:
                return  {
                    caption:"Unknown",
                    captionIcon:MaterialIcons.error,
                    menuRoutes: []
                }
        }
    })
}
const useMenuAllRouts = ():ComputedRef<Array<IMenuRoute>> =>{
    const museum = useMenuRoutes('museum')
    const resources = useMenuRoutes('resources')
    return  computed(()=>[
        ...museum.value.menuRoutes,
        ...resources.value.menuRoutes,
    ])
}
export {
    useMenuAllRouts,
    useMenuRoutes,
    type IMenuBlock}