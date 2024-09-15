<script>
import AppProducts from './components/Products/AppProducts.vue';
import Navbar from './components/Navbar.vue';
const Person = {Name:'Layne', Age:22, Sexo:'F'}
const {Name, Age, Sexo} = Person

console.log(Name, Age, Sexo)
export default{
  name:'app',
  components:{
    AppProducts,
    Navbar

  },
  data() {
    return {
      

    }
  },

  methods: {
    updateUser(){
      const newUser = {
            FirstName:'Ana',
            LastName: 'Ferreira',
            Sexo :'F'
    }
    this.$store.commit('storeUser',newUser)

    }
  },
  created() {
    console.log(this.$store.state.user)
    
    
  },
  beforeCreate() {
    
  },

}

</script>

<template>
  <div class="main">
    <Navbar/>
    <div class="container">
      <AppProducts/>
    </div>
  </div>
   
</template>

<style scoped>
.container{
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 90vw;
  
}
</style>
