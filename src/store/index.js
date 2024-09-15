import {createStore} from 'vuex'


export default createStore({
    //DB of states
    state:{
        user:{
            FirstName : 'Pedro',
            LastName : 'Lucas',
            Sexo : 'M'
          },
          products:[{
            id:1,
            name:'Curso React Js',
            price:99.98
          },
          {
            id:2,
            name:'Curso Vue Js',
            price:99.98
          },
          {
            id:3,
            name:'Curso Postgres',
            price:99.98
          },
          {
            id:4,
            name:'Curso Angular',
            price:99.98
          },
          {
            id:5,
            name:'Curso Node Js',
            price:99.98
          },
          {
            id:6,
            name:'Curso Swelte',
            price:99.98
          },
          {
            id:7,
            name:'Curso Next Js',
            price:99.98
          },
          {
            id:8,
            name:'Curso Nuxt js',
            price:99.98
          }
        ],
          cart:[]
    },

    mutations:{
        storeUser(state,data){
            state.user = data
        },
        addProductCart(state, data){
          state.cart.push(data)
        },
        deleteProduct(state, id){
          const idx = state.cart.findIndex(product => product.id == id)
          state.cart.splice(idx, 1)
        }

    },
    getters:{
      total(state){
          return state.cart.reduce((total, item)=> total+=item.price,0)
      }
    },
    
    actions:{

    },
  
})