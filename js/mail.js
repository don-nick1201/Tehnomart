// Константы для объекта "Написать письмо"
const mailLink = document.querySelector(".send-mail");
const mailPopup = document.querySelector(".modal-mail");
const mailClose = mailPopup.querySelector(".mail-close");
const mailForm = mailPopup.querySelector(".form-mail");
const userName = mailPopup.querySelector(".user-name");
const userMail = mailPopup.querySelector(".user-mail");
const mailText = mailPopup.querySelector(".mail-value-text");
// Константы для окна с картой
const showMap = document.querySelector(".office-map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".map-close");

// Переменные для объекта "Написать письмо"
let isStorageSupport = true;
let storageName = "";
let storageMail = "";

// Функции для объекта "Написать письмо"
try {
  storageName = localStorage.getItem("userName");
  storageMail = localStorage.getItem("userMail");
} catch (err) {
  isStorageSupport = false;
}

mailLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  if(storageName){
    userName.value = storageName;
    userMail.focus();
  }
  if(storageMail){
    userMail.value = storageMail;
    mailText.focus();
  }
  mailPopup.classList.add("modal-show");
  mailPopup.classList.remove("modal-hide");
  userName.focus();
});
mailClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mailPopup.classList.add("modal-hide");
  mailPopup.classList.remove("modal-show");
});
// Функция нажатия кнопки "отправить письмо"
mailForm.addEventListener("submit", function (evt) {
  if (!userMail.value || !mailText.value) {
    evt.preventDefault();
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem("userMail", userMail.value);
    }
  }
  if (userName.value){
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
    }
  }
});
// Функция при нажатии клавиши Esc
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mailPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mailPopup.classList.add("modal-hide");
      mailPopup.classList.remove("modal-show");
    }
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.add("modal-hide");
      mapPopup.classList.remove("modal-show");
    }
  }
});
// Функция при нажатии на карту
showMap.addEventListener("click", function(evt){
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
  mapPopup.classList.remove("modal-hide");
});
// Добавление реакции на нажатие крестика на карте
mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-hide");
  mapPopup.classList.remove("modal-show");
});
