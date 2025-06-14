# Pendora E-Commerce Website

A full-stack recipe management app where you can search, add to card, add to wishlist, edit address, and view detailed Products.  
Built with a React frontend, Express/Node backend, MongoDB database, and JWT-based authentication.

---

## Demo Link

[Live Demo](https://pendora-frontend.vercel.app/)

---

## Quick Start

```
git clone https://github.com/alok-kumar21/Pendora-frontend.git
cd <your-repo>
npm install
npm run dev

```

## Technologies

- React JS
- React Router
- Node.js
- Express
- MongoDB
- Context API
-

## Demo Video

Watch a walkthrough (5–7 minutes) of all major features of this app:
[Loom Video Link]()

## Features

**Search**

- Displays a list of all recipes
- Search recipes by title in real time

**Product Filtering**

- Filter by category Price Low to High and Hight to Low
- Filtering by Ration
- Price Range Filtering

**Add to Cart**

- We Can add the Product in the cart
- and remove the Product from Cart

**Add Product to WishList**

- we can add the Product in wishlist page.
- we can also remove from wishlist

## API Reference

### **GET /v1/products**<br>

List all Product<br>
Sample Response:<br>
`[{ _id, name, description, ... }, …]`

### **GET /v1/products/:productId**<br>

Get details for one Product<br>
Sample Response:<br>
`{ _id, name, discription, images}`

### **POST /products**<br>

Create a new recipe (protected)<br>
Sample Response:<br>
`{ _id, title, name, ... }`

### **POST /v1/product/search/:producttitle**<br>

Search the Product by It's Product title<br>
Sample Response:<br>
`{ id, name,description,rating }`

## Contact

For bugs or feature requests, please reach out to alok.8kumar21@gmail.com
