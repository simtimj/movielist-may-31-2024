import { useState } from 'react';
import mockData from './mockData.js'
import MovieList from './components/MovieList.js';
import './App.css';

let App = () => {
  let [movies, setMovies] = useState(mockData);

  console.log(0, movies)
  return (
    <div className="App">
      <h1>Movie List</h1>
      <MovieList 
        movies={movies}
      />
    </div>
  );
}

export default App;
