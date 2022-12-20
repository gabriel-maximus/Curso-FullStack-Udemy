import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api';
import './styles.css'

export default function Filme() {

  const { id } = useParams();
  const [dados, setDados] = useState({})
  const [loading, setLoading] = useState(true);

  useEffect(() => { api.get(`/movie/${id}`,{
    params:{
      api_key: 'd6312b26b01c0e447062a7edd4c65809',
      language: 'pt-BR',
    }
  }).then((response)=>{
    setDados(response.data);
    setLoading(false);
  }).catch(()=>{
    console.log("Filme não encontrado")
  })
  }, []);
  

  if(loading){
    return(
      <div className='Filme-Info'>
        <h1>Carregando Detalhes</h1>
      </div>
    )
  }

  return (
    <div className='Filme-Info'>
      <h1>{dados.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${dados.backdrop_path}`} alt={`Poster do filme ${dados.title}`}/>
      <h3>Sinopse</h3>
      <span>{dados.overview}</span>
      <strong>Avaliação: {dados.vote_average}/10</strong>

      <div className='Buttons'>
        <button>Salvar</button>
        <button>
          <a href='#'>
            Trailer
          </a>
        </button>
      </div>

    </div>
  )
}
