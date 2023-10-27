import { Container } from "react-bootstrap"
import GenerateFilms from "./GenerateFilms"



const ShowContent = ()=>{

    return (
        <Container fluid>
            <h2 className="my-4">Harry Potter Saga</h2>
            <GenerateFilms keyWord="harry potter"/>
            <h2 className="my-4">Lord Of The Rings Saga</h2>
            <GenerateFilms keyWord="lord of the rings"/>
            <h2 className="my-4">Star Wars Saga</h2>
            <GenerateFilms keyWord="star wars"/>

        </Container>
        
    )
}

export default ShowContent