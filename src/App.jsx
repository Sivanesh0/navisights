import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Product from "./pages/Product";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Layout from "./components/Layout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='services' element={<Services />} />
        <Route path='product' element={<Product />} />
        <Route path='about' element={<About />} />
        <Route path='achievements' element={<Achievements />} />
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
