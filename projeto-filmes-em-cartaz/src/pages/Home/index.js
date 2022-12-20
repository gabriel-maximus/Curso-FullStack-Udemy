import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css'

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    async function loadFilmes(){
      const response = await api.get("movie/now_playing",{
        params:{
          api_key: 'd6312b26b01c0e447062a7edd4c65809',
          language: 'pt-BR',
          page: 1,
        }
      })

      //console.log(response.data.results.slice(0,10));
      setFilmes(response.data.results.slice(0,10));
      setLoading(false);
    }

    loadFilmes();

  }, [])

  if(loading === true){
    return(
      <div className='Loading'>
        <h2>Carregando Filmes...</h2>
      </div>
    )
  }

  return (
    <div className='Container'>
      <div className='Lista'>
        {filmes.map((filme)=>{
          return(
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={`Poster do filme ${filme.title}`} />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}

