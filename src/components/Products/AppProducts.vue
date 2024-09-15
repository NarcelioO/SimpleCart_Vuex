<script setup >
import AppProduct from './AppProduct.vue';
</script>

<template>
    <div class="wrapper_products">
        <AppProduct v-for="product in $store.state.products" :product="product"/>
    </div>
</template>
<style scoped>
.wrapper_products{
    width: 100%;
    height: fit-content;
    margin: 0 auto;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    gap: 10px;
    
}

</style>