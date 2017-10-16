<template>
  <div class="test">
    <h1>{{ msg }}</h1>
    <p>{{firstName}} {{lastName}}</p>

    <canvas id="canvas">

    </canvas>
  </div>
</template>

<script>
import Test from "./../js/Test.js"

export default {
  name: 'Test',
  data () {
    return {
      msg: 'Welcome to Your Vue.js and HTML Canvas App',
      firstName: "Muhammad",
      lastName: "Adnan"
    }
  },

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
    var x = 0;
    var y = 0;
    this.vars.canvas = new Test(x, y, ctx);


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
canvas {
  border: 1px solid black;
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
