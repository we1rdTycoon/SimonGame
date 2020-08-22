

<template>
<div>
    <div class="qwe">
      <div class="upleft block"  v-on:click="leftop"></div><div class="upright block"  v-on:click="rigtop"></div>
       <b-button class="qq" v-on:click="start" variant="danger">START</b-button>
      </div>
      <div class="qwe">
        <div class="downleft block"  v-on:click="lefdown"></div><div class="downright block"  v-on:click="rigdown"></div>
      </div>
       <p v-if="err">Первый параграф</p>     
</div>
</template>

<script>
import $ from "jquery";
import { of } from 'rxjs';

import { from } from 'rxjs';
import { interval } from 'rxjs';

import { debounceTime } from 'rxjs/operators';
import { map, concatMap, delay } from 'rxjs/operators';

  export default {
   data: function(){
        return {
            sequance: [0,1,3,2,2,1,0,3,2,3],
            mysequance:[],
            err:false,
        }
        
    },
    methods:{
       start: function(){
         this.err=false;
          let a = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
          this.sequance.push(0);
         
       },
       compare:function(){
          for (let i = 0; i < this.mysequance.length; i++) { // выведет 0, затем 1, затем 2
           console.log("ffff");
              if(this.mysequance[i]!=this.sequance[i]){
                this.err=true;
                break;
              }
              if(i==this.sequance.length-1){
                
              }
          }
       },

       leftop: function(){
          this.mysequance.push(0);
          console.log(this.mysequance)
          this.compare();
       },
       rigtop: function(){
          this.mysequance.push(1);
          console.log(this.mysequance)
          this.compare();
       },
       lefdown: function(){
          this.mysequance.push(2);
          console.log(this.mysequance)
          this.compare();
       },
       rigdown: function(){
          this.mysequance.push(3);
          console.log(this.mysequance)
          this.compare();
       },
    },
    watch: {
            sequance: function (newNumber) {
              from(this.sequance).pipe(concatMap(item => of(item).pipe(delay(1000))))
              .subscribe(function (next){
                   switch (next) {
                       case 0:
                         $(".upleft").fadeTo("normal",1,function(){
                           $(".upleft").fadeTo("normal",0.5);
                         });
                       break;
                       case 1:
                       $(".upright").fadeTo("normal",1,function(){
                           $(".upright").fadeTo("normal",0.5);
                         });
                       break;
                       case 2:
                       $(".downleft").fadeTo("normal",1,function(){
                           $(".downleft").fadeTo("normal",0.5);
                         });
                       break;
                       case 3:
                       $(".downright").fadeTo("normal",1,function(){
                           $(".downright").fadeTo("normal",0.5);
                         });
                       break;
 
                     }
              }
                    
                );
                 
            }
        },
  }
</script>

<style>
div.upleft{
  background: black; /* Цвет фона */
  border-top-left-radius: 300px;
  margin-left: 10px;
}
div.upright{
  background: blue; /* Цвет фона */
   border-top-right-radius: 300px;
}
div.downleft{
  background: red; /* Цвет фона */
  border-bottom-left-radius: 300px;
  margin-left: 10px;
}
div.downright{
   border-bottom-right-radius: 300px;
   background: #007E3E; /* Цвет фона */
}

div.block{
  color: #fff; /* Цвет текста */
  width: 300px;
  height: 300px;
  vertical-align: top;
  opacity: 0.5;
}
div.qwe{
  display: flex;
}

.qq{
  align-self: center;
  
}


</style>