

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
     <p class="error" v-if="err">ПРОВАЛ</p> <br><br>
        <b-form-radio class="edd" v-model="mode" name="some-radios" value="SimpleGame">SIMPLE GAME</b-form-radio>
        <b-form-radio class="edd" v-model="mode" name="some-radios" value="SoundOnly">SOUND ONLY</b-form-radio>
  </div>
</div>
</template>

<script>
import $ from "jquery";
import { of } from 'rxjs';
import { take } from 'rxjs/operators';
import { from } from 'rxjs';
import { interval } from 'rxjs';
import { ignoreElements } from 'rxjs/operators';
import { map, concatMap, delay } from 'rxjs/operators';

  export default {
   data: function(){
        return {
            sequance: [], 
            mysequance:[],
            err:false,
            ready:false,
            n:1,
            mode:'SimpleGame',
            stop: false,
        }
        
    },
    methods:{
       start: function(){
         this.stop=true;
         interval(700).pipe(take(1)).subscribe((x)=>{
              if(x==0){
                 this.sequance=[];
                 this.err=false;
                 this.ready=false;
                 this.n=1;
                 this.stop=false
                this.add();
              }

         });
         
          
         
       },
       compare:function(){
          for (let i = 0; i < this.mysequance.length; i++) {
              if(this.mysequance[i]!=this.sequance[i]){
                this.err=true;
                this.ready=false;
                break;
              }
              if(i==this.sequance.length-1){
                 interval(700).pipe(take(1)).subscribe((x)=>{ 
                   console.log('Next: ', x)
                   if(x==0){
                     if(this.stop==false){
                     var audio = new Audio('dist/win.mp3');
                     audio.play();
                     this.n++;
                     this.ready=false;
                     this.add();
                     }
                   }
                });
               
              }
          }
       },
       add: function(){
          let a = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
          this.sequance.push(a);
          this.mysequance=[];
       },

       leftop: function(el){
         if(this.ready==true){
            var audio = new Audio('dist/sound1.mp3');
             $(".upleft").fadeTo("fast",1,function(){
                 $(".upleft").fadeTo("fast",0.5);
             });
            audio.play();
            this.mysequance.push(0);
            this.compare();
         }
       },
       rigtop: function(){
         if(this.ready==true){
           var audio = new Audio('dist/sound2.mp3');
           $(".upright").fadeTo("fast",1,function(){
                 $(".upright").fadeTo("fast",0.5);
                 
             });
             
          audio.play();
          this.mysequance.push(1);
          this.compare();
         }
       },
       lefdown: function(){
         if(this.ready==true){
           var audio = new Audio('dist/sound3.mp3');
           $(".downleft").fadeTo("fast",1,function(){
                 $(".downleft").fadeTo("fast",0.5);
               });
            audio.play();
          this.mysequance.push(2);
          this.compare();
         }
       },
       rigdown: function(){
         if(this.ready==true){
           var audio = new Audio('dist/sound4.mp3');
            $(".downright").fadeTo("fast",1,function(){
                 $(".downright").fadeTo("fast",0.5);
               });
            audio.play();
          this.mysequance.push(3);
          this.compare();
         }
       },
    },
    watch: {
            sequance: function (newNumber) {
              if(this.sequance.length!==0){
              from(this.sequance).pipe(concatMap((item) =>{
                if(this.stop==false) {
                   return of(item).pipe(delay(1000))
                   }
                    else 
                    {
                       return of(item).pipe(ignoreElements())
                    }
                 }))
              .subscribe( (next)=>{
                   switch (next) {
                       case 0:
                         if(this.stop==false){
                         var audio = new Audio('dist/sound1.mp3');
                          audio.play();
                         }
                         if(this.mode=="SimpleGame"){
                          $(".upleft").fadeTo("normal",1,function(){
                           $(".upleft").fadeTo("normal",0.5);
                         });
                         }
                       break;
                       case 1:
                         if(this.stop==false){
                         var audio = new Audio('dist/sound2.mp3');
                         audio.play();
                         }
                         if(this.mode=="SimpleGame"){
                         $(".upright").fadeTo("normal",1,function(){
                           $(".upright").fadeTo("normal",0.5);
                         });
                         }
                       break;
                       case 2:
                         if(this.stop==false){
                         var audio = new Audio('dist/sound3.mp3');
                          audio.play();
                         }
                         if(this.mode=="SimpleGame"){
                           $(".downleft").fadeTo("normal",1,function(){
                             $(".downleft").fadeTo("normal",0.5);
                         });
                         }
                       break;
                       case 3:
                         if(this.stop==false){
                         var audio = new Audio('dist/sound4.mp3');
                         audio.play();
                         }
                         if(this.mode=="SimpleGame"){
                         $(".downright").fadeTo("normal",1,function(){
                           $(".downright").fadeTo("normal",0.5);
                         });
                         }
                       break;
 
                     }
              },null,()=>{
                this.ready=true;
              }
                    
                );
              }
            },
            mode:function(){
               this.mysequance=[];
               this.sequance=[];
               this.err=false;
               this.ready=false;
               this.n=1;
               this.stop=true;
               this.ready=false;
            }
        },
  }
</script>

<style>
@import "style.css";
</style>