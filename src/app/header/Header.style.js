import styled from 'styled-components';

export default styled.header.attrs({
  background: props => props.background || '#33b5e5',
  color: '#fff',
})`
  background-color: ${props => props.background};
  float: left;
  height: 300px;
  position: relative;
  width: 100%;

  h1 {
    font-size: 42px;
    color: ${props => props.color};
    line-height: 230px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 100;
  }

  nav {
    position: absolute;
    bottom: 0;
    height: 60px;
    line-height: 60px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }

  ul {
    margin: 0;
  }

  li {
    box-sizing: border-box;
    display: inline-block;
    float: left
    list-style-type: none;
    padding: 0 15px;
    position: relative;
  }

  a {
    color: ${props => props.color};
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-weight: bold;
    text-decoration: none;
    vertical-align: baseline;
  }
`;
