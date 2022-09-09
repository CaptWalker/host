import React, { useState } from 'react';
import { Button, List } from 'reactstrap';

function Navbar({access}) {
  console.log(access);
  return (
    <List type='unstyled' className='p-2 border-right'>
      {access.map((item, index) => (
          <li className='m-1' key={item.id + index}>
            <Button color='success' className='w-100'>
              {item.name}
            </Button>
          </li>
        ))}
    </List>
  );
}

export default Navbar;
