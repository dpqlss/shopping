import React from "react";

const User = ({ user: { photoURL, displayName } }) => {
  return (
    // shrink란? 화면의 좌우가 줄어들면 이미지가 눌러지는데
    //줄어들지말라고 shrink를 사용해줌
    <div className="flex items-center shrink-0">
      <img
        className="w-10 h-10 rounded-full mr-2"
        src={photoURL}
        alt={displayName}
      />
      <span className="hidden md:block">{displayName}</span>
    </div>
  );
};

export default User;
