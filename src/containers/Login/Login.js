import React from "react";

import "./Login.css"
import LoginForm from "../../components/Login/LoginForm/LoginForm";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200 p-6">
      <div className="Login-card w-full sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-1/3 bg-white rounded shadow px-4 py-10">
        <div className="text-2xl font-semibold text-center pb-4">LOGIN</div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
