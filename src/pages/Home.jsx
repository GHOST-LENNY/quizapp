import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";
import { UserAuth } from "../contexts/AuthContext"

const Homepage = () => {
  const { user, logoutUser } = UserAuth();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

 if(user !== null) {
  console.log(user.emailVerified);
  console.log(user.uid);
 }

  async function logOut() {
    await logoutUser()
      .then(() => {
        //Sign-out successful.
        navigate("/login");
        console.log("signed out");
      })
      .catch((e) => {
        // An error happened.
        let errorMessage = e.message;

        setError(errorMessage);
        console.log(errorMessage);
      });
  }

  return (
    <>
      <Header></Header>
      <div className="px-4 pt-4 mx-auto max-w-screen-md min-h-screen ">
    {  user &&  <h1 className="text-sm font-semibold text-emerald-500">{user.email}</h1>}
        <h1 className="font-bold text-center mt-4 sm:text-xl md:text-3xl">
          Welcome to Rhema&apos;s General Quiz
        </h1>

        <div className="mt-4 md:mt-8 ">
          <p className="md:text-2xl ">
            You have <span className="font-bold text-red-500">30</span> seconds
            for this quiz. There are 5 questions in total.{" "}
            <br className="hidden md:block" />
            Click on the start button below when you are ready to begin.
          </p>
        </div>

        <Link to="/test" className="flex py-4">
          <button className="w-1/2 mx-auto px-4 py-1 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 hover:scale-105">
            START
          </button>
        </Link>

          <button
            onClick={logOut}
            className="w-1/2 mx-auto px-4 py-1 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 hover:scale-105"
          >
            Log out
          </button>
        

        {error && alert("failed to log out")}
      </div>
    </>
  );
};

export default Homepage;
