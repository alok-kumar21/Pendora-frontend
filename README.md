# Recipe Organizer

A full-stack recipe management app where you can browse, search, add, edit, and view detailed recipes.  
Built with a React frontend, Express/Node backend, MongoDB database, and JWT-based authentication.

---

## Demo Link

[Live Demo](https://my-recipe-organizer.com)

---

## Login

> **Guest**  
> Username: `guest_user`  
> Password: `guest_pass`

---

## Quick Start

```
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
npm install
npm run dev      # or `npm start` / `yarn dev`
```

## Technologies

- React JS
- React Router
- Node.js
- Express
- MongoDB
- JWT

## Demo Video

Watch a walkthrough (5–7 minutes) of all major features of this app:
[Loom Video Link]()

## Features

**Home**

- Displays a list of all recipes
- Search recipes by title in real time

**Recipe Listing**

- Paginated recipe list
- “Add New Recipe” button opens a form

**Recipe Details**

- View full recipe information (ingredients, steps, images)
- “Edit Recipe” to update title, ingredients, steps

**Authentication**

- User signup and login with JWT
- Protected routes for adding/editing recipes

## API Reference

### **GET /api/recipes**<br>

List all recipes<br>
Sample Response:<br>
`[{ _id, title, summary, ... }, …]`

### **GET /api/recipes/:id**<br>

Get details for one recipe<br>
Sample Response:<br>
`{ _id, title, ingredients, steps, ... }`

### **POST /api/recipes**<br>

Create a new recipe (protected)<br>
Sample Response:<br>
`{ _id, title, summary, ... }`

### **POST /api/auth/signup**<br>

Register a new user<br>
Sample Response:<br>
`{ userId, token }`

## Contact

For bugs or feature requests, please reach out to akanksha.xxx@gmail.com
