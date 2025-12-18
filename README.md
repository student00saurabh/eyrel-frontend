# 🛒 Eyrel – E-commerce Frontend

This is the **frontend** of the Eyrel E-commerce application, built using **React + Vite**.  
It provides a fast, scalable, and modern user interface for an online shopping platform.

---

## 🚀 Tech Stack

- **React** (UI Library)
- **Vite** (Build Tool)
- **JavaScript (ES6+)**
- **Redux Toolkit** (State Management)
- **React Router DOM** (Routing)
- **Axios / Fetch API** (API Calls)
- **ESLint** (Code Quality)

---

## 📁 Frontend Folder Structure

```text
src/
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── styles/
│
├── components/
│   ├── common/        # Reusable UI components
│   ├── product/       # Product-related components
│   ├── cart/          # Cart components
│   ├── auth/          # Login / Register components
│   └── admin/         # Admin dashboard components
│
├── pages/
│   ├── Home.jsx
│   ├── ProductDetails.jsx
│   ├── Category.jsx
│   ├── Cart.jsx
│   ├── Wishlist.jsx
│   ├── Orders.jsx
│   ├── Checkout.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   └── Admin.jsx
│
├── layouts/
│   ├── MainLayout.jsx
│   └── AdminLayout.jsx
│
├── services/
│   ├── authAPI.js
│   ├── productAPI.js
│   ├── wishlistAPI.js
│   ├── cartAPI.js
│   └── orderAPI.js
│
├── store/
│   ├── slices/
│   │   ├── authSlice.js
│   │   ├── productSlice.js
│   │   ├── cartSlice.js
│   │   ├── wishlistSlice.js
│   │   └── orderSlice.js
│   └── store.js
│
├── context/
│   └── ThemeContext.jsx
│
├── hooks/
│   ├── useAuth.js
│   ├── useCart.js
│   └── useFetch.js
│
├── router/
│   └── AppRouter.jsx
│
├── utils/
│   ├── localStorage.js
│   └── helpers.js
│
└── main.jsx


---

## ✨ Features

- User Authentication (Login / Register)
- Product Listing & Details
- Category-based Products
- Add to Cart
- Wishlist Management
- Order Placement & History
- Checkout Flow
- Admin Dashboard (Product & Order Management)
- Global State Management using Redux Toolkit
- Responsive and Scalable UI

---

## ⚙️ Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/student00saurabh/eyrel-frontend.git
