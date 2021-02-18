<template>
  <div class="row">
    <div class="select-form">
      <!-- Method Type Select -->
      <method-select
        :name="'method-type'"
        :label="$t('labels.firstSelectLabel')"
        :methods="methodTypes"
        :path="'labels.methodTypes'"
        :action="'setSelectedType'"
      >
      </method-select>
      <!-- END of Method Type Select -->

      <!-- Method Choice -->
      <transition name="fade">
        <method-select
          v-if="selectedType"
          :name="'method-choice'"
          :label="$t(`labels.methodTypes.${selectedType}.selectedLabel`)"
          :methods="getSelectedTypeMethods()"
          :path="`methods.${selectedType}`"
          :action="'setSelectedMethod'"
        >
        </method-select>
      </transition>
      <!-- END of Method Choice -->
    </div>

    
    <div class="method-info">
      <!-- Method Description -->
      <transition name="fade">
        <method-description
          v-if="selectedMethod"
          :methodName="selectedMethod"
          :methodPath="methodPath"
        >
        </method-description>
      </transition>

      <!-- END of Method Description -->
      <transition name="fade">
        <method-example
          v-if="selectedMethod"
          :methodPath="methodPath"
        ></method-example>
      </transition>
    </div>
    
  </div>
</template>
<script>
import { useI18n } from "vue-i18n";
import MethodDescription from "./MethodDescription.vue";
import MethodExample from "./MethodExample.vue";
import MethodSelect from "./MethodSelect.vue";

export default {
  components: {
    MethodDescription,
    MethodExample,
    MethodSelect,
  },

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

  watch: {
    selectedType() {
      this.resetSelectedMethod();
    },
    selectedMethod() {
      const path = `methods.${this.selectedType}.${this.selectedMethod}`;
      this.$store.commit("setSelectedPath", path);
    },
  },

  methods: {
    getSelectedTypeMethods() {
      return Object.keys(this.messages.methods[this.selectedType]);
    },
    resetSelectedMethod() {
      this.$store.commit("resetSelectedMethod");
    },
  },

  computed: {
    selectedType() {
      return this.$store.state.selectedType;
    },
    selectedMethod() {
      return this.$store.state.selectedMethod;
    },
    methodPath() {
      return `methods.${this.selectedType}.${this.selectedMethod}`;
    },
  },
};
</script>
<style scoped>
.select-item:first-child {
  margin-bottom: 10px;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: all 300ms ease;
}
</style>