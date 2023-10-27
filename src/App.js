import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import ShowContent from "./components/ShowContent";
import Footer from "./components/Footer";
import ProfilePage from "./components/ProfilePage";
import SettingsPage from "./components/SettingsPage";
import React, { useState } from "react";
function App() {
  const [currentView, setCurrentView] = useState("home");
  const handleChangeCurrentView = (viewInput) => setCurrentView(viewInput);

  return (
    <Container fluid className="bg-default position-relative">
      <NavBar handleChangeCurrentView={handleChangeCurrentView} />
      {currentView === "home" && <ShowContent />}
      {currentView === "profile" && <ProfilePage />}
      {currentView === "settings" && <SettingsPage />}
      <Footer />
    </Container>
  );
}

export default App;
