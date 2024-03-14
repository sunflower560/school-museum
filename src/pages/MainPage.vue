<template>
    <div class="main-page">
        <teleport to=".main-layout__header-dynamic-section" v-if="isMounted">
            <transition name="fade-left" mode="out-in" appear>
              Main page
            </transition>
        </teleport>
      <h1>Main page</h1>
    </div>
</template>

<script lang="ts" setup>
import {computed, defineComponent, reactive, ref} from 'vue';
import {useMounted} from "@vueuse/core";
const isMounted = useMounted()

</script>

<style lang="scss">
@use '@/styles/common/assembly.scss' as *;
@use '@/styles/common/variables.scss' as *;
.main-page{

}
</style>
