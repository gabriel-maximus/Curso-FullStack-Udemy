import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default function Erro() {
  return (
    <div className='Error'>
        <h1>404</h1>
        <h2>Pagina não encontrada</h2>
        <Link to={'/'}>Veja todos os filmes</Link>
    </div>
  )
}
