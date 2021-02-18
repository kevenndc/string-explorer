<template>
<div>
  <github-corner></github-corner>
  <main class="container">
    <locale-switcher />
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
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

body {
  margin: 0;
}

body, select {
  font-family: 'Nunito', monospace;
  font-size: 18px;
}
select {
  margin-left: 5px;
}
code {
  font-size: 16px;
}

hr {
  margin: 2em 0 1.8em;
  height: 1px;
  background-color: #ccc;
  border: none;
}

.code-font {
  font-family: 'Source Code Pro', monospace;
}

.container {
  max-width: 980px;
  margin: 0 auto;
}

#app {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
color: #2c3e50;
margin-top: 60px;
white-space: pre-line;
}

@media only screen and (max-width: 1024px) {
  .container {
    max-width: 85%;
  }
  .method-select {
    display: block;
    margin-left: 0;
  }
  body, select {
    font-size: 17px;
  }
  h1 {
    font-size: 1.8em;
  }
  h2 {
    font-size: 1.4em;
  }
  h3 {
    font-size: 1.1em;
  }
  code {
    font-size: 15px;
  }
}

@media only screen and (max-width: 599px) {
  .container {
    max-width: 85%;
    padding-bottom: 2em;
  }
  body, select {
    font-size: 14px;
  }
  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.2em;
  }
  h3 {
    font-size: 1.1em;
  }
  code {
    font-size: 12px;
  }
}

/* @media (prefers-color-scheme: dark) {
  body {
    background-color: #333;
  }
  a {
    color: #50fa7b;
  }
} */
</style>
