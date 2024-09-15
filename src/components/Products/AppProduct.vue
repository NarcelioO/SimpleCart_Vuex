<template>
    <div class="card">
        <div class="card_content">
            <h2>
                {{ product.name }}
            </h2>
            <h4> R$: {{ product.price }}</h4>
            <div class="card_desc">
                   Lorem ipsum dolor sit amet. Iure, tenetur. Debitis nisi necessitatibus repudiandae libero enim atque, voluptatibus voluptatum quod repellat esse.
            </div>
            
        </div>
        <div class="card_buttom">
            <button @click="addCart()">Add cart</button>
        </div>
       
       
      
    </div>
</template>

<script>
export default{
    props:{
        product:Object
    },
    methods:{
        addCart(){
            this.$store.commit('addProductCart', this.product)
        },
        removeProductCart(){
            this.$store.commit('deleteProduct', this.product.id)
        }
    }
}
</script>

<style scoped>
.card{
    background-color: white;
    padding: 1.5em;
    border-radius: 10px;
    border: 1px solid rgb(212, 212, 212);
    margin-bottom: 5px;
    color: black;
    display: flex;
    flex-direction: column;
    gap: 1em;
    
}

.card_desc{
    font-size: 13px;
    font-weight:400;
}
</style>