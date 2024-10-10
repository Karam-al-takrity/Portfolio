import { useState } from "react";
import { navLinks } from "../constants/index.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const NavItems = () => {
    return (
      <ul className="nav-ul">
        {navLinks.map(({ id, href, name }) => (
          <li key={id} className="nav-li">
            <a href={href} className="nav-li_a" onClick={() => {}}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-black/90">
      <div className="mx-auto max-w-7xl">
        <div className="c-space mx-auto flex items-center justify-between py-5">
          <a
            href="/"
            className="text-xl font-bold text-neutral-400 transition-colors hover:text-white"
          >
            Karam
          </a>

          <button
            onClick={toggleMenu}
            className="flex text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="h-6 w-6"
            />
          </button>
          <nav className="hidden sm:flex">
            <NavItems />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
