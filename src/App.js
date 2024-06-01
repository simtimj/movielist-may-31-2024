import { useState } from 'react';
import mockData from './mockData.js'
import './App.css';

import MovieList from './components/MovieList.js';
import Searchbar from './components/Search.js';



let App = () => {
  let [movies, setMovies] = useState(mockData);
  let [searchBarText, setSearchBarText] = useState("");

    let searchFilteredMovies = () => { 
      return movies.filter(movie => {
        if (movie.title.toLowerCase().includes(searchBarText.toLowerCase())) {
          return movie;
        }
      })
    }


// console.log(3, searchFilteredMovies())

  // console.log(0, movies)
  return (
    <div className="App">
      <h1>Movie List</h1>
      <Searchbar 
        
        setSearchBarText={setSearchBarText}
      />
      <MovieList 
        movies={searchFilteredMovies()}
        searchBarText = {searchBarText}
      />
    </div>
  );
}

export default App;




/*
searchbar component
filter applied and sent to movieList




*/