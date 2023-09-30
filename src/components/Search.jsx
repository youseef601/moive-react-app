import { useState } from 'react';
import axios from 'axios';

const MovieSearch = ({ handleSearchResults }) => {
  const apiKey = '7a1c19ea3c361a4d3cc53eb70ef8298c';
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchMovies();
  };

  const fetchMovies = () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c`;

    axios
      .get(url)
      .then((response) => {
        handleSearchResults(response.data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSearchSubmit}>
    </form>
  );
};

export default MovieSearch;