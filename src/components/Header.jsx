import { useContext } from "react";
import { NavContext } from "../contexts/NavContext";
import { HamburgerContext } from "../contexts/HamburgerContext";
import SE from "../assets/se.png";

const Header = () => {
  const { activeLinkId } = useContext(NavContext);
  const { toggleHamburger, setToggleHamburger } = useContext(HamburgerContext);

  const navLinks = ["Home", "About", "Project", "Contact"];

  const handleToggleHamburger = () => {
    setToggleHamburger(true);
  };

  const handleClickLogo = () => {
    document
      .getElementById("homeSection")
      .scrollIntoView({ behavior: "smooth" });
  };

  const renderNavLink = (nav) => {
    const scrollToId = `${nav.toLowerCase()}Section`;

    const handleClickNav = () => {
      document
        .getElementById(scrollToId)
        .scrollIntoView({ behavior: "smooth" });
    };

    return (
      <ul key={nav} className="lg:block md:block hidden">
        <li>
          <button
            onClick={handleClickNav}
            className={
              activeLinkId === nav
                ? "text-blue-400 text-2xl"
                : "line-through text-xl"
            }
          >
            {nav}
          </button>
        </li>
      </ul>
    );
  };

  return (
    <>
      <header className="fixed flex items-center lg:justify-around md:justify-around justify-between mx-2 left-0 right-0 my-2 z-50">
        <img
          onClick={handleClickLogo}
          src={SE}
          alt="SE"
          className="h-20 w-20 cursor-pointer"
        />
        {navLinks.map((nav) => renderNavLink(nav))}
        {!toggleHamburger && (
          <div
            onClick={handleToggleHamburger}
            className="lg:hidden md:hidden block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
