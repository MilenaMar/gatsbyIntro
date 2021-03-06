import { Link } from "gatsby"
import React from "react"
import headerStyles from "./header.module.scss"
import Logo from "../../public/static/Images/logo.png"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <Link to="/" className={headerStyles.name}>
       <img src={Logo} alt="web-site logo" style={{width:"70px"}}></img> 
      </Link>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              to="/"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
