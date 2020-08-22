

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

  export default {
   data: function(){
        return {
            sequance: [0,0,0,0,0,0,0,0],
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
               newNumber.forEach((item, index, array)=> {
                       switch (item) {
                            case 0:
                              this.opac0=true;
                         this.opac0=false;
                              break;
                            case 1:
                              alert( 'В точку!' );
                              break;
                            case 2:
                              alert( 'Перебор' );
                              break;
                            case 3:
                              alert( 'Перебор' );
                              break;
                         
                        }
               });
                 
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


@keyframes anime {

    100% {
        opacity: 1;
    }
}


.opac {
  animation-name: anime;
  animation-duration: 2s;
  animation-iteration-count: 1;
}
</style>