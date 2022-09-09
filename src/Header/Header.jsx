import React from 'react'
import { Button, Navbar, NavbarBrand } from 'reactstrap';
import { setUserAccess, user1, user2 } from '../AppConfig/AppConfig';
import './../index.css'

function Header({setAccess}) {

  const onUser1Click = () => {
    setAccess(setUserAccess(user1));
  }

  const onUser2Click = () => {
    setAccess(setUserAccess(user2));
  }

  return (
    <Navbar
    color="info"
  >
    <NavbarBrand href="/">
      HSBC
    </NavbarBrand>
    <Button color='success' onClick={onUser1Click}>User 1</Button>
    <Button color='danger' onClick={onUser2Click}>User 2</Button>
  </Navbar>
  )
}

export default Header;
