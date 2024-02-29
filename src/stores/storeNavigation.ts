import {reactive} from 'vue'
import { defineStore } from 'pinia'
import type {ILayout, TLayout} from "@/types";

export const useNavigationStore = defineStore('navigation', () => {
    const layout = reactive<ILayout>({
        default:'empty-layout'
    })
    return {
        layout
    }
})