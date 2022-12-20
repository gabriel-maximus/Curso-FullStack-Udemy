import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './styles.css'


export default function Favoritos() {
 
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
      const minhaLista = localStorage.getItem("@filmes");
      setFilmes(JSON.parse(minhaLista) || [] )

    }, [])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter((item)=>{
            return (item.id !== id )
        })

        setFilmes(filtroFilmes);
        localStorage.setItem("@filmes", JSON.stringify(filtroFilmes))
        toast.error("Filme excluido da lista!")
    }
    
    
    return (
        <div className='Meus-Filmes'>
            <h1>Meus filmes</h1>

            {filmes.length === 0 && <span>Você não possui nenhum filme salvo :(</span>}

            <ul>
                {filmes.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button onClick={()=>excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
  )
}
