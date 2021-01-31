import { createI18n } from 'vue-i18n';

const messages = loadLocaleMessages();
const locale = getStartLocale();

export default createI18n({
  locale: locale,
  messages: messages
});

/**
 * Loads all json files in the 'locales' folder and returns a Object with all locales and messages.
 * 
 * @returns {Object} messages
 */
function loadLocaleMessages() {
  const locales = require.context('./locales', true, /[a-z]{2}\.json$/i);
  const keys = locales.keys();
  const values = keys.map(locales);

  const messages = {};
  keys.forEach(key => {
    const locale = key.match(/[a-z]{2}/i)[0];
    const index = keys.indexOf(key);
    messages[locale] = values[index];
  });

  return messages;
}

/**
 * This function is used to detect the user's default browser language. If the user language doesn't have any translation, the default language will be English.
 * 
 * @returns {string} locale
 */
function getStartLocale() {
  const userLang = navigator.userLanguage
    || (navigator.languages && navigator.languages.length && navigator.languages[0])
    || navigator.language
    || navigator.browserLanguage
    || navigator.systemLanguage;

  const userLocale = userLang.substring(0, 2);
  const acceptedLocales = Object.keys(messages);

  return acceptedLocales.includes(userLocale) ? userLocale : 'en';
}