let express = require("express");
let cors = require("cors")
let path = require("path")

let port = 8080;
let app = express();


// app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use("/test", (req, res) => {
  res.send("hi")
})

app.use("/movies", (req, res) => {
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
          // setMovies(newMovies)
          console.log("new movies:", newMovies)
          // setFilteredMovies(newMovies)
          res.send(newMovies)
      })
      .catch(err => console.error('error:' + err));
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})