<template>
 <b-tbody>
   <template > 
     <b-tr>
        <b-th></b-th>
        <b-th>TOTAL:</b-th>
        <b-th>{{doneTodosCount.calories}}</b-th>
        <b-td>{{doneTodosCount.fat}}</b-td>
        <b-td>{{doneTodosCount.carbs}}</b-td>
        <b-td>{{doneTodosCount.protein}}</b-td>
        <b-td></b-td>
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
         
      }
    }
    
  }
</script>

<style>

</style>