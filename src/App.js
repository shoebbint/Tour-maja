import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import PopularDestination from './Pages/Home/PopularDestination/PopularDestination';
import Login from './Pages/Login/Login';
import Checkout from './Pages/Checkout/Checkout';

function App() {
  return (
    <div className="App">
<Header></Header>
<Routes>
<Route path="/" element={<Home></Home>} ></Route>
<Route path="/popular-destination" element={<PopularDestination></PopularDestination>} ></Route>
<Route path="/login" element={<Login></Login>} ></Route>
<Route path="/checkout" element={<Checkout></Checkout>} ></Route>

</Routes>
<Footer></Footer>
    </div>
  );
}

export default App;
