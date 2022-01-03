"use strict";

const itemCounter = document.querySelector("#product__item-amount");
const itemCartDisplay = document.querySelector("#cart__item-count");
const addToCart = document.querySelector(".product__add-to-cart");
const cartIcon = document.querySelector("#cart__open");
const cartContents = document.querySelector(".cart__contents");
let itemCountBuffer = Number(itemCartDisplay.innerHTML);
let itemCountDisplay = 0;

const cartItem =
  // Item Add/Remove
  document
    .querySelector(".product__add-items")
    .addEventListener("click", (e) => {
      if (e.target.id === "higher" || e.target.id === "higher-icon") {
        itemCounter.innerHTML = ++itemCountBuffer;
      }

      if (e.target.id === "lower" || e.target.id === "lower-icon") {
        itemCounter.innerHTML = itemCountBuffer > 0 ? --itemCountBuffer : 0;
      }
    });

addToCart.addEventListener("click", () => {
  itemCountDisplay = itemCountDisplay + itemCountBuffer;
  if (itemCountDisplay === 0) return;

  if (itemCartDisplay.classList.contains("hidden")) {
    itemCartDisplay.classList.remove("hidden");
    itemCartDisplay.innerHTML = itemCountDisplay;
    updateCartContents();
    return;
  }
  itemCartDisplay.innerHTML = itemCountDisplay;
  updateCartContents();
});

cartIcon.addEventListener("click", () => {
  document.querySelector(".cart").classList.toggle("hidden");
});

const updateCartContents = () => {
  cartContents.insertAdjacentHTML(
    "afterbegin",
    "<img src='./images/image-product-1-thumbnail.jpg' alt='' class='cart__product-img' /> <div class='cart__product-info'> <p>Product title</p> <p>Placeholder Value $XXX</p> <button class='cart__delete-item'> <img src='./images/icon-delete.svg' alt='' /> </button> </div> </div><button class='cart__checkout'>Checkout</button>"
  );

  document.querySelector(".cart__empty").remove();
};
