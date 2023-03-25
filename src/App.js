import { Route, Routes } from "react-router-dom";

import Container from "react-bootstrap/Container";

import appStyles from "./App.module.css";
import NavBar from "./components/navbar/NavBar";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className={appStyles.App}>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" render={() => <Home />} />
          <Route path="/contact" render={() => <Contact />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
