# 🧠 4A Learn Basic OOP by Building a Shopping Cart
* In this project, I will be building a shopping cart application using JavaScript

## 👨‍🍳 Final Product 👨‍🍳
* You can try out the application I built in this tutorial via this [link]()
* Here is a demo:
   
   <img height="500px" src="./screenshots/demo.gif">

## 📝 Summary Notes 📝


## 🛠️ Project Setup 🛠️

* I have been provided the [HTML](code/index.html) and [CSS](code/styles.css)
* This is what the page looks like:
   <details>

   <img src="screenshots/project-setup.png" width="400px">
   </details>

## 🟥 H2

* I initialise my JavaScript with three variables pointed to the containers:
```js
const cartContainer = document.getElementById("cart-container")
const productsContainer = document.getElementById("products-container")
const dessertCards = document.getElementById("dessert-card-container")
```
* I intialise variable for buttons:
```js
const cartBtn = document.getElementById("cart-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");
```
* I create variables for the total items, subtotal, taxes and total:
```js
const totalNumberOfItems = document.getElementById("total-items");
const cartSubTotal = document.getElementById("subtotal");
const cartTaxes = document.getElementById("taxes");
const cartTotal = document.getElementById("total");
```
* I create a variable for the `#show-hide-cart` element:
```js
const showHideCartSpan = document.getElementById("show-hide-cart");
```

* I create a variable to store whether cart is showing or not, I initialise it to false:
```js
let isCartShowing = false
```

* I intiialise a `products` array with objects with keys: `id`, `name`, `price` and `category`:

   <details>

   ```js
   const products = [
   {
      id: 1,
      name: "Vanilla Cupcakes (6 Pack)",
      price: 12.99,
      category: "Cupcake",
   },
   {
      id: 2,
      name: "French Macaron",
      price: 3.99,
      category: "Macaron",
   },
   {
      id: 3,
      name: "Pumpkin Cupcake",
      price: 3.99,
      category: "Cupcake",
   },
   {
      id: 4,
      name: "Chocolate Cupcake",
      price: 5.99,
      category: "Cupcake",
   },
   {
      id: 5,
      name: "Chocolate Pretzels (4 Pack)",
      price: 10.99,
      category: "Pretzel",
   },
   {
      id: 6,
      name: "Strawberry Ice Cream",
      price: 2.99,
      category: "Ice Cream",
   },
   {
      id: 7,
      name: "Chocolate Macarons (4 Pack)",
      price: 9.99,
      category: "Macaron",
   },
   {
      id: 8,
      name: "Strawberry Pretzel",
      price: 4.99,
      category: "Pretzel",
   },
   {
      id: 9,
      name: "Butter Pecan Ice Cream",
      price: 2.99,
      category: "Ice Cream",
   },
   {
      id: 10,
      name: "Rocky Road Ice Cream",
      price: 2.99,
      category: "Ice Cream",
   },
   {
      id: 11,
      name: "Vanilla Macarons (5 Pack)",
      price: 11.99,
      category: "Macaron",
   },
   {
      id: 12,
      name: "Lemon Cupcakes (4 Pack)",
      price: 12.99,
      category: "Cupcake",
   },

   ];
   ```

   </details>

* I will now use JavaScript to display the products in the HTML. I use a for each loop, and object destructuring for the parameter of the forEach:
```js
products.forEach(
  ({ name, id, price, category }) => {

  }
);
```
* I append a `<div>` element which has a `<h2>` of the `name` of the product to the innerHTML of `dessertCards`:
```js
products.forEach(
   ({ name, id, price, category }) => {
      dessertCards.innerHTML += `
         <div class="dessert-card"><h2>${name}</h2></div>
      `;
   }
);
```

### ⭐ H3 ⭐
