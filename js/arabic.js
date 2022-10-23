import translations from "./translations.js";

const langSelAr = document.getElementById('languageSelectorAr');
langSelAr.addEventListener('click', () => {
  document.documentElement.lang = "ar";
  setLanguage("ar");
  localStorage.setItem("lang", document.documentElement.lang);
});

const langSelEn = document.getElementById('languageSelectorEn');
langSelEn.addEventListener('click', () => {
  document.documentElement.lang = "en";
  setLanguage("en");
  localStorage.setItem("lang", document.documentElement.lang);
});

document.addEventListener('DOMContentLoaded', () => {
  let language = localStorage.getItem("lang");
  setLanguage(language);
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-translation]");
  elements.forEach((elements) => {
    let translationKey = elements.getAttribute("data-translation")
    elements.textContent = translations[language][translationKey];
  });

  if (document.dir = language === "ar") {
    document.dir = "rtl";
    document.documentElement.lang = "ar";
    document.querySelector('meta[name="description"]').setAttribute("content", "الإدارة العامة لطب الأسنان، مديرية الشئون الصحية بالإسكندرية، وزارة الصحة و السكان، جمهورية مصر العربية.");
    document.getElementById('styleSheetFile').href = '../css/main-Ar.css';
    document.getElementById('bootstrapCssFile').href = '../css/bootstrap.rtl.min.css';
    langSelAr.parentElement.style.display = "none";
    langSelEn.parentElement.style.display = "flex";
  } else {
    document.dir = "ltr";
    document.documentElement.lang = "en";
    document.querySelector('meta[name="description"]').setAttribute("content", "Public Administration of Dental Health, Alexandria Health Affairs Directorate, Egyptian Ministry of Health & Population.");
    document.getElementById('styleSheetFile').href = '../css/main.css';
    document.getElementById('bootstrapCssFile').href = '../css/bootstrap.min.css';
    langSelEn.parentElement.style.display = "none";
    langSelAr.parentElement.style.display = "flex";
  }
};

