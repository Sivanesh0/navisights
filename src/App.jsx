import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Product from "./pages/Product";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='services' element={<Services />} />
        <Route path='product' element={<Product />} />
        <Route path='about' element={<About />} />
        <Route path='achievements' element={<Achievements />} />
      </Route>
    </Routes>
  );
}

export default App;
