import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import ShowContent from "./components/ShowContent";
import Footer from "./components/Footer";
function App() {
  return (
    <Container fluid className="bg-default position-relative">
      <NavBar />
      <ShowContent />
      <Footer />
    </Container>
  );
}

export default App;
