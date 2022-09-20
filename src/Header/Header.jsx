import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';
import './../index.css'

function Header({setAccess}) {

  return (
    <Navbar
    color="info"
  >
    <NavbarBrand href="/">
      HSBC
    </NavbarBrand>
  </Navbar>
  )
}

export default Header;
