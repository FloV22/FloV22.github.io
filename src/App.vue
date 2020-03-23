<template>
  <div id="container">
    <header>
      <img src="./assets/p2b.png"/>
      <span>
        Badminton Timer
      </span>
    </header>
    <div id="app" >
      <field v-for="(number, index) in fields" :key="`number-${index}`" :number=number></field>
    </div>
  </div>
</template>

<script>
import field from './components/field.vue'

export default {
  name: 'App',
  data: () => ({
    fields: [1,2,3,4,5,6]
  }),
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
header {
  display: flex;
  width: 100%;
  height: 6%;
  color: rgb(223, 108, 31);
  padding: 15px 32px;
  text-decoration: none;
  font-size: 32px;
  font-weight: bold;
  background-color: #0e0f7c;
}
span {
  vertical-align: center;
  margin-left: 10px;
  margin-top: 2px;
}
img {
  border-radius: 50%;
  width: 50px;
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
#app > * {
  float: 0 0 auto;
  width: 50%;
}
</style>
