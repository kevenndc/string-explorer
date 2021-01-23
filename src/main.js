import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import { createI18n } from 'vue-i18n';

// locales
import en from './locales/en.json';

function getStartLang() {
  const userLang =  navigator.language;
  const acceptedLangs = [...locales.keys()];

  return acceptedLangs.includes(userLang) ? userLang : 'en';
}

const locales = new Map()
                .set('en_US', en);

const messages = Object.create(locales.values);

console.log(messages);

const i18n = createI18n({
  locale: getStartLang(),
  messages
})

createApp(App)
  .use(store)
  .use(i18n)
  .mount("#app");

