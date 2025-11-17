import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = () => {};

  return (
    <form action="" className="min-h-[80vh] flex items-center ">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state == "Sign up" ? "Create Accound" : "Login"}
        </p>
        <p className="">
          please {state == "Sign up" ? "sign up" : "log in"} to book an
          appointment
        </p>
        {state == "Sign up" && (
          <div className="w-full ">
            <p>Full Name</p>
            <input
              className="border border-zinx-300 rounded w-full p-2 mt-1"
              type="text"
              placeholder="name"
              onChange={(e) => setName(email.target.value)}
              value={name}
            />
          </div>
        )}

        <div className="w-full ">
          <p>Email</p>
          <input
            className="border border-zinx-300 rounded w-full p-2 mt-1"
            type="email"
            placeholder="abc@email.com"
            onChange={(e) => setEmail(email.target.value)}
            value={email}
          />
        </div>
        <div className="w-full ">
          <p>password</p>
          <input
            className="border border-zinx-300 rounded w-full p-2 mt-1"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(email.target.value)}
            value={password}
          />
        </div>
        <button className="bg-primary text-white w-full py-2 rounded-md text-base">
          {state == "Sign up" ? "Create Accound" : "Login"}
        </button>
        {state == "Sign up" ? (
          <p>
            Alredy have an Account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-primary cursor-pointer underline"
            >
              Login here
            </span>{" "}
          </p>
        ) : (
          <p>
            Create an new account ?{" "}
            <span
              onClick={() => setState("Sign up")}
              className="text-primary cursor-pointer underline"
            >
              Click here
            </span>{" "}
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
