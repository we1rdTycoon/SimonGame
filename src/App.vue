

<template>
<div class="ff">
 
 <div>
    <div class="qwe">
      <div class="upleft block"  v-on:click="leftop"></div><div class="upright block"  v-on:click="rigtop"></div>  
      </div>
      <div class="qwe">
        <div class="downleft block"  v-on:click="lefdown"></div><div class="downright block"  v-on:click="rigdown"></div>
      </div>
      
  </div>
  <div>
    <p>Round {{n}}</p> 
    <b-button class="qq" v-on:click="start" variant="danger">START</b-button>
     <p class="error" v-if="err">ПРОВАЛ</p>  
  </div>
</div>
</template>

<script>
import $ from "jquery";
import { of } from 'rxjs';
import { take } from 'rxjs/operators';
import { from } from 'rxjs';
import { interval } from 'rxjs';

import { debounceTime } from 'rxjs/operators';
import { map, concatMap, delay } from 'rxjs/operators';

  export default {
   data: function(){
        return {
            sequance: [],
            mysequance:[],
            err:false,
            ready:false,
            n:1,
        }
        
    },
    methods:{
       start: function(){
         this.sequance=[],
          this.err=false;
          this.ready=false;
          this.add();
          this.n=1;
         
       },
       compare:function(){
          for (let i = 0; i < this.mysequance.length; i++) { // выведет 0, затем 1, затем 2
              if(this.mysequance[i]!=this.sequance[i]){
                this.err=true;
                this.ready=false;
                break;
              }
              if(i==this.sequance.length-1){
                const numbers = interval(700);
                const takeFourNumbers = numbers.pipe(take(2));
                takeFourNumbers.subscribe((x)=>{ 
                   console.log('Next: ', x)
                   if(x==1){
                     var audio = new Audio('dist/win.mp3');
                     audio.play();
                     console.log(x);
                     this.n++;
                     this.ready=false;
                     this.add();
                   }
                });
               
              }
          }
       },
       add: function(){
          let a = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
          this.sequance.push(a);
          this.mysequance=[];
          console.log(this.sequance);
          console.log(this.mysequance);

       },

       leftop: function(){
         if(this.ready==true){
            var audio = new Audio('dist/sound1.mp3');
            audio.play();
          this.mysequance.push(0);
          console.log(this.mysequance)
          this.compare();
         }
       },
       rigtop: function(){
         if(this.ready==true){
           var audio = new Audio('dist/sound2.mp3');
            audio.play();
          this.mysequance.push(1);
          console.log(this.mysequance)
          this.compare();
         }
       },
       lefdown: function(){
         if(this.ready==true){
           var audio = new Audio('dist/sound3.mp3');
            audio.play();
          this.mysequance.push(2);
          console.log(this.mysequance)
          this.compare();
         }
       },
       rigdown: function(){
         if(this.ready==true){
           var audio = new Audio('dist/sound4.mp3');
            audio.play();
          this.mysequance.push(3);
          console.log(this.mysequance)
          this.compare();
         }
       },
    },
    watch: {
            sequance: function (newNumber) {
              from(this.sequance).pipe(concatMap(item => of(item).pipe(delay(1000))))
              .subscribe( (next)=>{
                   switch (next) {
                       case 0:
                          var audio = new Audio('dist/sound1.mp3');
                          audio.play();
                         $(".upleft").fadeTo("normal",1,function(){
                           $(".upleft").fadeTo("normal",0.5);
                         });
                       break;
                       case 1:
                         var audio = new Audio('dist/sound2.mp3');
                         audio.play();
                       $(".upright").fadeTo("normal",1,function(){
                           $(".upright").fadeTo("normal",0.5);
                         });
                       break;
                       case 2:
                         var audio = new Audio('dist/sound3.mp3');
                          audio.play();
                       $(".downleft").fadeTo("normal",1,function(){
                           $(".downleft").fadeTo("normal",0.5);
                         });
                       break;
                       case 3:
                         var audio = new Audio('dist/sound4.mp3');
                          audio.play();
                       $(".downright").fadeTo("normal",1,function(){
                           $(".downright").fadeTo("normal",0.5);
                         });
                       break;
 
                     }
              },null,()=>{
                this.ready=true;
              }
                    
                );
                 
            }
        },
  }
</script>

<style>
body{
 background: -webkit-linear-gradient(45deg, #EECFBA, #C5DDE8);
}

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
  cursor: pointer;
}

div.block:hover{
  border: 4px double yellow; /* Параметры границы */
}

div.qwe{
  display: flex;
}

.qq{
  align-self: center;
  width: 320px;
}
.ff{
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
          overflow: hidden;
}

p{
  font-size: 65pt;
}
p.error{
  color: red;
}


</style>