import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login'
import Cart from './pages/Cart';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Navigate
} from "react-router-dom";

function App() {
  // dummy variable
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products/:category" element={<ProductList />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        {/* use navigate in react router dom v6. change element location if logged in */}
        <Route path="/login" element={user ? <Navigate to="/" replace /> :  <Login />}  />
        <Route path = "/register" element={user ? <Navigate to="/" replace /> :  <Register />} />
      </Routes>
    </Router>
  );
}

export default App;
