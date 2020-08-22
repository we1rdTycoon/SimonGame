

<template>
<div>
    <div class="qwe">
      <div class="upleft block"></div><div class="upright block"></div>
       <b-button class="qq" variant="danger">START</b-button>
      </div>
      <div class="qwe">
        <div class="downleft block"></div><div class="downright block"></div>
       
      </div>
     
</div>
</template>

<script>

  export default {
   data: function(){
        return {
            header: 'Counter Program'
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
  vertical-align: top
}
div.qwe{
  display: flex;
}

.qq{
  align-self: center;
  
}
</style>