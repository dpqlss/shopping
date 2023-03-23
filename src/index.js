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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, //최상의 경로에서는 우리의 어플리케이션을 보여줄것
    errorElement: <NotFound />, //존재하지 않는 경로에 대해서는 NotFound를 보여줄거임
    //App이라는 부모 컴포넌트 안에 아울렛을 사용하여 children을 보여줄거임
    children: [
      // children에서도 최상위 경로는 Home!
      { index: true, path: "/", element: <Home /> },
      // products 경로에는 AllProducts를 보여줄거임
      { path: "/products", element: <AllProducts /> },
      { path: "/products/new", element: <NewProduct /> },
      //products에 id 경로가 포함된 경우에는 ProductDtatil로 이동하도록 만들어줌
      { path: "/products/:id", element: <ProductDetail /> },
      { path: "/cart", element: <MyCart /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
