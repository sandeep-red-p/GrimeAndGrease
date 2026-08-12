import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/home/logo.png'
import hamburgerIcon from '../assets/home/hamburger.svg'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Grime & Grease Garage" />
        </Link>
        <Link className="btn-quote" to="/contact">
          Get a Quote
        </Link>
        <button
          type="button"
          className="hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <img src={hamburgerIcon} alt="" />
        </button>
        {menuOpen && (
          <nav className="nav-menu">
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
  )
}

export default Header
