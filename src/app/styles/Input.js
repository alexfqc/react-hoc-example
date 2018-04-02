import styled from 'styled-components';

export default styled.input`
  outline: none;
  display: block;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  margin: 0 0 20px;
  padding: 10px 15px;
  transition: 0.3s ease;
  width: 100%;

  &:focus {
    border: 1px solid #33b5e5;
    color: #333333;
  }
`;
