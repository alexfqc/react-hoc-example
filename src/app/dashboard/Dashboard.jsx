import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withRouter } from 'react-router';
import Form from '../form/Form';
import Theme from '../theme/Theme';
import ContainerStyle from '../styles/Input';

const Dashboard = ({ color, form: { user, password }, setForm }) => (
  <ContainerStyle color={color}>
    <form>
      <h3>Login to your account</h3>
      <div>
        <input
          type="text"
          name="user"
          onChange={setForm}
          placeholder="Username"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          onChange={setForm}
          placeholder="Password"
        />
      </div>
      <div>
        <h3>Data</h3>
        <div>User: <span>{user}</span></div>
        <div>Password: <span>{password}</span></div>
      </div>
    </form>
  </ContainerStyle>
);

Dashboard.defaultProps = {
  form: {
    user: '',
    password: '',
  },
};

Dashboard.propTypes = {
  color: PropTypes.string.isRequired,
  form: PropTypes.shape({
    user: PropTypes.string,
    password: PropTypes.string,
  }),
  setForm: PropTypes.func.isRequired,
};

export default compose(
  withRouter,
  Theme,
  Form,
)(Dashboard);
