import React from "react"
import { useLocation, Link } from "react-router-dom"
import MobileMenu from "./MobileMenu"
import burgerMenu from "../images/Line.svg"
import closeMenuIcon from "../images/close-icon-mobile.svg"

function Header(props) {
  const location = useLocation()
  return (
    <div>
      <MobileMenu
        email={props.email}
        handleLogout={props.onSignOut}
        isMobileMenuOpen={props.isMobileMenuOpen}
      />
      <header className="header page__header mobile-menu__header">
        <a className="logo" href="#" target="_self" />

        {location.pathname === "/sign-in" && (
          <Link to="/sign-up" className="header__link">
            Регистрация
          </Link>
        )}
        {location.pathname === "/sign-up" && (
          <Link to="/sign-in" className="header__link">
            Войти
          </Link>
        )}
        {location.pathname === "/" && (
          <div className="header__user-info">
            <p className="header__email">{props.email}</p>
            <Link
              to="/sign-in"
              className="header__link"
              onClick={props.onSignOut}
            >
              Выйти
            </Link>
          </div>
        )}

        {props.isLoggedIn && (
          <button
            className="header__burger"
            type="button"
            onClick={props.handleClickOpenMobileMenu}
            style={{
              backgroundImage: `url(${
                props.isMobileMenuOpen ? closeMenuIcon : burgerMenu
              })`,
            }}
          ></button>
        )}
      </header>
    </div>
  )
}

export default Header
