<template>
<div>
  <locale-switcher />
  <main>
    <h1>JavaScript String Explorer</h1>
    <method-select></method-select>
  </main>
</div>
</template>

<script>
import LocaleSwitcher from './components/LocaleSwitcher.vue';
import MethodSelect from './components/MethodSelect.vue';

export default {
  name: "App",
  components: {
    LocaleSwitcher,
    MethodSelect,
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
