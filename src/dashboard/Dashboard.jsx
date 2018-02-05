import React from 'react';
import FormHOC from '../form/FormHOC';

export const Dashboard = ({ form: { user, password }, setForm }) => (
  <div>
    <div style={{ width: '100%' }}>
      <label htmlFor="user">User: </label>
      <input type="text" name="user" onChange={setForm} />
    </div>
    <div style={{ width: '100%' }}>
      <label htmlFor="password">Password: </label>
      <input type="password" name="password" onChange={setForm} />
    </div>
    <div>
      <h2>Data</h2>
      <div>User: {user}</div>
      <div>Password: {password}</div>
    </div>
  </div>
);

export default FormHOC(Dashboard);