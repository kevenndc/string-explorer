<template>
<div>
  <label for="method-type">I have a string, i would like to</label>
    <select name="method-type" id="method-type">
      <option v-for="n in number" :key="n" value="{{n}}">{{n}}</option>
    </select>
  </div>
</template>
<script>
export default {
  props: {
    number: Number
  }
}
</script>