import React, { useEffect, useState } from 'react'
import { Col, Row, Button, ButtonGroup } from 'react-bootstrap'
import { CustomCards } from './CustomCards'


export const MovieList = ({movieList, deleteMovie, removeMovie}) => {

    const [displayMovies, setDisplayMovies] = useState([])

    useEffect(()=>{
        setDisplayMovies(movieList)
    }, [movieList])

    const handleOnSelectCategory = (categ)=>{
        categ === "all"  && setDisplayMovies(movieList)

        categ === "happy" && setDisplayMovies(movieList.filter((item)=> item.type === "happy"))

        categ === "lazy" && setDisplayMovies(movieList.filter((item)=> item.type === "lazy"))
    }


  return (
    <div className='bg-dark py-3 rounded p-3 mt-5'>
        <Row>
            <Col>
                <ButtonGroup aria-label="Basic example">
                <Button onClick={()=>handleOnSelectCategory("all")} variant="secondary">All</Button>
                <Button onClick={()=>handleOnSelectCategory("happy")} variant="secondary">Happy</Button>
                <Button onClick={()=>handleOnSelectCategory("lazy")} variant="secondary">Lazy</Button>
                </ButtonGroup>
            </Col>
            
            <p className='mt-3'>{displayMovies.length}Movies found!</p>

        </Row>
        <Row >
            <Col className='d-flex flex-wrap justify-content-around gap-3'>
               {
                movieList.map((item, index)=> 
                <CustomCards movies={item} isDelete={true} func={deleteMovie} removeMovie={removeMovie}/>
                )}
                
                
            </Col>
        </Row>
    </div>
  )
}
