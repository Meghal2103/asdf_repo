import React from 'react';
import { useDispatch } from 'react-redux';
import { updateValue } from './actions';

const ComponentB = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateValue(e.target.value));
  };

  return <input type="text" onChange={handleChange} />;
};

export default ComponentB;
