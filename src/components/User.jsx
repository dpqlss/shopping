import React from "react";

const User = ({ user: { photoURL, displayName } }) => {
  return (
    <div className="flex items-center">
      <img
        className="w-10 h-10 rounded-full mr-2"
        src={photoURL}
        alt={displayName}
      />
      {/*
      반응형도 생각했을 때
      displayName은 항상 숨어져 있어줘
      하지만 md 사이즈부터는 block 요소로 나타나도 돼
      */}
      <span className="hidden md:block">{displayName}</span>
    </div>
  );
};

export default User;
