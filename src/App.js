
import './App.css';
import Navigation from './components/Navigation';
import Market from './Market';
import { Navbar, Nav, Container, Button, Form, NavDropdown, FormControl } from 'react-bootstrap';
function App() {
  const me = 1;
  return (
    <div className="App">
      <header className="App-header">
       
        
        <Navigation>
test
        </Navigation>
        
        <Market>
          hi
        </Market>
       
        <div className = "home">
      
        </div>
      </header>
    </div>
  );
}

export default App;
