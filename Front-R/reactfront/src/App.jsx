import { BrowserRouter as  Router,Route,Routes} from 'react-router-dom';
import About from './components/About'
import Users from './components/Users'
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="container p-4">
          <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/" element={<Users/>} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
