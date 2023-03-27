import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { login, logout, onUserStateChange } from "../api/firebase";
import User from "./User";

const Navbar = () => {
  //로그인한 사용자의 상태를 가지고 있어야하므로 상태를 추가해준다.
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  return (
    <header className="fl dex justify-between border-b border-gray-300 p-2">
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
        {/* 로그인한 사용자가 있을때 그 사용자 정보를 보여준다 */}
        {/* 
        사용자가 있다면  user라는 컴포넌트를 만들어서 user라는 prop 안에
        user라는 객체를 전달해줄거임
        */}
        {user && <User user={user} />}
        {/* 로그인한 사용자가 없다면 Login버튼을 보여주고 */}
        {!user && <button onClick={login}>Login</button>}
        {/* 로그인한 사용자가 있다면 LogOut버튼을 보여준다 */}
        {user && <button onClick={logout}>Logout</button>}
      </nav>
    </header>
  );
};

export default Navbar;
