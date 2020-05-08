<template>
  <div id="container">
    <div id="title">Terrain n°{{number}}</div>
    <img id="field" src="../assets/badminton-court.svg"/>
    <div id="actions-buttons">
      <countdown v-if="date" id="ctdn" :date="date"/>
      <button id="start" @click="emit('startTimer')">Début</button>
      <button id="stop" @click="emit('stopTimer')">Stop</button>
    </div>
  </div>
</template>

<script>
import countdown from './Countdown';

export default {
  props: ['number', 'initialTime'],
  components: {
    countdown
  },
  data: () => ({
    date: null
  }),

  methods: {
    emit(action) {
      if (action === 'stopTimer') {
        this.date = null;
      } else {
        this.date = this.initialTime;
      }
      this.$nextTick(() => {
        this.$emit(action);
      });
    }
  }
}
</script>

<style lang="less" scoped>
#container {
  width: 50%;
  height: 33%;
  position: relative;
  overflow: hidden;
}
#field {
  width: 100%;
  height: 100%;
  z-index: 0;
}
#actions-buttons {
  position: absolute;
  width: 80%;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 40%;
  text-align: center;
}
#ctdn {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
}
#title {
  position: absolute;
  top: 9%;
  left: 43%;
  font-size: 1.5vw;
  font-weight: bold;
  color: rgb(223, 108, 31);
  font-weight: bold;
}
#start,
#stop {
  position: absolute;
  z-index: 20;
  background-color: #0e0f7c;
  border: none;
  color: rgb(223, 108, 31);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  top: 40%;
}
#start {
  left: 0;
}
#stop {
  right: 0;
}
</style>