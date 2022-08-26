import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';


export default ({context}) => {
  useEffect(() =>  context.actions.signOut());

  return (
    <Redirect to="/" />
  );
}