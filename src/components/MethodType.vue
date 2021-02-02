<template>
  <div>
    <label for="method-type">{{ $t("labels.firstSelectLabel") }}</label>
    <select class="method-type" name="method-type" id="method-type" @change="setMethodType">
      <option value="">...</option>
      <option
        v-for="methodType in methodTypes"
        :key="methodType"
        :value="methodType"
      >
        {{ $t(`labels.methodTypes.${methodType}.optionLabel`) }}
      </option>
    </select>
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
      methodTypes,
    };
  },
  methods: {
    setMethodType(e) {
      this.$store.commit('setSelectedType', e.target.value);
    },
  },
};
</script>
<style scoped>
  .method-type {
    margin-left: 5px;
  }
</style>