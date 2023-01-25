import React from "react";

const Header = () => {
  return (
    <div className="w-full max-w-3xl p-4 border-b-2 flex justify-between items-center">
      <div>
        <h1 className="text-xl font-medium">Apple ID</h1>
      </div>
      <div className="flex gap-4 font-light">
        <p className="text-xs text-slate-400">Sign In</p>
        <p className="text-xs text-slate-800 hover:text-blue-500">
          Create Your Apple ID
        </p>
        <p className="text-xs text-slate-800 hover:text-blue-500">FAQ</p>
      </div>
    </div>
  );
};

export default Header;
