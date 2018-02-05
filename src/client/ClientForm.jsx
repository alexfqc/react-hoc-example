import React from 'react';
import FormHOC from '../form/FormHOC';

const ClientForm = ({ form: { firstName, lastName, address}, setForm }) => [
  <div>
    <div style={{ width: '100%' }}>
      <label htmlFor="firstName">First Name: </label>
      <input type="text" name="firstName" onChange={setForm} />
    </div>
    <div style={{ width: '100%' }}>
      <label htmlFor="lastName">Last Name: </label>
      <input type="text" name="lastName" onChange={setForm} />
    </div>
    <div style={{ width: '100%' }}>
      <label htmlFor="address">Address: </label>
      <input type="text" name="address" onChange={setForm} />
    </div>
    <div>
      <h2>Data</h2>
      <div>First Name: {firstName}</div>
      <div>Last Name: {lastName}</div>
      <div>Address: {address}</div>
    </div>
  </div>
];

export default FormHOC(ClientForm);