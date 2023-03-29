import React, { createContext, useContext, useEffect, useState } from "react";
import { login, logout, onUserStateChange } from "../../api/firebase";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  //AuthContextProvider가 한번 생성이 되면 useEffect 호출될것이고 상태변경되는것을 알고있음(?)
  //setUser를 통해서 provider에 있는 user를 설정해줄거임
  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  //어떤 데이터를 가지고 있을건지 결정해줌
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  //해당 부분이 필요한 곳에서는 하나의 함수만 이용하여 필요한 데이터를 가져가라
  return useContext(AuthContext);
}
