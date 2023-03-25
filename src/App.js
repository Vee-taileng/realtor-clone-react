import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Offers from './pages/Offers'
import SignIn from './pages/SignIn'
import Header from './component/Header'
import PrivateRoute from './component/PrivateRoute'
import ForgotPassword from './pages/ForgotPassword'
import SignUp from './pages/SignUp'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './pages/Profile';
import CreateListing from './pages/CreateListing';


function App() {
  return (
    <>
      <Router >
        <Header />
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/offers' element={< Offers />} />
          <Route path='/sign-in' element={< SignIn />} />
          <Route path='/forgot-password' element={< ForgotPassword />} />
          <Route path='/sign-up' element={< SignUp />} />
          <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={< Profile />} />
          </Route>
          <Route path='/create-listing' element={< CreateListing />} />
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
    </>
  );
}

export default App;
