import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="p-10 rounded-2xl bg-[#fff] drop-shadow-2xl">
        <form
          onSubmit={submitHandler}
          className="px-10 py-3 flex flex-col items-center justify-center"
        >
          <h1 className="text-2xl">Login</h1>

          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className=" outline-none bg-transparent border-2 border-lime-400  py-3 px-5 mt-8 rounded-2xl  placeholder:text-gray-500 hover:placeholder:text-gray-400"
            type="email"
            placeholder="admin@me.com"
          />

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-lime-400  py-3 px-5 mt-5 rounded-2xl placeholder:text-gray-500 hover:placeholder:text-gray-400"
            type="password"
            placeholder="123"
          />

          <button className=" border-none outline-none border-2 bg-[var(--base-green)] hover:bg-[var(--dark-green)] py-3 px-8 mt-8 rounded-full">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
