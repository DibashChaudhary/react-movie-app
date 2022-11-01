import axios from "axios";



export const fetchData=({movies})=>{

    const apiEp = `http://www.omdbapi.com/?t=${movies}&apikey=b4ca3b00`


    try{

        return axios.get(apiEp)
        
    } catch (error){
        console.log(error)
    }
}
