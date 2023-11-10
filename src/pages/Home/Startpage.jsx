import { Link } from "react-router-dom";
import Header from "../../components/Header"

const Startpage = () => {
  return (
    <>
    <Header></Header>
    <div className="px-4 pt-4 mx-auto max-w-screen-md min-h-screen ">
      <h1 className="font-bold text-center mt-4 sm:text-xl md:text-3xl">
        Welcome to Rhema&apos;s General Test
      </h1>

      <div className="mt-4 md:mt-8 ">
        <p className="md:text-2xl ">
          You have <span className="font-bold text-red-500">30</span> seconds
          for this Test. There are 5 questions in total.  <br className="hidden md:block" />
            Click on the start button below when you are ready to begin.
        </p>
      </div>

      <Link to="/test" className="flex py-4">
        <button className="w-1/2 mx-auto px-4 py-1 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 hover:scale-105">
          START
        </button>
      </Link>

     
    </div>
    </>
  );
};

export default Startpage;
 