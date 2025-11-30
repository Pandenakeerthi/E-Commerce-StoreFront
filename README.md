📦 E-Commerce Storefront + Checkout Flow

A fully responsive E-Commerce frontend application built using React.js.
This project covers the complete flow of an online store — browsing products, viewing details, cart management, wishlist, coupons, and checkout.

🚀 Features
🛍️ Storefront

Product Listing Page (PLP)

Filters (category, price, ratings)

Search bar

Categories navigation

📝 Product Details Page (PDP)

Image gallery

Price, description, reviews

Add to Cart / Wishlist

🛒 Cart & Wishlist

Add / Remove items

Quantity updates

Coupon code (10% off)

Auto price calculation

Save items for later

💳 Checkout

Step 1: Address details

Step 2: Mock payment

Order confirmation page

🧱 Tech Stack

React.js

React Router

Context API

CSS3 / Flexbox / Grid

LocalStorage (persist state)

📁 Folder Structure
src/
│── components/
│     ├── Navbar.jsx
│     ├── ProductCard.jsx
│     └── Footer.jsx
│
│── pages/
│     ├── Home.jsx
│     ├── ProductDetails.jsx
│     ├── Cart.jsx
│     ├── Wishlist.jsx
│     └── Checkout.jsx
│
│── context/
│     └── StoreContext.jsx
│
│── data/
│     └── products.js
│
│── App.jsx
│── index.js
│── App.css
└── index.css

▶️ Installation
git clone https://github.com/your-username/ecommerce-storefront.git
cd ecommerce-storefront
npm install
npm start

🌐 Deployment
Vercel

Push code to GitHub

Go to vercel.com → New Project

Import GitHub repo

Deploy

Netlify

Run npm run build

Upload build/ folder to Netlify
