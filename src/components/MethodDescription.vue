<template>
  <div>
    <h2>
      <span v-if="method === 'fromCodePoint'">String.</span>
      <span v-else>str.</span>{{method}}()
    </h2>
    <p>{{ $t(`methods.${methodType}.${method}.description`) }}</p>
  </div>
</template>
<script>
export default {
  computed: {
    methodType() {
      return this.$store.state.selectedType;
    },
    method() {
      return this.$store.state.selectedMethod;
    }
  }
}
</script>