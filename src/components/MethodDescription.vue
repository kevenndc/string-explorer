<template>
  <div>
    <hr>
    <h2 class="code-font">
      String.{{methodName}}()
    </h2>
    <p v-html="$t(`${methodPath}.description`)"></p>
    <a :href="`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/${methodName}`" target="_blank">
      {{ $t('labels.seeDocs') }} &#8594;
    </a>
  </div>
  <hr>
</template>
<script>
export default {
  props: {
    methodName: String,
    methodPath: String
  }
}
</script>