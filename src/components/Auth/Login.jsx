import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formHandler = (e) => {
    e.preventDefault();

    console.log(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        onSubmit={(e) => {
          formHandler(e);
        }}
        action=""
        className="flex flex-col w-[40vw] px-10 gap-5 bg-slate-500 py-20 rounded-xl"
      >
        <h4 className="text-center text-4xl mb-10">Login</h4>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="h-16 rounded-3xl text-zinc-900  outline-none border-none px-7 text-xl"
          value={email}
          type="email"
          placeholder="Enter Your Name"
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="h-16 rounded-3xl text-zinc-900  outline-none border-none px-7 text-xl"
          value={password}
          type="password"
          placeholder="Enter Your Email"
        />
        <button className="h-16 text-2xl " type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
