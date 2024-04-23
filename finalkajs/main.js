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
        owerwue: "Overview",
        cintact: "Contact",
        teachno: "Technology",
        featu: "Features",
        cloid: "Easy to Use Cloud Budget Management Software",
        soft: " Our software is made so you can access and manage your budget  and expenses online at any time from any device. It provides detailed income and expense reports with graphs so you can easilly see your spending patterns and budget at a glance. Read below to find out more.",
        featus: "Features",
        all: "Supports All Currencies and Cards",
        popular: "We support all popular currencies and is fully customizable to add",
        all2: "Manage your expenses on the go",
        popular2: "You can access your account from anywhere in the world on any device",
        all3: "Cloud Budget Management Software",
        popular3: "Our software is made so you can access and manage your budget",
        all4: "Cloud Storage",
        popular4: " Access your account from anywhere in the world on any device",
        all5: "Secure",
        popular5: "All your information is stored on secure cloud servers",
        all6: "PDF Download",
        popular6: "Download any of your reports in PDF format",
        all7: "CSV Download",
        popular7: "All your information is stored on secure cloud servers",
        stay: "Stay focused on saving money",
        mane: " It is important to stay focused on saving money in any way you can. We help you monitor your spending habits so you can easily  spot and cut any unnecessary expenses. Simply join today to get started!",
        cont: "Contact",
        below: "Questions or concerns? Just fill out the form below and our  support team will get back to you within 24 hours",
        first: "First Name",
        last: "Last Name",
        phone: "Phone Number",
        select: "Select Service",


      },
    },
    ru: {
      translation: {
        heroDescription:
          "Управление облачным бюджетом для всех. Всего 69,95 евро в месяц после 7 Дневная пробная версия до 4,99 евро",
        signUp: "Регистрация",
        owerwue: "Обзор",
        cintact: "Контакт",
        teachno: "Технологии",
        featu: "Функции",
        cloid: "Легкое использование облачного программного обеспечения управления бюджетом",
        soft: " Наше программное обеспечение сделано так, чтобы вы можете получить доступ и управлять бюджетом и расходами онлайн в любое время с любого устройства. Оно предоставляет подробные отчеты о доходах и расходах с графиками, поэтому вы можете легко",
        featus: "Функции",
        all: "Поддерживает все валюты и карты",
        popular: "Мы поддерживаем все популярные валюты и полностью настраиваем, чтобы добавить",
        all2: "Управляйте расходами в любое время",
        popular2: "Вы можете получить доступ к счету из любой точки мира на любом устройстве",
        all3: "Облачное программное обеспечение управления бюджетом",
        popular3: "Наше программное обеспечение сделано так, чтобы вы можете получить доступ и управлять бюджетом",
        all4: "Облачное хранилище",
        popular4: " Вы можете получить доступ к счету из любой точки мира на любом устройстве",
        all5: "Безопасность",
        popular5: "Все ваши данные хранятся на безопасных облачных серверах",
        all6: "Скачать PDF",
        popular6: "Скачать любой отчет в формате PDF",
        all7: "Скачать CSV",
        popular7: "Все ваши данные хранятся на безопасных облачных серверах",
        stay: "Оставайтесь в фокусе на сохранении денег",
        mane: " Это важно, чтобы оставаться в фокусе на сохранении денег в любом способе. Мы помогаем вам следить за своими расходами, чтобы легко найти и сократить любые ненужные расходы. Просто присоединяйтесь сегодня, чтобы начать",
        cont: "Контакт",
        below: "Вопросы или вопросы? Просто заполните форму ниже и наша команда поддержки вернется к вам в течение 24 часов",
        first: "Имя",
        last: "Фамилия",
        phone: "Номер телефона",
        select: "Выберите услугу",





      },
    },
  },
});

// Пример использования i18next для локализации текста
document.querySelector(".hero__description").textContent =
  i18next.t("heroDescription");
