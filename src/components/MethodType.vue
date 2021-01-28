<template>
  <div>
    <label for="method-type">{{$t('labels.firstSelectLabel')}}
      <select name="method-type" id="method-type">
        <option v-for="n in number" :key="n" value="{{n}}">{{n}}</option>
      </select>
    </label>
  </div>
</template>
<script>
export default {
  setup() {
  },
  props: {
    number: Number
  }
}
</script>