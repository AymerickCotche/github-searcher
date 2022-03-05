// == Import
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

// == Composant
const Navbar = () => (
  <div className="navbar">
    <NavLink
      to="/"
      className={({ isActive }) => `navbar__link ${(isActive ? 'navbar__link--selected' : '')}`}
    >
      Accueil
    </NavLink>
    <NavLink
      to="/faq"
      className={({ isActive }) => `navbar__link ${(isActive ? 'navbar__link--selected' : '')}`}
    >
      F.A.Q
    </NavLink>
  </div>
);

// == Export
export default Navbar;
