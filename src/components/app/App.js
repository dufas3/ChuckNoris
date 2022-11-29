import Header from  "../header/Header";
import {Container} from "react-bootstrap";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Favorites from "../favorites/Favorites";
import Search from "../search/Search";
import Home from "../home/Home";


function App() {
  return (
    <Container>
      <Router>
         <Header/>
          <Container style={{marginTop: '80px'}}>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/my-jokes" element={<Favorites/>}/>
                  <Route path="/search" element={<Search/>}/>

              </Routes>
          </Container>
      </Router>
    </Container>
  );
}

export default App;
