"use strict";

const searchIcon = document.querySelector(".search-icon");
const input = document.querySelector(".search-input");
const closemodal = document.querySelector(".close-icon");
const modal = document.querySelector(".modal");
const openBasket = document.querySelector(".open-basket");
const closeBasket = document.querySelector(".close-basket");
const basket = document.querySelector(".basket");
const openMenuMobile = document.querySelector(".open-menu-mobile");
const closeMobileMenu = document.querySelector(".close-menu-mobile");
const menuMobile = document.querySelector(".menu-mobile");

let toggleInout = false;
let toggleModal = false;

openMenuMobile.addEventListener("click", function () {
  menuMobile.style.transform = "translateX(0)";
  basket.classList.remove("basket-open");
});
closeMobileMenu.addEventListener("click", function () {
  menuMobile.style.transform = " translateX(250px)";
});
openBasket.addEventListener("click", function () {
  basket.classList.add("basket-open");
  menuMobile.style.transform = " translateX(250px)";
});
closeBasket.addEventListener("click", function () {
  basket.classList.remove("basket-open");
});

searchIcon.addEventListener("click", function () {
  toggleModal = true;
  modal.classList.add("modal-active");
});

closemodal.addEventListener("click", function () {
  toggleModal = false;
  modal.classList.remove("modal-active");
});
