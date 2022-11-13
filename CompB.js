import React, { useContext } from 'react';
import { Data } from './App';
  
const CompB = ({ name }) => {
  const context = useContext(Data);
  return <h1>{context}</h1>
}
  
export default CompB;