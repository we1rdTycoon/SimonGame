

<template>
<div>
    <div class="qwe">
      <div class="upleft block" v-bind:class="{opac: opac0}"></div><div class="upright block" v-bind:class="{opac: opac1}"></div>
       <b-button class="qq" v-on:click="start" variant="danger">START</b-button>
      </div>
      <div class="qwe">
        <div class="downleft block" v-bind:class="{opac: opac2}"></div><div class="downright block" v-bind:class="{opac: opac3}"></div>
       
      </div>
     
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
            sequance: [0,1],
            opac0:false,
            opac1:false,
            opac2:false,
            opac3:false,
        }
        
    },
    methods:{
       start: function(){
          let a = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
          this.sequance.push(0);
         
       }
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