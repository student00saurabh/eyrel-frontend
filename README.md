# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Frontend Folder and files structure

src/
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── styles/
│
├── components/
│   ├── common/         # Reusable buttons, cards…
│   ├── product/        # ProductCard, Filters, etc
│   ├── cart/
│   ├── auth/
│   └── admin/
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
├── services/            # API calls
│   ├── authAPI.js
│   ├── productAPI.js
│   ├── wishlistAPI.js
│   ├── cartAPI.js
│   └── orderAPI.js
│
├── store/               # Redux Toolkit
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