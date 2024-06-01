

let MovieList = (props) => {
  let {movies} = props;

  console.log(1, movies)

  return (
    <div className="movielist">
      {movies.map(movie => {
        return <MovieEntry 
          title = {movie.title}
        />
      })}
    </div>
  )
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











