import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

const resources = {
    en: {
        translation: {
            "language": "en"
        }
    },
    ko: {
        translation: {
            "language": "ko"
        }
    }
};

i18n
    .use(Backend)
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: 'en', // default language
        debug: true,
        load: 'languageOnly',
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;