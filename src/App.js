import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Container from "./paginas/container";
import Home from "./paginas/home";

function App() {
  return (
    <div className="App">
      <Router>        
        <Container >
          <Routes>
            <Route exact path="/" element= {< Home />}/>            
          </Routes>
        </Container>        
      </Router>
    </div>
  );
}

export default App;
