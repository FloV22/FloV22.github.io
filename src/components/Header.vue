<template>
  <header class="headerStyle">
    <div class="center">
      <img src="../assets/p2b.png"/>
      Badminton Timer
    </div>
    <div class="center">
      <a-time-picker v-model="value" @change=onChange></a-time-picker>
    </div>
  </header>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Header',
  data: () => ({
    value: moment('02:40', 'mm:ss')
  }),
  methods: {
    onChange(time) {
      this.$emit('change', time.diff(moment().startOf('day'), 'seconds'));
    }
  }
};
</script>

<style lang="less">
  @import "~ant-design-vue/dist/antd.less";
  .headerStyle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 8%;
    color: rgb(223, 108, 31);
    text-decoration: none;
    padding-bottom: 15px;
    padding-top: 15px;
    font-size: 32px;
    font-weight: bold;
    background-color: #0e0f7c;
  }
  .center {
    display: flex;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
  }
  img {
    border-radius: 50%;
    width: 50px;
  }
</style>