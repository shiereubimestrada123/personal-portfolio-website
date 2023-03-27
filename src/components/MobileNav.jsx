import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavContext } from "../contexts/NavContext";
import { HamburgerContext } from "../contexts/HamburgerContext";

const MobileNav = () => {
  const { activeLinkId } = useContext(NavContext);
  const { toggleHamburger, setToggleHamburger } = useContext(HamburgerContext);

  const navLinks = ["Home", "About", "Portfolio", "Contact"];

  const handleToggleHamburger = () => {
    setToggleHamburger(false);
  };

  const renderNavLink = (nav) => {
    const scrollToId = `${nav.toLowerCase()}Section`;

    const handleClickNav = () => {
      document
        .getElementById(scrollToId)
        .scrollIntoView({ behavior: "smooth" });

      handleToggleHamburger();
    };

    return (
      <ul
        key={nav}
        className="lg:block md:block flex justify-center leading-10"
      >
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

  const renderHamburger = (
    <motion.div
      initial={{ width: 0 }}
      animate={{
        width: "100%",
      }}
      exit={{
        width: 0,
        opacity: 0,
        transition: { delay: 0.3, duration: 0.3 },
      }}
      className="fixed h-56 w-full z-50 bg-[#ffb766]"
    >
      <div className="flex justify-end lg:hidden md:hidden mr-2 mt-4">
        <svg
          onClick={handleToggleHamburger}
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      {navLinks.map((nav) => renderNavLink(nav))}
    </motion.div>
  );

  return (
    <AnimatePresence className="lg:hidden md:hidden block">
      {toggleHamburger && renderHamburger}
    </AnimatePresence>
  );
};

export default MobileNav;
