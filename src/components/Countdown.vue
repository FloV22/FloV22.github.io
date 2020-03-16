<template>
  <div class="flip-clock" @click="update" @startTimer="startTimer" @stopTimer="stopTimer">
    <tracker 
      v-for="tracker in trackers"
      v-bind:key="tracker.id"
      :property="tracker.value"
    ></tracker>
  </div>
</template>

<script>
import Tracker from './Tracker';

export default {
  name: 'Countdown',
  
  props: ['date'],

  data: () => ({
    time: {},
    trackers: [{ value: 'Minutes', id: 2},{ value:'Seconds', id: 3}] 
  }),

  components: {
    Tracker
  },
  
  mounted() {
    this.setCountdown(this.date);
    this.interval = setInterval(this.update, 1000);
  },
  
  methods: {

    startTimer() {
      this.interval = setInterval(this.update, 1000);
    },

    stopTimer() {
      clearInterval(this.interval);
    },
    
    setCountdown(date){
      if ( date ) {
        this.countdown = date;
      } else {
        this.countdown = 200;
      }
    },
    
    update() {
      if (this.countdown-- < 0) {
        clearInterval(this.interval);
        return;
      }

      this.time.Seconds = Math.floor(this.countdown  % 60);
      this.time.Minutes = Math.floor((this.countdown / 60) % 60);      
      this.time.Total = this.countdown;
      
      this.$emit('time',this.time);
      return this.time;
    }
  }
}
</script>
