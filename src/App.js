import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./PAGES/Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductPage from "./PAGES/Product/ProductPage";
import About from "./PAGES/Extra/About";
import Contact from "./PAGES/Extra/Contact";
import Login from "./PAGES/Auth/Login";
import Signup from "./PAGES/Auth/Signup";
import ForgotPassword from "./PAGES/Auth/ForgotPassword";
import Cart from "./PAGES/Cart/Cart";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:prodid" element={<ProductPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
