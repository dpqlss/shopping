import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../components/context/AuthContext";

const ProtectedRoute = ({ children, requireAdmin }) => {
  const { user } = useAuthContext();

  //만약에 사용자가 없거나 어드민이 필요로한데 사용자가 isAdmin이 아닌 경우라면
  if (!user || (requireAdmin && !user.isAdmin)) {
    //home으로 돌아가라
    return <Navigate to="/" replace />;
  }

  return children;
  //로그인한 사용자가 있는지 확인
  //그 사용자가 어드민 권한이 있는지 확인
  //requireAdmin이 true인 경우에는 로그인도 되어 있어야 하고, 어드민 권한도 가지고 있어야 함
  //조건에 맞지 않으면 / 상위 경로로 이동
  //조건에 맞는 경우에만 전달된 children을 보여줌
};

export default ProtectedRoute;
