import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import PopularDestination from './Pages/Home/PopularDestination/PopularDestination';
import Login from './Pages/Login/Login';
import Checkout from './Pages/Checkout/Checkout';
import Register from './Pages/Register/Register';
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import About from './Pages/About/About';
import NotFound from './Pages/404/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/popular-destination" element={<PopularDestination></PopularDestination>} ></Route>
        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path="/about" element={<About></About>} ></Route>
        <Route path="/register" element={<Register></Register>} ></Route>
        <Route path="/service/:serviceId/:name/:about/:price" element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/checkout" element={
        <RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>} >         
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
