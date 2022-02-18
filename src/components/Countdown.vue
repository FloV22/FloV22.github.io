<template>
  <div :id="id" class="flip-clock">
    <tracker
      v-for="tracker in trackers"
      v-bind:key="tracker.id"
      :property="tracker.value"
    ></tracker>
  </div>
</template>

<script>
import Tracker from "./Tracker";

export default {
  name: "Countdown",

  props: ["date", "id"],

  data: () => ({
    time: {},
    trackers: [
      {
        value: "Minutes",
        id: 2,
      },
      {
        value: "Seconds",
        id: 3,
      },
    ],
  }),

  components: {
    Tracker,
  },

  mounted() {
    this.$parent.$on("startTimer", this.startTimer);
    this.$parent.$on("stopTimer", this.stopTimer);
  },

  destroyed() {
    this.$parent.$off("startTimer");
    this.$parent.$off("stopTimer");
  },

  methods: {
    startTimer() {
      this.stopTimer();
      this.setCountdown(this.date);
      this.interval = setInterval(this.update, 1000);
    },

    stopTimer() {
      this.blink(false);
      this.countdown = null;
      clearInterval(this.interval);
      this.interval = null;
    },

    setCountdown(date) {
      this.countdown = parseInt(date, 10);
    },

    blink(add = false) {
      const el = document.getElementById(this.id);
      if (el) {
        add ? el.classList.add("blinking") : el.classList.remove("blinking");
      }
    },

    update() {
      if (this.countdown-- <= 0) {
        this.blink(true);
        clearInterval(this.interval);
        return;
      }

      this.time.Seconds = Math.floor(this.countdown % 60);
      this.time.Minutes = Math.floor((this.countdown / 60) % 60);
      this.time.Total = this.countdown;

      this.$emit("time", this.time);
      return this.time;
    },
  },
};
</script>

<style lang="less" scoped>
.blinking {
  animation: blink-animation 1s steps(5, start) infinite;
  -webkit-animation: blink-animation 1s steps(5, start) infinite;
}
@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
@-webkit-keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
</style>
