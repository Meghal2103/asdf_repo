import React from 'react';
import { useSelector } from 'react-redux';

const ComponentC = () => {
  const value = useSelector((state) => state.value);

  return <div>{value}</div>;
};

export default ComponentC;
