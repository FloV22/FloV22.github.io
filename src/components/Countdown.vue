<template>
  <div class="flip-clock" @click="update">
    <tracker 
      v-for="tracker in trackers"
      v-bind:key="tracker.id"
      :property="tracker.value"
    ></tracker>
  </div>
</template>

<script>
import Tracker from './Tracker';
import moment from 'moment';

export default {
  name: 'Countdown',
  
  props: ['date'],

  data: () => ({
    time: {},
    trackers: [{ value: 'Minutes', id: 2},{ value:'Seconds', id: 3}] 
  }),

  created() {
    this.frame = null;
  },

  components: {
    Tracker
  },
  
  beforeDestroy(){
    cancelAnimationFrame(this.frame);
  },
  
  mounted() {
    if ( window['requestAnimationFrame'] ) {
      this.setCountdown(this.date);
      this.interval = setInterval(this.update, 1000);
    }
  },
  
  methods: {
    
    setCountdown(date){
      if ( date ) {
        this.countdown = moment(date, 'YYYY-MM-DD HH:mm:ss');
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
