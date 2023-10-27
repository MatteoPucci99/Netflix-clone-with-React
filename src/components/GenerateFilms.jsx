import { Component } from "react";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import SingleFilm from "./SingleFilm";




class GenerateFilms extends Component {

state = {
    films: [],
    isLoading: true,
    isError: false,
}

componentDidMount(){
    fetch('https://www.omdbapi.com/?apikey=12ff058a&s=' + this.props.keyWord)
    .then(res=>{
        if(res.ok){
            return res.json()
        } else {
            throw new Error ('Errore')
        }
    })
    .then(data=>{
        console.log(data.Search)
        this.setState({
            films:data.Search,
            isLoading: false,
        })
    })
    .catch(err=>{
        console.log(err)
        this.setState({
            isLoading: false,
            isError: true,
        })
       
    })
 
}




render(){
    return (
        <Row className={this.state.isError ? 'justify-content-center mb-4' : 'mb-4'}>

            {this.state.isLoading && (
              <div className="text-center mb-2">
                <Spinner animation="border" variant="light" />
              </div>
            )}
            {this.state.isError && (
                <Col className="col-12 col-md-6">
              <Alert variant="danger" className="text-center">
                Errore nel caricamento dei film
              </Alert>

                </Col>
            )}
            {this.state.films.map((el)=>{
                return (
                    <Col className="col col-12 col-sm-6 col-md-3 col-lg mb-2 text-center px-1">
                    <SingleFilm key={el.imdbID} singleFilm={el} />

                    </Col>
                )
            })}
        </Row>
    )
    
}

}

export default GenerateFilms