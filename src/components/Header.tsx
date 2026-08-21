import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import logo from "../assets/home/logo.webp";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isContactPage = pathname === "/contact";
  const navRef = useRef<HTMLElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (navRef.current?.contains(target)) return;
      if (hamburgerRef.current?.contains(target)) return;
      setMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Grime & Grease Garage" />
        </Link>
        <a className="btn-quote btn-quote--mobile" href="tel:+919741297321">
          Call Now
        </a>
        <Link
          className="btn-quote btn-quote--desktop"
          to="/contact"
          onClick={() => setMenuOpen(false)}
          style={isContactPage ? { visibility: "hidden" } : undefined}
          aria-hidden={isContactPage}
          tabIndex={isContactPage ? -1 : undefined}
        >
          Get a Quote
        </Link>
        <button
          type="button"
          ref={hamburgerRef}
          className="hamburger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Menu
            width={36}
            height={28}
            preserveAspectRatio="none"
            strokeWidth={2.4}
            aria-hidden="true"
          />
        </button>
        {menuOpen && (
          <nav className="nav-menu" ref={navRef}>
            <NavLink to="/" onClick={() => setMenuOpen(false)} end>
              Home
            </NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
