<template>
<div>
  <github-corner></github-corner>
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
import GithubCorner from './components/GithubCorner.vue';

export default {
  name: "App",
  components: {
    LocaleSwitcher,
    MethodPrimary,
    GithubCorner,
  },

};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

body, select {
  font-family: 'Nunito', monospace;
  font-size: 18px;
}
select {
  /* font-size: 1em; */
}
code {
  font-size: 16px;
}
.code-font {
  font-family: 'Source Code Pro', monospace;
}
#app {
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
