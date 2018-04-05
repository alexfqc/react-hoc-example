import styled from 'styled-components';

export default styled.div.attrs({
  color: props => props.color || '#33b5e5',
})`
  position: relative;
  background: #ffffff;
  max-width: 320px;
  width: 100%;
  border-top: 5px solid ${props => props.color};
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  margin: 0 auto;

  form {
    padding: 0px 40px 40px 40px;
  }

  h3, span {
    color: ${props => props.color};
  }

  input {
    outline: none;
    display: block;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    margin: 0 0 20px;
    padding: 10px 15px;
    transition: .3s ease;
    width: 100%;

    &:focus {
      border: 1px solid ${props => props.color};
      color: #333333;
    }
  }
`;
