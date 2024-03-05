import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Container from "./paginas/container";
import Home from "./paginas/home";
import Perguntas from "./paginas/perguntas";

function App() {
  return (
    <div className="App">
      <Router>        
        <Container >
          <Routes>
            <Route exact path="/" element= {< Home />}/>
            <Route path="/perguntas" element= {<Perguntas />}/>
          </Routes>
        </Container>        
      </Router>
    </div>
  );
}

export default App;
