<template>
  <div id="container">
    <div id="title">Terrain n°{{number}}</div>
    <img id="field" src="../assets/badminton-court.svg"/>
    <countdown id="ctdn"/>
    <button id="start" @click="emit('startTimer')">Début</button>
    <button id="stop" @click="emit('stopTimer')">Stop</button>
  </div>
</template>

<script>
import countdown from './Countdown';

export default {
  props: ['number'],
  components: {
    countdown
  },
  methods: {
    emit(action) {
      console.log(action);
      this.$emit(action);
    }
  }
}
</script>

<style lang="less" scoped>
#container {
  width: 400px;
  height: 250px;
  position: relative;
}
#ctdn,
#field {
  position: absolute;
  top: 0;
  left: 0;
}
#field {
  width: 100%;
  height: 100%;
}
#ctdn {
  z-index: 10;
  top: 36%;
  left: 26%
}
#title {
  position: absolute;
  top: 11%;
  left: 31%;
  font-size: 32px;
  color: #14dd45;
  font-weight: bold;
}
#start,
#stop {
  position: absolute;
  z-index: 20;
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  top: 40%;
}
#start {
  left: 0%
}
#stop {
  left: 85%;
}
</style>