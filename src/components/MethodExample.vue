<template>
  <div>
    <div>
      <pre class="language-js">
        <code v-html="codeExample"></code>
      </pre>
    </div>
    <div>
      <pre class="language-js">
        <code v-html="codeOutput"></code>
      </pre>
    </div>
  </div>
</template>
<script>
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';


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