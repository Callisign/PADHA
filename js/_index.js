import translations from "./translations.js";

const languageSelector = document.getElementById('languageSelector');
languageSelector.addEventListener('change', (event) => {
    setLanguage(event.target.value);
    localStorage.setItem("lang", event.target.value);
});

document.addEventListener('DOMContentLoaded', () => {
    let language = localStorage.getItem("lang") || "en";
    setLanguage(language);
});

const setLanguage = (language) => {
    const elements = document.querySelectorAll("[data-translation]");
    elements.forEach((elements) => {
        let translationKey = elements.getAttribute("data-translation")
        elements.textContent = translations[language][translationKey];
    });

    // document.dir = language === "ar" ? "rtl" : "ltr";
    // same same as short
    if (document.dir = language === "ar") {
        document.dir = "rtl";
        document.querySelector('meta[name="description"]').setAttribute("content", "الحمد لله رب العالمين");
    } else {
        document.dir = "ltr";
        document.querySelector('meta[name="description"]').setAttribute("content", "lorem dfdsf lksdjfsd sjfdsf sddfs");
    }
};


