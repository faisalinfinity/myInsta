import React from "react";

const User = ({ img }) => {
  return (
    <div className="flex w-full gap-7">
      <img className="w-10 " src={img} alt="profile-pic" />
      <div>
        <div className="text-white font-bold">Faisal Mujtaba</div>
        <div className="text-gray-400 text-xs ">mj_faisal</div>
      </div>
    </div>
  );
};

export default User;
