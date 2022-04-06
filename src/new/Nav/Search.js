import React from "react";
import { useDispatch } from 'react-redux';
import { updateSearchTerm } from './navSlice';

export default function Search () {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateSearchTerm(e.target.value));
  };

  return (
    <input
      className="search"
      type="search"
      name="search"
      area-label="Search the sites content"
      placeholder="Search"
      onChange={handleChange}
    />
  );
};
