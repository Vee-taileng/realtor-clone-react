import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Offers from './pages/Offers'
import SignIn from './pages/SignIn'

function App() {
  return (
    <Router >
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/offers' element={< Offers />} />
        <Route path='/sign-in' element={< SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
