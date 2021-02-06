<template>
  <div>
    <div>
      <span v-html="$t(`${methodPath}.example`)"></span>
    </div>
    <div>
      <span v-html="$t(`${methodPath}.output`)"></span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    methodPath: String
  }
}
</script>