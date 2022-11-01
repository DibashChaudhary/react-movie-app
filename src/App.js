
import './App.css';
import {Container} from "react-bootstrap"
import {Title} from "./components/Title"
import { SearchForm } from './components/SearchForm';
import { MovieList } from './components/MovieList';
import { useState } from 'react';



function App() {

  const [movieList, setMovieList] = useState([])

  const addMovie = (movie)=>{

//filter out the movie if already in the list

const filterdMovies = movieList.filter(item => item.imdbID !== movie.imdbID)

    setMovieList([...filterdMovies, movie])
    console.log(addMovie)

  }

  const deleteMovie=(id)=>{
    
    if(!window.confirm("Are you sure to delete")){
      return
    }
    setMovieList(movieList.filter((item)=> item.imdbID !==id))

  }


  
    
  return (
    <div className='wrapper'>
      <Container>
          <Title />
          <SearchForm func={addMovie}/>
          <MovieList movieList={movieList} deleteMovie={deleteMovie}/>
          
      </Container>
    </div>
  );
}

export default App;
