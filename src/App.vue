<template>
<div>
  <locale-switcher />
  <main class="container">
    <h1>JavaScript String Explorer</h1>
    <method-primary></method-primary>
  </main>
</div>
</template>

<script>
import LocaleSwitcher from './components/LocaleSwitcher.vue';
import MethodPrimary from './components/MethodPrimary.vue';

export default {
  name: "App",
  components: {
    LocaleSwitcher,
    MethodPrimary,
  },

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  white-space: pre-line;
}
.container {
    max-width: 980px;
    margin: 0 auto;
  }
</style>
