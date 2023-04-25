// Константы для окна "Товар добавлен в корзину"
const addInBasket = document.querySelectorAll(".button-buy");
const addInBookmark = document.querySelectorAll(".button-reserve");
const addInBasketPopup = document.querySelector(".dialog-add-in-basket");
const addInBasketClose = addInBasketPopup.querySelector(".add-in-basket-close");
const notToBasket = addInBasketPopup.querySelector(".not-to-basket");
const goodsCount = document.querySelector(".goods-count");
const basketText = document.querySelector(".basket")
const bookmarksCount = document.querySelector(".bookmarks-count");
const bookmarksText = document.querySelector(".bookmarks")
// Функция при нажатии клавиши Esc
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (addInBasketPopup.classList.contains("modal-show-grid")) {
      evt.preventDefault();
      addInBasketPopup.classList.add("modal-hide");
      addInBasketPopup.classList.remove("modal-show-grid");
    }
  }
});

// Добавление реакции на добавление в корзину
for(let i=0; i<addInBasket.length; i++){
  addInBasket[i].addEventListener("click",function(evt){
    evt.preventDefault();
    let gk = Number(goodsCount.textContent);
    goodsCount.textContent = gk + 1;
    basketText.classList.add("icons-plus");
    addInBasketPopup.classList.add("modal-show-grid");
    addInBasketPopup.classList.remove("modal-hide");
  });
}
addInBasketClose.addEventListener("click", function(evt){
  evt.preventDefault();
  addInBasketPopup.classList.add("modal-hide");
  addInBasketPopup.classList.remove("modal-show-grid");
});
notToBasket.addEventListener("click", function(evt){
  evt.preventDefault();
  addInBasketPopup.classList.add("modal-hide");
  addInBasketPopup.classList.remove("modal-show-grid");
});
// Добавление реакции на добавление в закладки
for(let i=0; i<addInBookmark.length; i++){
  addInBookmark[i].addEventListener("click",function(evt){
    evt.preventDefault();
    let gk = Number(bookmarksCount.textContent);
    bookmarksCount.textContent = gk + 1;
    bookmarksText.classList.add("icons-plus");
  });
}
