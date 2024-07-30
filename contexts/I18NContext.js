import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';
import PropTypes from "prop-types";
import {getLocales} from 'expo-localization';
import {I18n} from "i18n-js";

function getInitialLanguage() {
    const languageCode = getLocales()[0].languageCode;
    return ['de', 'en'].includes(languageCode) ? languageCode : 'en';
}

function getI18NForLanguage(language) {
    const translations = {
        de: require('../i18n/de.json'),
        en: require('../i18n/en.json'),
    };

    const i18n = new I18n(translations);
    i18n.locale = language;
    i18n.fallbacks = true;
    i18n.defaultLocale = 'en';

    return i18n;
}


const I18NContext = createContext(undefined);

export const I18NProvider = ({children}) => {
    const [language, setLanguage] = useState(getInitialLanguage());
    const [i18n] = useState(getI18NForLanguage(getInitialLanguage()));

    useEffect(() => {
        // Only update the language instead of replacing the complete object
        if (language && i18n) {
            i18n.locale = language;
        }
    }, [language]);

    const context = useMemo(() => {
        return {language: language, setLanguage: setLanguage, i18n: i18n};
    }, [language]);

    return (
        <I18NContext.Provider value={context}>
            {children}
        </I18NContext.Provider>
    );
};

I18NProvider.propTypes = {
    children: PropTypes.any,
};

export const useI18NState = () => useContext(I18NContext);
