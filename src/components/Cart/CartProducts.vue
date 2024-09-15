<template>

        <div class="cart_products">
            <ProductCart v-for="product in $store.state.cart" :product="product"/>
         </div>
</template>

<script setup>
import ProductCart from './ProductCart.vue';

</script>

<style scoped>

</style>