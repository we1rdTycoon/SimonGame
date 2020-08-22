import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(BootstrapVue);

const store = new Vuex.Store({
  state: {
    allproducts: [
      {
        id:0,
        description:"Сметана",
        calories:43,
        fat:32,
        carbs:11,
        protein:51
      },
      {
        id:1,
        description:"Картошка",
        calories:65,
        fat:392,
        carbs:121,
        protein:46
      },
      {
        id:2,
        description:"Пиво",
        calories:93,
        fat:34,
        carbs:341,
        protein:15
      },

    ]
  },
  getters: {
    allsums: state => {
      let sum = {
        calories:0,
        fat:0,
        carbs:0,
        protein:0
      };
      state.allproducts.forEach(function(item, i, arr) {
        sum.calories=sum.calories+Number.parseInt(item.calories);
        sum.fat=sum.fat+Number.parseInt(item.fat);
        sum.carbs=sum.carbs+Number.parseInt(item.carbs);
        sum.protein=sum.protein+Number.parseInt(item.protein);
      });
      return sum;
    },
    getID: state => {
        return state.allproducts[state.allproducts.length-1].id;
    }
  },
  mutations: {
    add (state, x) {
      state.allproducts.push(x)
    },
    delete(state, id){
      state.allproducts.splice(id,1);
    },
    edit(state, payload){
      console.log(payload);
     
        state.allproducts[payload.index][payload.prop]=payload.val;
      
      
      console.log(state.allproducts);
    }
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})