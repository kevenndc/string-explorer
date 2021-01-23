<template>
  <main>
    <h1>JavaScript String Explorer</h1>
    <method-type :number="10"></method-type>
  </main>
</template>

<script>
import MethodType from './components/MethodType.vue';

export default {
  name: "App",
  components: {
    MethodType,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
