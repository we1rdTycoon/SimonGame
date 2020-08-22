

<template>
<div id="hello">
  <div id="title">
  <h2 class="qq">React.js Calorie Counter</h2>
  </div>
  <div>
  <div class="under">
  <b-table-simple hover small striped responsive bordered>
    <b-thead >
      <b-tr>
        <b-th>#</b-th>
        <b-th>DESCRIPTION</b-th>
        <b-th>CALORIES</b-th>
        <b-th>FAT</b-th>
        <b-th>CARBS</b-th>
        <b-th>PROTEIN</b-th>
        <b-th></b-th>
      </b-tr>
    </b-thead>
   <allRows></allRows>
 <allSums></allSums>
<addRows></addRows>
  </b-table-simple>
  </div>
</div>

</div>

</template>

<script>
import allRows from './allRows.vue'
import allSums from './allSums.vue'
import addRows from './addRows.vue'
  export default {
    data() {
      return {
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    },
    components:{
      allRows,allSums, addRows
    }
  }
</script>

<style>
#hello {
  width: 1300px;
  margin:0 auto;
  background-color: #FAEBD7;
  border-radius: 15px;
  padding-bottom: 15px;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 15px;
}
#title{
text-align: center;
overflow: hidden;
}
.qq{
  margin-top:40px;
  margin-bottom:40px;
}
.under{
  background-color: white;
}
</style>