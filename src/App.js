import { useEffect, useState } from 'react';
// import mockData from './mockData.js'
import fetch from 'node-fetch';
import './App.css';

import MovieList from './components/MovieList.js';
import AddMovies from './components/AddMovies.js';
import Searchbar from './components/Search.js';



let App = () => {
  let [movies, setMovies] = useState([]);
  let [filteredMovies, setFilteredMovies] = useState([])
  let [searchBarText, setSearchBarText] = useState("");
  let [inputBarText, setInputBarText] = useState("")

  // console.log("api", process.env.REACT_APP_movieAPI)
  console.log("movies:", movies)

  useEffect(() => {
    let newMovies = [];
    const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjQ3ZGI5NWQwYmYzOTM0NWFkMWE1MGFlNjM4MGVlMCIsInN1YiI6IjVkMDQ1Y2ExMGUwYTI2MGIwYWNkOGViZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGWq2Eb1C6io4rgUzar8EJiXpGJj-ue6YT7_WB2alSY'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        // console.log(11111, json)
          for (let i = 0; i < json.results.length; i++) {
            let movie = json.results[i];
            // console.log("movie:", movie)
  
            let parsedMovie = {
              key: i,
              title: movie.original_title || movie.original_name,
              watched: false,
              year: movie.release_date || movie.first_air_date,
              runtime: movie.popularity,
              metascore: movie.vote_average,
              imdbRating: movie.vote_count 
            };
            newMovies.push(parsedMovie);
          }
          setMovies(newMovies)
          console.log("new movies:", newMovies)
          setFilteredMovies(newMovies)
          
      })
      .catch(err => console.error('error:' + err));
  }, [])   // array here will contain things for useEffect to watch for changes


    let searchFilteredMovies = () => { 
      console.log('App.js, movies:', movies);
      return movies.filter(movie => {
        if (movie.title.toLowerCase().includes(searchBarText.toLowerCase())) {
          console.log('App.js, movie:', movie);
          return movie;
        }
      })
    }

    // console.log('App.js, searchFilteredMovies():', searchFilteredMovies());


    let handleAddMovies = () => {
      // console.log("test")
      let newMovie = {title: inputBarText}
      setMovies(prev => {
        return [...prev, newMovie]
      })
    }

  return (
    <div className="App">
      <h1>Movie List</h1>
      <AddMovies 
        handleAddMovies = {handleAddMovies}
        setInputBarText = {setInputBarText}
      />
      <Searchbar 
        setSearchBarText = {setSearchBarText}
      />
      <MovieList 
        movies = {filteredMovies}
        setMovies = {setMovies}
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