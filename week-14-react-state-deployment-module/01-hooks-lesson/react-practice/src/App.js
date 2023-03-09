import './App.css';
import { useState, useEffect } from "react"
function App() {
  const [movieNameState, setMovieNameState] = useState("up");
  const [movieImageState, setMovieImageState] = useState("");


  useEffect(()=>{
    fetch(`https://www.omdbapi.com/?t=${movieNameState}&y=2009&plot=full&apikey=trilogy`)
    .then(resp=> resp.json())
    .then(movie => {
        console.log(movie)

        setMovieNameState(movie.Title);
        setMovieImageState(movie.Poster);

    });


  }, [movieNameState])

  return (<div>
    <img src={movieImageState} alt="movie goes here" >
    </img>
    <h1>{movieNameState}</h1>

  <form onSubmit={(event)=>{

    event.preventDefault();
    console.log(event.target["movieName"].value);

    setMovieNameState(event.target["movieName"].value)



  }}>


    <input type="text" name="movieName" />

 <button>submit</button>
  </form>
  </div>
  );
}
export default App;