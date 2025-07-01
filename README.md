# Pendora E-Commerce Website

Pendora is a full-stack e-commerce application where users can browse products, search items, add them to the cart or wishlist, manage their address, and view detailed product information.

Built with a **React** frontend, **Node.js/Express** backend, **MongoDB** database

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

## Demo Video

[Live Demo](https://pendora-frontend.vercel.app/)

## Features

**Search**

- Instantly search for products by typing keywords in the search bar.
- Live filtering as you type—no need to refresh or click search.

**Product Filtering**

- Category-Based Filtering: Narrow down products by specific categories.
- Sort by Price: Choose between "Low to High" or "High to Low" price sorting.
- Rating Filter: View products based on user ratings.
- Price Range Filter: Select a custom price range using a slider to find matching products.

**Add to Cart**

- Add any product to your shopping cart with a single click.
- View cart details with quantities, total price, and product names.
- Remove products from your cart at any time.

**Add Product to WishList**

- Save your favourite products to a wishlist for later viewing.
- Easily add or remove items from the wishlist.
- Perfect for creating a “save for later” shopping experience.

## API Reference

### **GET /v1/products**<br>

s
List all Product<br>
Sample Response:<br>
`[ {
        "dimensions": {
            "width": "2.82 inches",
            "height": "5.77 inches",
            "depth": "0.32 inch",
            "weight": "6.60 ounces"
        },
        "_id": "6811ca7b85ae42dbb4060d70",
        "name": "iPhone 15 Pro",
        "description": [
            "Latest Apple smartphone with A17 Pro chip",
            "Titanium design",
            "Pro camera system"
        ],
        "brand": "Apple",
        "price": 999,
        "discount": 50,
        "deliveryCharge": true,
        "currency": "USD",
        "in_Stock": true,
        "rating": 4.8,
        "images": [
            "https://cubotlifestyle.com/cdn/shop/files/Untitleddesign_15.jpg?v=1711791060&width=1445",
            "iphone15pro2.jpg"
        ],
        "features": [
            "6.1-inch Super Retina XDR display",
            "5G capable",
            "Face ID"
        ],
        "warranty": "1 year limited",
        "free_Shipping": true,
        "category": {
            "_id": "680e71e4cd9ad19fdf20f765",
            "name": "Electronics",
            "description": "Devices and gadgets including smartphones, laptops, and home appliances",
            "createdAt": "2025-04-27T18:05:24.846Z",
            "updatedAt": "2025-04-27T18:05:24.846Z",
            "__v": 0,
            "images": "https://static.vecteezy.com/system/resources/thumbnails/022/610/083/small/3d-laptop-with-headphone-symbol-on-the-screen-online-listening-to-music-png.png"
        },
        "createdAt": "2025-04-30T07:00:11.645Z",
        "updatedAt": "2025-04-30T07:00:11.645Z",
        "__v": 0
    }]`

### **GET /v1/products/:productId**<br>

Get details for one Product<br>
Sample Response:<br>
` {_id:3489jr34n34,name:Mobile,description:"dkfjdknv"  }`

### **POST /products**<br>

Create a new recipe (protected)<br>
Sample Response:<br>
`{ _id, title, name, ... }`

### **POST /v1/product/search/:producttitle**<br>

Search the Product by Its Product title<br>
Sample Response:<br>
`{ id, name,description,rating }`

## Contact

For bugs or feature requests, please reach out to alok.8kumar21@gmail.com
