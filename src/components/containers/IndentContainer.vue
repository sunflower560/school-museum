<script lang="ts">
import {h, defineComponent} from "vue";
export default defineComponent({
    name: "IndentContainer",
    setup(props,{slots}){
        return ()=> {
            const children = slots.default ? slots.default(props) : []
            return  h('div',{class:'indent-container'},
                h('div',{class:'indent-container__wrap'},children))
        }
    }
})
</script>

<style lang="scss">
@use "@/styles/common/variables" as *;
@use "@/styles/common/assembly" as *;
.indent-container {
    width: 100%;
    margin: 0 auto;
    &__wrap{
        margin: 0 $lg-padding;
        @media #{$md-and-down} {
            margin: 0 $md-padding;
            @media #{$sm-and-down} {
                margin: 0 $md-padding;
                // / 2;
            }
        }
    }
    @media #{$lg-and-up} {
        max-width: $lg;
    }

}
</style>
