import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { login } from "../api/firebase";

const Navbar = () => {
  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      {/* 
      text에 brand color로 지정해줄건데 해당 brand color는
      tailwind.config 파일에서 객체안에 설정이 가능함
      */}
      <Link to="/" className="flex items-center text-4xl text-brand">
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        <Link to="/products/new" className="text-2xl">
          <BsFillPencilFill />
        </Link>
        <button onClick={login}>Login</button>
      </nav>
    </header>
  );
};

export default Navbar;
