<template>
  <div>
    <div>
      <h3>{{ $t('labels.example') }}</h3>
      <pre class="language-js code-font">
        <code class="code-font" v-html="codeExample"></code>
      </pre>
    </div>
    <div>
      <h3>{{ $t('labels.output') }}</h3>
      <pre class="language-js">
        <code class="code-font" v-html="codeOutput"></code>
      </pre>
    </div>
  </div>
</template>
<script>
import Prism from 'prismjs';

import 'prismjs/components/prism-javascript'


export default {
  props: {
    methodPath: String
  },
  computed: {
    codeExample() {
      const code = this.$t(`${this.methodPath}.example`);
      const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');
      return html;
    },
    codeOutput() {
      const code = this.$t(`${this.methodPath}.output`);
      const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');
      return html;
    }
  }
}
</script>
<style scoped>
@import url(../assets/prism-themes/prism-dracula.css);

code[class*="language-"], pre[class*="language-"] {
  white-space: pre-line;
}

@media only screen and (max-width: 599px) {
  pre[class*="language-"] {
    padding: .5em;
  }
}
</style>