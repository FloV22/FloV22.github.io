<template>
  <div id="container">
    <div id="title">
      <p>Terrain n°{{number}}</p>
    </div>
    <div id="actions-buttons">
      <button id="start" @click="emit('startTimer')">Début</button>
      <countdown v-if="date" :id="id" class="ctdn" :date="date"/>
      <div v-if="!!date" id="empty"></div>
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
  data: function() {
    return {
      date: null,
      id: `ctdn-${this.number}`
    };
  },

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
  height: calc(100% / 3);
  background-image: url("../assets/badminton-court.svg");
  background-size: 200px;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  margin-bottom: 5px;
  flex-grow: 1;
  flex-basis: 50%;
  padding-right: 10px;
}

button {
  height: 40px;
}

#field {
  width: 100%;
  height: 100%;
  z-index: 0;
}
#actions-buttons {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  margin: 0 60px;
}
.ctdn {
  left: 0;
  right: 0;
  margin: 0 auto;
}
#title {
  text-align: center;
  height: 40%;
  font-size: 24px;
  font-weight: bold;
  color: rgb(223, 108, 31);
  font-weight: bold;
  margin: 0;
}
#start,
#stop {
  background-color: #0e0f7c;
  color: rgb(223, 108, 31);
  font-size: 16px;
  font-weight: bold;
  padding:0.3em 1.2em;
  border: 0.16em solid rgba(255,255,255,0);
  border-radius: 2em;
}
</style>