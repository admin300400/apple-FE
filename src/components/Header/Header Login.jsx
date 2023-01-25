import React from "react";

const HeaderLogin = ({ email }) => {
  return (
    <div className="w-full max-w-3xl p-4 border-b-2 flex justify-between items-center bg-transparent">
      <p className="text-xs text-slate-800 hover:text-blue-500">{email}</p>
    </div>
  );
};

export default HeaderLogin;
