import React, { use, useState } from "react";
import { setLocalStorage } from "../../utils/localStorage";

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
    // window.location.reload();
  };

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold">
        Hello <br />
        <span className="text-3xl font-semibold">
          {props.data ? props.data.firstname : "Admin"}
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-orange-400 hover:bg-orange-500 text-lg px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
