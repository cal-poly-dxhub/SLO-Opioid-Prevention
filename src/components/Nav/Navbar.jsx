import React from 'react';
import styled from 'styled-components';
import BurgerMenu from './BurgerMenu';

const Nav = styled.nav`
  background: #3EBCB4; 
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Nav Bar
      </div>
      <BurgerMenu />
    </Nav>
  )
}

export default Navbar

