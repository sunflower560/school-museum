import 'vue-router'
import {ILayout} from "@/types";
import { RouteLocationRaw} from "vue-router";
declare module 'vue-router' {
    interface RouteMeta {
        layout?: ILayout
        rootRoute?: RouteLocationRaw
    }
}
