const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// Инициализация i18next
i18next.init({
  lng: "en",
  fallbackLng: "en",
  debug: false,
  resources: {
    en: {
      translation: {
        heroDescription:
          "Cloud budget management for everyone. Only €69.95 a Month After a 7 Day Trial of Up to €4.99",
        signUp: "Sign Up",
        owerwue: "Overview"


      },
    },
    ru: {
      translation: {
        heroDescription:
          "Управление облачным бюджетом для всех. Всего 69,95 евро в месяц после 7 Дневная пробная версия до 4,99 евро",
        signUp: "Регистрация",
        owerwue: "Обзор"
      },
    },
  },
});

// Пример использования i18next для локализации текста
document.querySelector(".hero__description").textContent =
  i18next.t("heroDescription");
document.querySelector(".signup__btn").textContent = i18next.t("signUp");
document.querySelector(".overviuen__t").textContent = i18next.t("owerwue");

function changeLanguage(event) {
  let currentLanguage = event.target.value;

  i18next.changeLanguage(currentLanguage, (err, t) => {
    document.querySelector(".hero__description").textContent =
      t("heroDescription");
    document.querySelector(".signup__btn").textContent = t("signUp");
    document.querySelector(".overviuen__t").textContent = t("owerwue");

  });
}
