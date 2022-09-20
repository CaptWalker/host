import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { content, setUserAccess } from '../AppConfig/AppConfig';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

function FrontPage() {
  const context = useParams().context.split(',');
  if(context.length===0){
    return (
        <div>
            No Context Provided
        </div>
    )
  }

  const [access, setAccess] = useState(setUserAccess(context));

  useEffect(() => {}, [access]);

  return (
    <div>
      <Header setAccess={setAccess} />
      <div className='flex'>
        <Navbar access={access} />
        {content(access)}
      </div>
    </div>
  );
}

export default FrontPage;