document.querySelector(".signup__btn").textContent = i18next.t("signUp");
document.querySelector(".overviuen__t").textContent = i18next.t("owerwue");
document.querySelector(".contact__t").textContent = i18next.t("cintact");
document.querySelector(".teach__t").textContent = i18next.t("teachno");
document.querySelector(".fea__t").textContent = i18next.t("featu");
document.querySelector(".cloid__t").textContent = i18next.t("cloid");
document.querySelector(".soft__t").textContent = i18next.t("soft");
document.querySelector(".featus__t").textContent = i18next.t("featus");
document.querySelector(".all__t").textContent = i18next.t("all");
document.querySelector(".popular__t").textContent = i18next.t("popular");
document.querySelector(".all2__t").textContent = i18next.t("all2");
document.querySelector(".popular2__t").textContent = i18next.t("popular2");
document.querySelector(".all3__t").textContent = i18next.t("all3");
document.querySelector(".popular3__t").textContent = i18next.t("popular3");
document.querySelector(".popular4__t").textContent = i18next.t("popular4");
document.querySelector(".all4__t").textContent = i18next.t("all4");
document.querySelector(".popular5__t").textContent = i18next.t("popular5");
document.querySelector(".all5__t").textContent = i18next.t("all5");
document.querySelector(".all6__t").textContent = i18next.t("all6");
document.querySelector(".popular6__t").textContent = i18next.t("popular6");
document.querySelector(".all7__t").textContent = i18next.t("all7");
document.querySelector(".popular7__t").textContent = i18next.t("popular7");
document.querySelector(".stay__t").textContent = i18next.t("stay");
document.querySelector(".mane__t").textContent = i18next.t("mane");
document.querySelector(".cont__t").textContent = i18next.t("cont");
document.querySelector("below__t").textContent = i18next.t("below");
document.querySelector(".first__t").textContent = i18next.t("first");
document.querySelector(".last__t").textContent = i18next.t("last");
document.querySelector(".phone__t").textContent = i18next.t("phone");
document.querySelector(".select__t").textContent = i18next.t("select");




function changeLanguage(event) {
  let currentLanguage = event.target.value;

  i18next.changeLanguage(currentLanguage, (err, t) => {
    document.querySelector(".hero__description").textContent =
      t("heroDescription");
    document.querySelector(".signup__btn").textContent = t("signUp");
    document.querySelector(".overviuen__t").textContent = t("owerwue");
    document.querySelector(".contact__t").textContent = t("cintact");
    document.querySelector(".teach__t").textContent = t("teachno");
    document.querySelector(".fea__t").textContent = t("featu");
    document.querySelector(".cloid__t").textContent = t("cloid");
    document.querySelector(".soft__t").textContent = t("soft");
    document.querySelector(".featus__t").textContent = t("featus");
    document.querySelector(".all__t").textContent = t("all");
    document.querySelector(".popular__t").textContent = t("popular");
    document.querySelector(".all2__t").textContent = t("all2");
    document.querySelector(".popular2__t").textContent = t("popular2");
    document.querySelector(".all3__t").textContent = t("all3");
    document.querySelector(".popular3__t").textContent = t("popular3");
    document.querySelector(".popular4__t").textContent = t("popular4");
    document.querySelector(".all4__t").textContent = t("all4");
    document.querySelector(".popular5__t").textContent = t("popular5");
    document.querySelector(".all5__t").textContent = t("all5");
    document.querySelector(".all6__t").textContent = t("all6");
    document.querySelector(".popular6__t").textContent = t("popular6");
    document.querySelector(".all7__t").textContent = t("all7");
    document.querySelector(".popular7__t").textContent = t("popular7");
    document.querySelector(".stay__t").textContent = t("stay");
    document.querySelector(".mane__t").textContent = t("mane");
    document.querySelector(".cont__t").textContent = t("cont");
    document.querySelector("below__t").textContent = t("below");
    document.querySelector(".first__t").textContent = t("first");
    document.querySelector(".last__t").textContent = t("last");
    document.querySelector(".phone__t").textContent = t("phone");
    document.querySelector(".select__t").textContent = t("select");



  });
}
