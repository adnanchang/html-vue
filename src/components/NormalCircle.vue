<template>
  <div class="test">
    <!-- <h1>{{ msg }}</h1>
    <p>{{firstName}} {{lastName}}</p> -->

    <canvas id="canvas">

    </canvas>
  </div>
</template>

<script>
import NormalCircleContext from "./../js/NormalCircleContext.js"
import NormalCircle from "./../js/NormalCircle.js"

export default {
  name: 'Context',

// Needs to be done to handle the scope
  created: function() {
    this.vars = {
      canvas: null
    }
  },

//Letting the external
  mounted: function(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    this.vars.canvas = new NormalCircleContext(ctx);
  },

  beforeDestroy: function (){
    this.vars.canvas.stopAll();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
canvas {
  /* border-top: 1px solid #eedfcc; */
  margin-top: 10px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
