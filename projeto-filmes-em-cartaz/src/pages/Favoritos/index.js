import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './styles.css'


export default function Favoritos() {
 
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
      const minhaLista = localStorage.getItem("@filmes");
      setFilmes(JSON.parse(minhaLista) || [] )

    }, [])
    
    
    return (
        <div className='Meus-Filmes'>
            <h1>Meus filmes</h1>

            <ul>
                {filmes.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
  )
}
