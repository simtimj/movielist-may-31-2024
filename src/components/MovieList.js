import { useState } from "react";


let MovieList = (props) => {
  let {movies, setMovies, searchBarText} = props;
  let [filteredMovies, setFilteredMovies] = useState(movies);

  console.log("movielist movies:", movies)

  let noMovies = () => `No movies containing "${searchBarText}"`

  // filter for either "Watched", or "To Watch"
  let filterWatchState = (state) => {
    let watchFilteredMovies;
    if (state === "Watched") {
      watchFilteredMovies = movies.filter(movie => {
        return movie.watched === true;
      })
    } else {
      watchFilteredMovies = movies.filter(movie => {
        return movie.watched === false;
      })
    }
    setFilteredMovies(watchFilteredMovies);
  }


  if (movies.length) {
    // console.log("filteredMovies:", filteredMovies)
    return (
      <div className="movielist">
        <button
          onClick={e => filterWatchState(e.target.value)}
          value="To Watch"
          >To Watch
        </button>
        <button
          onClick={e => filterWatchState(e.target.value)}
          value="Watched"
          >Watched
        </button>
        <button
          onClick={ () => setFilteredMovies(movies)}
          >Show All
        </button>
        {console.log("movies:", movies)}
        {console.log("filteredMovies:", filteredMovies)}
        {movies.map(movie => {
          console.log(88)
          console.log(555, movie)
          return <MovieEntry 
            movie = {movie}
            setMovies = {setMovies}
            key = {movie.key}
            // title = {movie.title}
            // watched = {movie.watched}
          />
        })}
      </div>
    )
  } else {
    return (
      <div className="movielist">
        {noMovies()}
      </div>
    )
  }
};



let MovieEntry = (props) => {
  let {movie, setMovies} = props;
  let {key, title, watched, year, runtime, metascore, imdbRating} = movie;

  let [movieWatchedState, setMovieWatchedState] = useState(watched);
  let [simpleView, setSimpleView] = useState(true)

  console.log("simpleView:", )


  let handleToggleWatchedState = () => {
    setMovies(prev => {
      let copy = [...prev];
      copy[key].watched = !copy[key].watched;
      return copy;
    })
  }

  let simplePanel = () => {
    return (
      <div className="movieEntrySimple">
        <p
          onClick={() => setSimpleView(!simpleView)}
          >{title}
        </p>
        <button 
          className="movieWatchedButton"
          onClick={() => {
            setMovieWatchedState(!movieWatchedState)   // changes local state
            handleToggleWatchedState();     // changes movie state
          }}
        >
          {movieWatchedState ? "Watched" : "To Watch"}
        </button>
      </div>
    )
  }

  let detailedPanel = () => {
    console.log(12345, movie, year, runtime, metascore, imdbRating)
    return (
      <div className="movieEntryDetailed">
        <p className="title"
          onClick={() => setSimpleView(!simpleView)}
          >{title}
        </p>
        <li>
          <ul>Year: {year}</ul>
          <ul>Runtime: {runtime}</ul>
          <ul>Metascore: {metascore}</ul>
          <ul>imdbRating: {imdbRating}</ul>
          <ul>
            Watched: 
            <input 
              type="radio" 
              checked={movieWatchedState}
              onClick={() => {
                setMovieWatchedState(!movieWatchedState)   // changes local state
                handleToggleWatchedState();     // changes movie state
              }}
            ></input>
          </ul>
          
        </li>

        {/* <button 
          className="movieWatchedButton"
          onClick={() => {
            setMovieWatchedState(!movieWatchedState)   // changes local state
            handleToggleWatchedState();     // changes movie state
          }}
        >
          {movieWatchedState ? "Watched" : "To Watch"}
        </button> */}
      </div>
    )
  }

  return (
    <div>
      {simpleView ? simplePanel(): detailedPanel()}
    </div>
  );

};




export default MovieList;











