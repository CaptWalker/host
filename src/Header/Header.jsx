import React from 'react'
import { Button, Navbar, NavbarBrand } from 'reactstrap';
import { cases, setUserAccess } from '../AppConfig/AppConfig';
import './../index.css'

function Header({setAccess}) {

  return (
    <Navbar
    color="info"
  >
    <NavbarBrand href="/">
      HSBC
    </NavbarBrand>
    <div className='flex'>
      <Button color='success' className='w-100 margin-right' onClick={() => setAccess(setUserAccess(cases['case1']))}>
        Case1
      </Button>
      <Button color='success' className='w-100' onClick={() => setAccess(setUserAccess(cases['case2']))}>
        Case2
      </Button>
    </div>
  </Navbar>
  )
}

export default Header;
