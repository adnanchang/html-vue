<template>
  <div class="test">
    <!-- <h1>{{ msg }}</h1>
    <p>{{firstName}} {{lastName}}</p> -->

    <canvas id="canvas">

    </canvas>
  </div>
</template>

<script>
import CircleGrowWithFollowContext from "./../js/CircleGrowWithFollowContext"
import CircleGrowWithFollow from "./../js/CircleGrowWithFollow.js"

export default {
  name: 'Context',
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
    this.vars.canvas = new CircleGrowWithFollowContext(ctx);
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
