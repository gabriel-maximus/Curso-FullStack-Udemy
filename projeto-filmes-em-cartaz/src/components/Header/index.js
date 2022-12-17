import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Header() {
  return (
    <header>
        <Link to='/' className='Logo'>MaxFlix</Link>
        <Link to='/favoritos' className='Favoritos'>Favoritos</Link>
    </header>
  )
}

