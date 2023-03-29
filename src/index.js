import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./page/Home";
import AllProducts from "./page/AllProducts";
import ProductDetail from "./page/ProductDetail";
import NewProduct from "./page/NewProduct";
import MyCart from "./page/MyCart";
import NotFound from "./page/NotFound";
import ProtectedRoute from "./page/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/products", element: <AllProducts /> },
      {
        path: "/products/new",
        element: (
          <ProtectedRoute requireAdmi>
            <NewProduct />
          </ProtectedRoute>
        ),
      },
      { path: "/products/:id", ement: <ProductDetail /> },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <MyCart />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
