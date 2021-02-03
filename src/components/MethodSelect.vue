<template>
  <div>
    <div>
      <label for="method-type">{{ $t("labels.firstSelectLabel") }}</label>
      <select class="method-type" name="method-type" id="method-type" v-model="selectedType">
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
    
    <div v-if="selectedType">
      <label for="method-choice">{{ $t(`labels.methodTypes.${selectedType}.selectedLabel`) }}</label>
      <select name="method-choice" id="method-choice">
        <option value="" disabled selected>...</option>
        <!-- <option
          v-for=""
        >

        </option> -->
      </select>
    </div>
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

    return {
      messages,
    };
  },

  data() {
    return {
      selectedType: '',
      methodTypes: this.getMethodTypes()
    }
  },

  watch: {
    selectedType() {
      this.$store.commit('setSelectedType', this.selectedType);
      //console.log(this.$store.getters.selectedType);
    },
  },

  methods: {
    getMethodTypes() {
      return Object.keys(this.messages.labels.methodTypes);
    } 
  }
};
</script>
<style scoped>
  .method-type {
    margin-left: 5px;
  }
</style>