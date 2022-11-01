import {React}from 'react'

import { Form, Col, Row, Button,Alert } from 'react-bootstrap'
import { useState } from 'react'
import {fetchData} from "../utils/axioHelper"
import { CustomCards } from './CustomCards'

export const SearchForm = ({func}) => {
    const [form, setForm] = useState("")
    const [movies, setMovies] =useState({})
    const [isError, setIsError]=useState(false)

    const handleOnChange = (e)=>{
        const {value} = e.target
        setForm(value)
        
        
    }
    const handleOnSubmit = async (event)=>{
        event.preventDefault()
        setMovies({})
        const {data} = await fetchData(form)

        if(data.Response==="True"){
      setMovies(data)
        }else{
            setIsError(true)
        }
    }


    const handleOnaddToList = (movie) =>{
        //send movie to parent component
        func(movie)

        // reset the movie stste so that th ecard is not showing after add movie to the list
        setMovies({});
        setForm(" ");

    }
    const removeMovie=()=>{
        setMovies({});
        setForm(" ");
    }

  return (
    <> 
    <div className="bg-dark py-5 rounded p-2 mt-5">

        <Form onSubmit={handleOnSubmit}>
        <Row>
    
            <Col className='d-flex justify-content-center'>
               <div className="d-flex" style={{width:"50%"}}> 
                <Form.Control 
                onChange={handleOnChange}
                placeholder="Search Movie..."
                required  
                value={form}/>
                
               
                </div>

                <div className="d-grid">
                <Button varient="primary" type='submit'>Search</Button>
                </div>
               
            </Col>
        </Row>
        </Form>

        <div className="text-center mt-3 d-flex justify-content-center">
        {movies?.imdbID && <CustomCards movies={movies} func={handleOnaddToList} removeMovie={removeMovie}/>}

            {
                isError && (
                    
            <Alert varient ="danger">No Movie found</Alert>
                )
            }
            
        </div>
     </div>
    </>
  )
}
