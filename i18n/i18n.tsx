import * as i18next from "i18next";
import { initReactI18next } from "react-i18next";

import ar from "./ar.json";
import en from "./en.json";

i18next.use(initReactI18next).init({
    lng: "ar", 
    fallbackLng: "en",
    resources: {
      ar: { translation: ar },
      en: { translation: en },
    },
    interpolation: {
      escapeValue: false,
    },
});


export default i18next;


