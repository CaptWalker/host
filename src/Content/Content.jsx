import React from 'react';
import RFA from 'RFA/RFA';
import { Route, Switch } from 'react-router-dom';
import { aic, kycCapability } from '../AppConfig/AppConfig';

function Content() {
  return (
    <div className='content-height w-100 p-3'>
        {kycCapability()}
        {aic()}
        
    </div>
  )
}

export default Content;
