import axios from "axios";

// URL da api : https://api.themoviedb.org/3/movie/now_playing?api_key=d6312b26b01c0e447062a7edd4c65809&language=pt-BR
// URL base : https://api.themoviedb.org/3/

const api = axios.create({
    baseURL:"https://api.themoviedb.org/3/"
})

export default api;