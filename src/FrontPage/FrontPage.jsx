import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { cases, content, setUserAccess } from '../AppConfig/AppConfig';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

function FrontPage() {
  const caseId = useParams().caseId;
  if(caseId==='' || cases[caseId] === undefined){
    return (
        <div>
            Please provide case Id
        </div>
    )
  }

  const [access, setAccess] = useState(setUserAccess(cases[caseId]));

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
