import React from "react";

const User = ({img}) => {
  return (
    <div className="flex">
      <div className="mr-4">
        <img className="w-10 h-10" src={img} alt="profile-pic" />
      </div>
      <div>
        <div className="text-white font-bold">Sarim Khan</div>
        <div className="text-gray-400 text-xs ">sarimkhan_208</div>
      </div>
    </div>
  );
};

export default User;
