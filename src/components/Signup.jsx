import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext"; 

const Signup = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const {createUser} = UserAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    setError(null);
    setErrorMessage(null);
    setLoading(true);
    await createUser(
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        //Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
      const errorMessage = error.message;
      let errMessage = errorMessage
        setErrorMessage(errMessage);
        console.log(errorCode, errorMessage );
        console.error(error)
      });

      setLoading(false);
  };

  return (
    <div className="flex h-screen mx-4 md:mx-auto max-w-screen-md">
      <div className="w-[400px] mx-auto ">
        <h2 className="font-bold text-center text-3xl mt-8 mb-4">Sign Up</h2>

        <form className="flex flex-col" onSubmit={onSubmit}>
          <div>
            {errorMessage && <p className="bg-red-400 text-center p-2"> {errorMessage} {error} </p>}
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

          <div>
            <label
              htmlFor="passwordConfirmation"
              className="block my-2 text-sm font-medium text-gray-700 "
            >
              Password Confirmation
            </label>
            <input
              type="password"
              className="block w-full rounded-lg shadow-lg text-sm p-2.5 bg-gray-50
              placeholder-gray-400 border-none outline-none
               ring-2 ring-gray-300 focus:ring-gray-400 focus:ring-2"
              ref={passwordConfirmRef}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="my-4 p-2 w-full text-white rounded-lg bg-emerald-700 hover:bg-emerald-800 hover:scale-105"
            >
              Sign Up
            </button>
          </div>
        </form>

        <h3 className="text-center">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-emerald-600 hover:text-emerald-700 cursor-pointer ">
              Log in
            </span>
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Signup;
