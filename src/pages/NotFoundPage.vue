<template>
    <div class="page-no-found">
        <h1>Page not found :(</h1>
    </div>
</template>
<script lang="ts">
import { defineComponent} from 'vue'
export default defineComponent({
    name:'NotFoundPage'
})
</script>
<style>
body{
    margin: 0;
}
.page-no-found{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
}
.page-no-found h1{
    color: #f9c300;
}
</style>
