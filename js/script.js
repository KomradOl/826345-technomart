  var writelink = document.querySelector(".call-write-us");
  var writepopup = document.querySelector(".write-us");
  var close = writepopup.querySelector(".modal-close");
   writelink.addEventListener("click", function (evt) {
    evt.preventDefault();
    writepopup.classList.add("modal-show");
  });
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    writepopup.classList.remove("modal-show");
  });
  window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
  evt.preventDefault();
  if (writepopup.classList.contains("modal-show")) {
    writepopup.classList.remove("modal-show");
  }
  }
  });
  

  var maplink = document.querySelector(".map");
  var mappopup = document.querySelector(".modal-map");
  var close = mappopup.querySelector(".modal-close");
  maplink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mappopup.classList.add("modal-show");
  });
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    mappopup.classList.remove("modal-show");
  });
  window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
  evt.preventDefault();
  if (mappopup.classList.contains("modal-show")) {
    mappopup.classList.remove("modal-show");
  }
  }
  });


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

  var delivery = document.querySelector(".delivery-service");
  var guarantee = document.querySelector(".guarantee-service");
  var credit = document.querySelector(".credit-service");
  var slideDelivery = document.querySelector(".slide-delivery");
  var slideGuarantee = document.querySelector(".slide-guarantee");
  var slideCredit = document.querySelector(".slide-credit");

  guarantee.addEventListener("click", function (evt) {
    evt.preventDefault();
  if (!delivery.inactive) {
    delivery.classList.remove("active-show");
    delivery.classList.add("inactive");
    slideDelivery.classList.remove("visible-show");
  };
  if(!credit.inactive) {
    credit.classList.remove("active-show");
    credit.classList.add("inactive");
    slideCredit.classList.remove("visible-show");
  };

    guarantee.classList.add("active-show");
    guarantee.classList.remove("inactive"); 
    slideGuarantee.classList.add("visible-show");
  });

  credit.addEventListener("click", function (evt) {
    evt.preventDefault();
  if (!delivery.inactive) {
    delivery.classList.remove("active-show");
    delivery.classList.add("inactive");
    slideDelivery.classList.remove("visible-show");
  };
  if(!guarantee.inactive) {
    guarantee.classList.remove("active-show");
    guarantee.classList.add("inactive");
    slideGuarantee.classList.remove("visible-show");
  };

    credit.classList.add("active-show");
    credit.classList.remove("inactive"); 
    slideCredit.classList.add("visible-show");
  });

  delivery.addEventListener("click", function (evt) {
    evt.preventDefault();
  if (!guarantee.inactive) {
    guarantee.classList.remove("active-show");
    guarantee.classList.add("inactive");
    slideGuarantee.classList.remove("visible-show");
  };
  if(!credit.inactive) {
    credit.classList.remove("active-show");
    credit.classList.add("inactive");
    slideCredit.classList.remove("visible-show");
  };

    delivery.classList.add("active-show");
    delivery.classList.remove("inactive"); 
    slideDelivery.classList.add("visible-show");
  });

  var first = document.querySelector(".slider-picture-first");
  var second = document.querySelector(".slider-picture-second");
  var sliderBack = document.querySelector(".slider-back");
  var sliderNext = document.querySelector(".slider-next");
    sliderNext.addEventListener("click", function (evt) {
    evt.preventDefault();
    second.classList.add("visible");
    first.classList.remove("visible");
  });
    sliderBack.addEventListener("click", function (evt) {
    evt.preventDefault();
    first.classList.add("visible");
    second.classList.remove("visible");
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
