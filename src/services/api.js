import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://swapi.py4e.com/api/people/',
});

export const IMG_API = 'https://starwars-visualguide.com/assets/img/characters/';