import React from 'react';
import { Button, List } from 'reactstrap';

function Navbar() {
  return (
    <List type='unstyled' className='p-2 border-right'>
      <li className='m-1'>
        <Button color='success' className='w-100'>
          Additional Capability
        </Button>
      </li>
      <li className='m-1'>
        <Button color='success' className='w-100'>
          KYC Capability
        </Button>
      </li>
    </List>
  );
}

export default Navbar;
