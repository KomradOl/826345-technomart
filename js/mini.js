var writelink=document.querySelector(".call-write-us"),writepopup=document.querySelector(".write-us"),close=writepopup.querySelector(".modal-close");writelink.addEventListener("click",function(e){e.preventDefault(),writepopup.classList.add("modal-show")}),close.addEventListener("click",function(e){e.preventDefault(),writepopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),writepopup.classList.contains("modal-show")&&writepopup.classList.remove("modal-show"))});var maplink=document.querySelector(".map"),mappopup=document.querySelector(".modal-map");close=mappopup.querySelector(".modal-close");maplink.addEventListener("click",function(e){e.preventDefault(),mappopup.classList.add("modal-show")}),close.addEventListener("click",function(e){e.preventDefault(),mappopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),mappopup.classList.contains("modal-show")&&mappopup.classList.remove("modal-show"))});for(var links=document.querySelectorAll(".buy"),popup=document.querySelector(".modal-choice"),mainBasket=(close=popup.querySelector(".modal-close"),document.querySelector(".basket")),namberBaskets=document.querySelector(".namber-baskets"),c=namberBaskets.textContent,i=0;i<links.length;i++)links[i].addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),mainBasket.classList.add("main-basket"),c+=0,c++,namberBaskets.textContent=c});close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-show")&&popup.classList.remove("modal-show"))});var delivery=document.querySelector(".delivery-service"),guarantee=document.querySelector(".guarantee-service"),credit=document.querySelector(".credit-service"),slideDelivery=document.querySelector(".slide-delivery"),slideGuarantee=document.querySelector(".slide-guarantee"),slideCredit=document.querySelector(".slide-credit");guarantee.addEventListener("click",function(e){e.preventDefault(),delivery.inactive||(delivery.classList.remove("active-show"),delivery.classList.add("inactive"),slideDelivery.classList.remove("visible-show")),credit.inactive||(credit.classList.remove("active-show"),credit.classList.add("inactive"),slideCredit.classList.remove("visible-show")),guarantee.classList.add("active-show"),guarantee.classList.remove("inactive"),slideGuarantee.classList.add("visible-show")}),credit.addEventListener("click",function(e){e.preventDefault(),delivery.inactive||(delivery.classList.remove("active-show"),delivery.classList.add("inactive"),slideDelivery.classList.remove("visible-show")),guarantee.inactive||(guarantee.classList.remove("active-show"),guarantee.classList.add("inactive"),slideGuarantee.classList.remove("visible-show")),credit.classList.add("active-show"),credit.classList.remove("inactive"),slideCredit.classList.add("visible-show")}),delivery.addEventListener("click",function(e){e.preventDefault(),guarantee.inactive||(guarantee.classList.remove("active-show"),guarantee.classList.add("inactive"),slideGuarantee.classList.remove("visible-show")),credit.inactive||(credit.classList.remove("active-show"),credit.classList.add("inactive"),slideCredit.classList.remove("visible-show")),delivery.classList.add("active-show"),delivery.classList.remove("inactive"),slideDelivery.classList.add("visible-show")});var first=document.querySelector(".slider-picture-first"),second=document.querySelector(".slider-picture-second"),sliderBack=document.querySelector(".slider-back"),sliderNext=document.querySelector(".slider-next");sliderNext.addEventListener("click",function(e){e.preventDefault(),second.classList.add("visible"),first.classList.remove("visible")}),sliderBack.addEventListener("click",function(e){e.preventDefault(),first.classList.add("visible"),second.classList.remove("visible")});var bookmark=document.querySelectorAll(".bookmark"),mainBookmark=document.querySelector(".bookmark-nav"),namberBookmarks=document.querySelector(".namber-bookmarks"),b=namberBookmarks.textContent;for(i=0;i<bookmark.length;i++)bookmark[i].addEventListener("click",function(e){e.preventDefault(),mainBookmark.classList.add("main-bookmark"),b+=0,b++,namberBookmarks.textContent=b});