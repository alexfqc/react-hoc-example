import React from 'react';
import PropTypes from 'prop-types';
import FormHOC from '../form/FormHOC';
import InputStyled from '../styles/Input';
import ContainerStyle from './Login';

const Dashboard = ({ form: { user, password }, setForm }) => (
  <ContainerStyle>
    <form>
      <h3>Login to your account</h3>
      <div>
        <InputStyled
          type="text"
          name="user"
          onChange={setForm}
          placeholder="Username"
        />
      </div>
      <div>
        <InputStyled
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
  form: PropTypes.shape({
    user: PropTypes.string,
    password: PropTypes.string,
  }),
  setForm: PropTypes.func.isRequired,
};

export default FormHOC(Dashboard);
