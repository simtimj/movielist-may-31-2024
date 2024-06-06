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
    fetch('http://localhost:8080/movies', {
      headers: {
        Accept: "application/json"
      }
    })
    .then(res => res.json())
      .then(json => {
        console.log("json", json)
        setMovies(json);
      })


  }, [])   // array here will contain things for useEffect to watch for changes


    let searchFilteredMovies = (movies) => { 
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
        movies = {searchFilteredMovies(movies)}
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