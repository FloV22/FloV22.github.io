<template>
  <div id="app">
    <field number=1></field>
    <field number=2></field>
    <field number=3></field>
    <field number=4></field>
    <field number=5></field>
    <field number=6></field>
  </div>
</template>

<script>
import field from './components/field.vue'

export default {
  name: 'App',
  components: {
    field
  }
}
</script>

<style>
html, body {
    margin: 0;
    height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-image: radial-gradient( circle farthest-corner at 0.2% 0.3%,  rgba(3,144,232,1) 0%, rgba(2,97,156,1) 89.9% );
}
#app > * {
  float: 0 0 auto;
  width: 50%;
}
</style>
