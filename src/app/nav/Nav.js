import React from 'react';
import Search from './Search';
import Logo from './Logo';
import './Nav.css';

export default function Nav () {
  return (
    <nav className="App-nav">
      <Logo />
      <Search />
    </nav>
  );
};