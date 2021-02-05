<template>
  <div>
    <!-- Method Type Select -->
    <div>
      <label for="method-type">{{ $t("labels.firstSelectLabel") }}</label>
      <select class="method-select" name="method-type" id="method-type" v-model="selectedType">
        <option value="" disabled selected>...</option>
        <option
          v-for="methodType in methodTypes"
          :key="methodType"
          :value="methodType"
        >
          {{ $t(`labels.methodTypes.${methodType}.optionLabel`) }}
        </option>
      </select>
    </div>
    <!-- END of Method Type Select -->

    <!-- Method Select -->
    <div v-if="selectedType">
      <label for="method-choice">{{ $t(`labels.methodTypes.${selectedType}.selectedLabel`) }}</label>
      <select class="method-select" name="method-choice" id="method-choice" v-model="selectedMethod">
        <option value="" disabled selected>...</option>
        <option
          v-for="method in getSelectedTypeMethods()"
          :value="method"
          :key="method"
        >
          {{ $t(`methods.${selectedType}.${method}.optionLabel`) }}
        </option>
      </select>
    </div>
    <!-- END of Method Select -->
  </div>
</template>
<script>
import { useI18n } from "vue-i18n";

export default {
  setup() {
    /**
     * Get all the MethodTypes keys to list them as options for this component
     *
     * Note: Maybe there is a better way for retrieving all the MethodTypes
     */
    const { getLocaleMessage, locale } = useI18n();
    const messages = getLocaleMessage(locale.value);
    const methodTypes = Object.keys(messages.labels.methodTypes);

    return {
      messages,
      methodTypes,
    };
  },

  data() {
    return {
      selectedType: '',
      selectedMethod: ''
    }
  },

  watch: {
    selectedType() {
      this.$store.commit('setSelectedType', this.selectedType);
    },
    selectedMethod() {
      this.$store.commit('setSelectedMethod', this.selectedMethod);
    }
  },

  methods: {
    getSelectedTypeMethods() {
      return Object.keys(this.messages.methods[this.selectedType]);
    }
  }
};
</script>
<style scoped>
  .method-type {
    margin-left: 5px;
  }
</style>