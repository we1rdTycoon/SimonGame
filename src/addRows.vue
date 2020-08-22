<template>
 <b-tbody>
   <template > 
     <b-tr>
        <b-th></b-th>
        <b-th><input type="text"  v-model="obj.description" placeholder="Description"/></b-th>
        <b-th><input type="text" v-model="obj.calories" placeholder="Calories"/></b-th>
        <b-td><input type="text" v-model="obj.fat" placeholder="Fats"/></b-td>
        <b-td><input type="text" v-model="obj.carbs" placeholder="Carbs"/></b-td>
        <b-td><input type="text" v-model="obj.protein" placeholder="Protein"/></b-td>
        <b-td><b-button variant="primary" v-on:click="addRow">Добавить</b-button></b-td>
      </b-tr>
   </template>
  </b-tbody>
</template>

<script>
  export default {
    data: function(){
        return {
            obj: {
                description:"",
                calories:0,
                fat:0,
                carbs:0,
                protein:0,
            }
        }
    },
    computed: {
      lastid() {
        return this.$store.getters.getID;
      },
    },
    methods:{
      addRow(){
        let a =  { ...this.obj, id:this.lastid+1 };;
        this.$store.commit('add',a)
        this.obj.description="";
        this.obj.calories=0;
        this.obj.fat=0;
        this.obj.carbs=0;
        this.obj.protein=0;
         
      }
    }
    
  }
</script>

<style>

</style>