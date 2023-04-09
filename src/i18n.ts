import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Trans Files
import CoreEN from './locales/en/core.json';
import ButtonsEN from './locales/en/buttons.json';

const resources = {
    ns   : ['buttons', 'core'],
    trans: {
        en: {
            core   : CoreEN,
            buttons: ButtonsEN,
        }
    }
};

// eslint-disable-next-line import/no-named-as-default-member
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources    : resources.trans,
        ns           : resources.ns,
        defaultNS    : 'core',
        fallbackLng  : 'en',
        debug        : false,
        interpolation: {
            escapeValue: false,
        },
    });


export default i18n;
