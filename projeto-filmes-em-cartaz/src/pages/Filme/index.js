import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import api from '../../services/api';
import './styles.css'

export default function Filme() {

  const { id } = useParams();
  const [dados, setDados] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => { api.get(`/movie/${id}`,{
    params:{
      api_key: 'd6312b26b01c0e447062a7edd4c65809',
      language: 'pt-BR',
    }
  }).then((response)=>{
    setDados(response.data);
    setLoading(false);
  }).catch(()=>{
    console.log("Filme não encontrado");
    navigate("/", { replace: true});
    return;
  })
  }, [navigate, id]);
  
  function salvarFilme(){
    const minhaLista = localStorage.getItem("@filmes")

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilmes = filmesSalvos.some((filmeSalvo)=> filmeSalvo.id === dados.id );

    if(hasFilmes){
      toast.warn("Esse filme já está na lista!");
      return;
    }

    filmesSalvos.push(dados);
    localStorage.setItem("@filmes", JSON.stringify(filmesSalvos));
    toast.success("Filme salvo com sucesso!"); 

  }

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
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a href={`https://youtube.com/results?search_query=${dados.title} Trailer`} target='blank'>
            Trailer
          </a>
        </button>
      </div>

    </div>
  )
}
