import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import ThemeHOC from '../theme/ThemeHOC';
import HeaderStyle from './Header.style';

const headerRouters = [
  { id: 0, url: '/', name: 'Home' },
  { id: 1, url: '/user', name: 'User' },
];

const Header = ({ color }) => (
  <HeaderStyle background={color}>
    <h1>Introduction to React</h1>
    <nav>
      <ul>
        {
          headerRouters.map(el => (
            <li key={el.id}>
              <NavLink
                to={el.url}
                exact
                activeStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
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

Header.propTypes = {
  color: PropTypes.string.isRequired,
};

export default withRouter(ThemeHOC(Header));
