var links = document.querySelectorAll(".buy");
var popup = document.querySelector(".modal-choice");
var close = popup.querySelector(".modal-close");
var mainBasket = document.querySelector(".basket");
var namberBaskets = document.querySelector(".namber-baskets");
var c = namberBaskets.textContent;

for (var i = 0; i < links.length; i++) {
links[i].addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  mainBasket.classList.add("main-basket");
  c += 0;
  c++;
  namberBaskets.textContent = c;
});
};
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
evt.preventDefault();
if (popup.classList.contains("modal-show")) {
  popup.classList.remove("modal-show");
}
}
});

var bookmark = document.querySelectorAll(".bookmark");
var mainBookmark = document.querySelector(".bookmark-nav");
var namberBookmarks = document.querySelector(".namber-bookmarks");
var b = namberBookmarks.textContent; 

for (var i = 0; i < bookmark.length; i++) {
bookmark[i].addEventListener("click", function (evt) {
  evt.preventDefault();
  mainBookmark.classList.add("main-bookmark");
  b += 0;
  b++;
  namberBookmarks.textContent = b;
});
};

