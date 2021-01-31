<template>
<div>
  <locale-switcher />
  <main>
    <h1>JavaScript String Explorer</h1>
    <method-type></method-type>
  </main>
</div>
</template>

<script>
import MethodType from './components/MethodType.vue';
import LocaleSwitcher from './components/LocaleSwitcher.vue';

export default {
  name: "App",
  components: {
    MethodType,
    LocaleSwitcher,
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
