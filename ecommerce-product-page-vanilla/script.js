"use strict";

const itemCounter = document.querySelector("#product__item-amount");
const itemCartDisplay = document.querySelector("#cart__item-count");
const productDisplayImg = document.querySelector("#product__display-image");
const addToCart = document.querySelector(".product__add-to-cart");
const cartIcon = document.querySelector("#cart__open");
const cartItem = document.querySelector(".cart__item");
const cartContents = document.querySelector(".cart__contents");
const cartCheckout = document.querySelector(".cart__checkout");
const cartEmptyMsg = document.querySelector(".cart__empty");
let itemCountBuffer = Number(itemCartDisplay.innerHTML);
let itemCountDisplay = 0;

// Item Add/Remove
document.querySelector(".product__add-items").addEventListener("click", (e) => {
  if (e.target.id === "higher" || e.target.id === "higher-icon") {
    itemCounter.innerHTML = ++itemCountBuffer;
  }

  if (e.target.id === "lower" || e.target.id === "lower-icon") {
    itemCounter.innerHTML = itemCountBuffer > 0 ? --itemCountBuffer : 0;
  }
});

// User adds items to cart
addToCart.addEventListener("click", () => {
  itemCountDisplay = itemCountDisplay + itemCountBuffer;
  if (itemCountDisplay === 0) return;

  if (itemCartDisplay.classList.contains("hidden")) {
    itemCartDisplay.classList.remove("hidden");
    itemCartDisplay.innerHTML = itemCountDisplay;
    updateCartContents(false);
    return;
  }

  itemCartDisplay.innerHTML = itemCountDisplay;
});

// Display the cart when a user clicks on the icon
cartIcon.addEventListener("click", () => {
  document.querySelector(".cart").classList.toggle("hidden");
});

// Handles adding and removing items from the cart display
const updateCartContents = (emptyCart) => {
  emptyCart ? removeItemsFromCart() : displayItemsInCart();
};

// Displays the items in the car when a user adds them
const displayItemsInCart = () => {
  cartItem.innerHTML = `<img src='./images/image-product-1-thumbnail.jpg' alt='' class='cart__product-img' /> <div class='cart__product-info'> <p>Fall Limited Edition Sneakers</p> <p>$125.00 x ${itemCountDisplay} <b>$${
    125 * itemCountDisplay
  }</b></p> </div> <button class='cart__delete-item'> <img src='./images/icon-delete.svg' alt='' /> </button> </div>`;

  cartEmptyMsg.innerHTML = "";
  cartContents.classList.remove("empty");
  cartCheckout.classList.remove("hidden");

  // When a user clicks on the delete icon, remove all items from the cart
  document
    .querySelector(".cart__delete-item")
    .addEventListener("click", () => updateCartContents(true));
  return;
};

// Removes the items from the cart
const removeItemsFromCart = () => {
  cartItem.innerHTML = "";
  cartEmptyMsg.innerHTML = "Your cart is empty.";
  cartContents.classList.add("empty");
  cartCheckout.classList.add("hidden");
  itemCartDisplay.classList.add("hidden");
  itemCountDisplay = 0;
};

const productThumbnailsImages = document.querySelectorAll(
  ".product__display-thumbnail"
);
const productThumbnails = document.querySelector(".product__display-slider");

const clearActive = () => {
  const activeImg = document.getElementsByClassName("active");
  activeImg[0].classList.remove("active");

  productThumbnailsImages.forEach((thumbnail) => {
    thumbnail.classList.remove("active-thumbnail");
  });
};

productThumbnails.addEventListener("click", (e) => {
  if (e.target.classList.contains("product__display-thumbnail-img")) {
    clearActive();
    const photoNumber = e.target.getAttribute("value");
    changeDisplayImage(photoNumber);
    changeThumbnail(e.target);
  }
});

const changeThumbnail = (thumbnail) => {
  thumbnail.classList.add("active");
  thumbnail.parentNode.classList.add("active-thumbnail");
};

const changeDisplayImage = (photoNumber) =>
  productDisplayImg.setAttribute(
    "src",
    `./images/image-product-${photoNumber}.jpg`
  );
