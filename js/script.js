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


  var link = document.querySelector(".buy");
  var popup = document.querySelector(".modal-choice");
  var close = popup.querySelector(".modal-close");
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
  });
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
