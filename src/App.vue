<template>
  <div id="container">
    <headercomponent v-on:change="timeChange"/>
    <div id="app" >
      <field v-for="(number, index) in fields" :key="`number-${index}`" :number=number :initialTime=time></field>
    </div>
  </div>
</template>

<script>
import field from './components/field.vue';
import headercomponent from './components/Header';

export default {
  name: 'App',
  data: () => ({
    fields: [1,2,3,4,5,6],
    time: 160
  }),
  components: {
    field,
    headercomponent
  },
  methods: {
    timeChange(time) {
      this.time = time;
    }
  }
}
</script>

<style>
html, body {
    margin: 0;
    height: 100%;
}
#container {
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 95%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-image: radial-gradient( circle farthest-corner at 0.2% 0.3%,  rgba(3,144,232,1) 0%, rgba(2,97,156,1) 89.9% );
}
</style>
