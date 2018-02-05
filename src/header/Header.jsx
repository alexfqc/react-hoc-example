import React from 'react';
import { NavLink } from 'react-router-dom';
import * as style from './style.js'; 

const headerRouters = [
  { id: 0, url: '/', name: 'Home' },
  { id: 1, url: '/user', name: 'User' }
];

const Header = () => (
  <header style={style.header}>
    <ul style={style.ul}>
      {
        headerRouters.map(el =>
          <li key={el.id} style={style.li}>
            <NavLink
              style={style.navLink}
              to ={el.url}
              activeStyle={style.activeNavLink}
              exact>
                {el.name}
            </NavLink>
          </li>
        )
      }
    </ul>
  </header>
);

export default Header;