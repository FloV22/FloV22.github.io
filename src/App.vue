<template>
  <div id="app">
    <field number=1></field>
    <field number=2></field>
    <field number=3></field>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  min-height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
#app > * {
  float: 0 0 auto;
  width: 50%;
  margin-left: 10%;
  margin-right: 10%;
}
</style>
