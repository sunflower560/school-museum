<template>
    <i class="icon-md" :style="style" v-bind="$attrs">
        <slot></slot>
    </i>
</template>

<script lang="ts">
import {defineComponent, computed, PropType} from 'vue'

import type { CSSProperties } from 'vue'
import {MaterialIcons} from "@/types";
export default defineComponent({
    name: 'IconMd',
    inheritAttrs: false,
    props: {
        size: {
            type: Number,
            default:20
        },
        color: {
            type: String,
        },
        glyph: {
            require: true,
            type: String as PropType<MaterialIcons>,
        },
        isPointer: {
            type: Boolean,
            default:false
        },
    },
    setup(props) {
        return {
            style: computed<CSSProperties>(() => {
                if (!props.size && !props.color && !props.glyph && !props.isPointer) {
                    return {}
                }
                return {
                    ...(props.isPointer ? { '--pointer': `all` } : {}),
                    ...(props.size ? { '--font-size': `${props.size}px` } : {}),
                    ...(props.color ? { '--color': props.color } : {}),
                    ...(props.glyph ? { '--glyph': `"\\${props.glyph}"` } : {}),
                } as CSSProperties
            }),
        }
    },
})
</script>
