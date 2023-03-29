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
      // children에서도 최상위 경로는 Home!
      { index: true, path: "/", element: <Home /> },
      { path: "/products", element: <AllProducts /> },
      {
        path: "/products/new",
        element: (
          // NewProduct 한단계 감싸는 ProtectedRoute 컴포넌트에서 requireAdmi이 true야?
          // 그러면 로그인한 사용자가 있고 어드민인 사용자가 있다면 NewProduct으로 연결해줄것이고
          // 여기 조건에 맞지 않는다면 home으로 리다렉팅 시켜줘
          <ProtectedRoute requireAdmi>
            <NewProduct />
          </ProtectedRoute>
        ),
      },
      { path: "/products/:id", ement: <ProductDetail /> },
      //ProtetedRoute 라는 한단계 감싸는 컴포넌트 만들어줌
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
