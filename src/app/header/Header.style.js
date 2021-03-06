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
  transition: .3s ease;

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
    float: left;
    list-style-type: none;
    position: relative;
    width: 80px;
  }

  a {
    color: ${props => props.color};
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    float: left;
    font-size: 100%;
    font-weight: bold;
    height: 100%;
    padding: 0 15px;
    position: relative;
    text-align: center;
    text-decoration: none;
    vertical-align: baseline;
    width: 100%;
  }
`;
