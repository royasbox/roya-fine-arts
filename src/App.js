import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Gallery from './pages/Gallery';
import About from './pages/About'

const routes = [
  { path: '/', element: <Home /> },
  { path: '/gallery', element: <Gallery /> },
  { path: '/about', element: <About /> },
];

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Routes>
            {routes.map(route => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
