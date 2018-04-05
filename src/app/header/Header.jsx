import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderStyle from './Header.style';

const headerRouters = [
  { id: 0, url: '/', name: 'Home' },
  { id: 1, url: '/user', name: 'User' },
];

const Header = () => (
  <HeaderStyle>
    <h1>Introduction to React</h1>
    <nav>
      <ul>
        {
          headerRouters.map(el => (
            <li key={el.id}>
              <NavLink
                to={el.url}
                exact
              >
                {el.name}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  </HeaderStyle>
);

export default Header;
