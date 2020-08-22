<template>
 <b-tbody>
 
   <template v-for="(user,index) in count " >
     <b-tr v-bind:key="user.id" v-on:input="changeCell(index, $event)">
        <b-th>{{index}}</b-th>
        <b-th><input type="text" id="description" :value="user.description"></b-th>
        <b-th><input id="calories" :value="user.calories" min="0" type="number"></b-th>
        <b-td><input id="fat" :value="user.fat" min="0" type="number"></b-td>
        <b-td><input id="carbs" :value="user.carbs" min="0" type="number"></b-td>
        <b-td><input id="protein" :value="user.protein" min="0" type="number"></b-td>
        <b-td><b-button variant="danger" v-on:click="deleteRow(index)">Удалить</b-button></b-td>
      </b-tr>
   </template>
  </b-tbody>
</template>

<script>
  export default {
    computed: {
      count() {
        return this.$store.state.allproducts;
      },
      doneTodosCount () {
       return this.$store.getters.allsums;
      } 
    },
    methods:{
      deleteRow(index){
        console.log(index);
        this.$store.commit('delete',index)
         
      },
      changeCell(index, event){
        let payload={
          prop:event.target.id,
          val:event.target.value,
          index: index,
        }
         this.$store.commit('edit', payload);

      }
    }
    
  }
</script>

<style>
input{
background-color: transparent;
border: 0px;
border-bottom: 1px solid black;
outline:0;
transition: 0.3s;
}
input:hover{
  border-bottom: 2px solid black;

}
body{
  background: -webkit-linear-gradient(45deg, #EECFBA, #C5DDE8);
}
</style>