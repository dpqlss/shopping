import React from "react";

const PriceCard = ({ text, price }) => {
  return (
    <div className="p-8 mx-2 text-center bg-gray-50 rounded-2xl tex-lg md:text-xl">
      <p>{text}</p>
      <p className="text-xl font-bold text-brand md:text-2xl">₩{price}</p>
    </div>
  );
};

export default PriceCard;
