import { createApp } from "vue";
import { createI18n } from 'vue-i18n';
import App from "./App.vue";
import store from "./store";

// locales
import en from './locales/en/en.json';
import pt from './locales/pt/pt.json';

function loadLocaleMessages() {
  const locales = require.context('./locales', true, /[a-z]{2}\.json$/i);
  console.log(locales.keys());
}

loadLocaleMessages();

// Sets all translations into a Map wich will be used to 
const locales = new Map()
                .set('en', en)
                .set('pt', pt)

const messages = Object.fromEntries(locales);

const i18n = createI18n({
  locale: getStartLocale(),
  messages
});

createApp(App)
  .use(store)
  .use(i18n)
  .mount("#app");


/**
 * This function is used to detect the user's default browser language. If the user language doesn't have any translation, the default language will be English.
 * 
 * @returns {string} locale
 */
function getStartLocale() {
  const userLang =  navigator.userLanguage 
                    || (navigator.languages && navigator.languages.length && navigator.languages[0]) 
                    || navigator.language 
                    || navigator.browserLanguage 
                    || navigator.systemLanguage;

  const userLocale = userLang.substring(0, 2);
  const acceptedLangs = [...locales.keys()];

  return acceptedLangs.includes(userLocale) ? userLocale : 'en';
}