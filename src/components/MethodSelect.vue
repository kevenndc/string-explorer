<template>
  <div>
  <!-- Method Type Select -->
    <label :for="name">{{ label }}</label>
    <select class="method-select" :name="name" :id="name" v-model="selected">
      <option value="" disabled selected>...</option>
      <option
        v-for="method in methods"
        :key="method"
        :value="method"
      >
        {{ $t(`${path}.${method}.optionLabel`) }}
      </option>
    </select>
  <!-- END of Method Type Select -->
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    label: String,
    methods: Array,
    path: String,
    action: String,
  },

  data() {
    return {
      selected: ''
    }
  },

  watch: {
    selected() {
      this.$store.commit(this.action, this.selected);
    }
  }
}
</script>

<style scoped>
  .method-select {
    margin-left: 5px;
  }
</style>