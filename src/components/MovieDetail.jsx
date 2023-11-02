import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const MovieDetail = ()=>{

    const [savedFilm, setSavedFilm] = useState({})

    const params = useParams()
    console.log('Questo è il film con id ', params.filmId)


    useEffect(()=>{
        getFilms()
    }, [])

    const getFilms = ()=>{
        fetch('https://www.omdbapi.com/?apikey=12ff058a&i=' + params.filmId)
        .then(res=>{
            if(res.ok){
                return res.json()
            } else {
                throw new Error ('Errore')
            }
        })
        .then(data=>{
            console.log(data)
            setSavedFilm(data)
        })
        .catch(err=>{
            console.log(err)
            // this.setState({
            //     isLoading: false,
            //     isError: true,
            // })
           
        })
       
    }
    return (
     <div>ciao</div>
    )
}

export default MovieDetail