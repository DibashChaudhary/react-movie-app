
import React from 'react'
import { Card, Button } from 'react-bootstrap'



export const CustomCards = ({movies, func, isDelete, removeMovie}) => {


  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movies?.Poster} />
      <Card.Body>
        <Card.Title>{movies?.Title}</Card.Title>
        <Card.Text>Rating: {movies?.imdbRating}</Card.Text>
        <Card.Text>Year: {movies?.Year}</Card.Text>
        
      

        {
          isDelete ?(
            <div className="d-flex">
          <Button varient="danger" onClick={()=>func(movies.imdbID)}>Delete</Button>
        </div>
          )
          :(
            <div className="d-flex justify-content-between">
            <Button onClick={()=>func({...movies, type:"happy"})} variant="danger">Happy</Button>
            <Button varient="danger" onClick={removeMovie}>Delete</Button>
            <Button onClick={()=>func({...movies, type:"lazy"})} variant="info">Lazy</Button>
            </div>
          )
        }
       

        
       
      </Card.Body>
    </Card>
    </div>
  )
}
