

let MovieList = (props) => {
  let {movies, searchBarText} = props;

  console.log(1, movies)



  let noMovies = () => `No movies containing "${searchBarText}"`

  if (movies.length) {
    return (
      <div className="movielist">
        {movies.map(movie => {
          return <MovieEntry 
            title = {movie.title}
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
  let {title} = props;
  // taking in movie schema { title: "Mean Girls" }

  return (
    <div className="movieEntry">
      <p>{title}</p>
    </div>
  );

};




export default MovieList;











