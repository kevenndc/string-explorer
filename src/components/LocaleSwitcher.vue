<template>
  <div class="locale-switcher">
    <label for="language-select">{{ $t('labels.language') }}:</label>
    <select name="language-select" id="language-select" v-model="$i18n.locale">
      <option
        v-for="locale in $i18n.availableLocales"
        :key="`locale-${locale}`"
        :value="locale"
      >
        {{ $t('meta.longName', locale) }}
      </option>
    </select>
  </div>
</template>
<style scoped>
  .locale-switcher {
    text-align: right;
  }
</style>