import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { loginUser, passwordReset } = UserAuth();
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState(null);

  const onLogin = (e) => {
    e.preventDefault();
    loginUser(emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        //Signed in
        const user = userCredential.user;
        const email = user.email;

        navigate("/");
        console.log(user, email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        let errMsg = errorMessage;
        setErrMessage(errMsg);
        console.log(errorCode, errorMessage);
      });
  };

  const handleResetPassword = () => {
    passwordReset(emailRef.current.value)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div>
      <div className="flex h-screen mx-4 md:mx-auto max-w-screen-md">
        <div className="w-[400px] mx-auto ">
          <h2 className="font-bold text-center text-3xl mt-8 mb-4">Login</h2>

          <form className="flex flex-col" onSubmit={onLogin}>
            <div>
              <label
                htmlFor="email"
                className="block my-2 text-sm font-medium text-gray-700 "
              >
                Email
              </label>
              <input
                type="email"
                className="block w-full rounded-lg shadow-lg text-sm p-2.5 bg-gray-50
                    placeholder-gray-400 border-none outline-none
                     ring-2 ring-gray-300 focus:ring-gray-400 focus:ring-2"
                ref={emailRef}
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block my-2 text-sm font-medium text-gray-700 "
              >
                Password
              </label>
              <input
                type="password"
                className="block w-full rounded-lg shadow-lg text-sm p-2.5 bg-gray-50
                    placeholder-gray-400 border-none outline-none
                     ring-2 ring-gray-300 focus:ring-gray-400 focus:ring-2"
                ref={passwordRef}
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="my-4 p-2 w-full text-white rounded-lg bg-emerald-700 hover:bg-emerald-800 hover:scale-105"
              >
                Login
              </button>
            </div>
          </form>
          {errMessage && (
            <span className="text-center bg-red-400 p-2">
              {" "}
              {errMessage}
              Invalid email or password!
            </span>
          )}

          <h3 className="text-center">
            Create an account?{" "}
            <Link to="/signup">
              <span className="text-emerald-600 hover:text-emerald-700 cursor-pointer ">
                Sign up
              </span>
            </Link>
          </h3>
          <h4 className="text-center" onClick={handleResetPassword}>
            Forgot password?
          </h4>
        </div>
      </div>
      );
    </div>
  );
};

export default Login;
