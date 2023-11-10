const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="px-4 py-4 bg-black text-white mx-auto max-w-screen-md">
      <small>
        {" "}
        <p className=" text-sm md:text-lg text-center">
        &copy; {currentYear} Made by <a href="mailto:lennyddon@gmail.com">devRema</a>{" "}
          with 💖
        </p>
      </small>
    </footer>
  );
};

export default Footer;
