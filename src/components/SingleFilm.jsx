import { Link } from "react-router-dom"


const SingleFilm =(props)=>{
       
 return (
       <Link to={'/moviedetail/' + props.singleFilm.imdbID}>
       <img className="img-fluid" src={props.singleFilm.Poster} alt="movies" style={{height:'350px'}}/>
       
       </Link>
    
 )
}

export default SingleFilm

