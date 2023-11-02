import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import ShowContent from "./components/ShowContent";
import Footer from "./components/Footer";
import ProfilePage from "./components/ProfilePage";
import SettingsPage from "./components/SettingsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tvshows from "./components/Tvshows";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="bg-default position-relative">
        <NavBar />
        <Routes>
          <Route element={<ShowContent />} path="/" />
          <Route element={<ProfilePage />} path="/profilepage" />
          <Route element={<SettingsPage />} path="/settingspage" />
          <Route element={<Tvshows />} path="/tvshows" />
          <Route element={<MovieDetail />} path="/moviedetail/:filmId" />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
