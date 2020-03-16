<template>
  <div id="container">
    <div id="title">Terrain n°{{number}}</div>
    <img id="field" src="../assets/badminton-court.svg"/>
    <countdown id="ctdn"/>
  </div>
</template>

<script>
import countdown from './Countdown';

export default {
  props: ['number'],
  components: {
    countdown
  }
}
</script>

<style lang="less" scoped>
#container {
  width: 400px;
  height: 400px;
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
  top: 43%;
  left: 33%
}
#title {
  position: absolute;
  top: 14%;
  left: 31%;
  font-size: 32px;
  color: #14dd45;
  font-weight: bold;
}
</style>