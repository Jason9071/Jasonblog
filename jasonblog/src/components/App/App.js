import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

import About from '../About/About'
import Home from '../Home/Home'
import gif from '../../images/background.gif'
//import Topics from '../Topics/Topics'

const useStyle = () => {
  return {
    pixelFont: {
      "font-family": 'VT323'
    },
    gifImage:{
      width: "100%", 
      height : "100%",
      position : "fixed",
      "object-fit" : "cover",
      "z-index" : "-1"
    }
  }
}

const App = () => {
  const appStyle = useStyle()

  return (
    <>
    <img src={gif} style={appStyle.gifImage}></img>
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={appStyle.pixelFont} href="/">Jason's World</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse >
            <Nav className="me-auto">
              <Nav.Link style={appStyle.pixelFont} href="/about">About Me</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </Router>
    </>
  )
}

export default App
