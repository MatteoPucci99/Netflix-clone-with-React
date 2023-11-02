import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container, Row, Col, Card } from "react-bootstrap"


const MovieDetail = ()=>{

    const [savedFilm, setSavedFilm] = useState({})
    const [savedComments, setSavedComments] = useState([])

    const params = useParams()
    console.log('Questo è il film con id ', params.filmId)


    useEffect(()=>{
        getFilms()
        getComments()
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
    const getComments = ()=>{
        fetch('https://striveschool-api.herokuapp.com/api/comments/' + params.filmId,{
            headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNTYyZmY2ZTNkZDAwMTQ5NWU0M2EiLCJpYXQiOjE2OTg5NDIyOTcsImV4cCI6MTcwMDE1MTg5N30.M-ati9g9eIi4bAhe91Mi_t7BxBh8QPxSRRG1cWnBBuk"
            }
            })
        .then(res=>{
            if(res.ok){
                return res.json()
            } else {
                throw new Error ('Errore')
            }
        })
        .then(data=>{
            console.log(data)
            setSavedComments(data)
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
     <Container>
        <Row className="justify-content-center">
            <Col xs={12} md={6}>
            <Card>
                <Card.Img variant="top" src={savedFilm.Poster} />
                <Card.Body>
                  <Card.Title>{savedFilm.Title}</Card.Title>
                  <Card.Text>
                    Film of {savedFilm.Year} : {savedFilm.Plot}
                  </Card.Text>
                  <Card.Text>
                    {savedComments.map((el)=>{
                        return (
                           <div className="d-flex justify-content-between">
                            <div>
                            {el.comment}
                            </div>
                            <div>
                            {el.rate}
                            </div>
                        
                           </div> 
                        )
                    })}
                  </Card.Text>
                  
                </Card.Body>
            </Card>
            </Col>
        </Row>

     </Container>
    )
}

export default MovieDetail