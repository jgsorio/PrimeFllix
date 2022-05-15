import axios from "axios";

//3d20de29e69a66f726bbf2805334c187
//https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/' 
});

export default api;