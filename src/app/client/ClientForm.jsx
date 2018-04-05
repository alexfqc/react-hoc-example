import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withRouter } from 'react-router';
import Form from '../form/Form';
import Theme from '../theme/Theme';
import ContainerStyle from '../styles/Input';

const ClientForm = ({ color, form: { firstName, lastName, address }, setForm }) => (
  <ContainerStyle color={color}>
    <form>
      <h3>Fill the client form</h3>
      <div>
        <input
          type="text"
          name="firstName"
          onChange={setForm}
          placeholder="First name"
        />
      </div>
      <div>
        <input
          type="text"
          name="lastName"
          onChange={setForm}
          placeholder="Last name"
        />
      </div>
      <div>
        <input
          type="text"
          name="address"
          onChange={setForm}
          placeholder="Last name"
        />
      </div>
      <div>
        <h3>Data</h3>
        <div>First Name: <span>{firstName}</span></div>
        <div>Last Name: <span>{lastName}</span></div>
        <div>Address: <span>{address}</span></div>
      </div>
    </form>
  </ContainerStyle>
);

ClientForm.defaultProps = {
  form: {
    firstName: '',
    lastName: '',
    address: '',
  },
};

ClientForm.propTypes = {
  color: PropTypes.string.isRequired,
  form: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    address: PropTypes.string,
  }),
  setForm: PropTypes.func.isRequired,
};

export default compose(
  withRouter,
  Theme,
  Form,
)(ClientForm);
