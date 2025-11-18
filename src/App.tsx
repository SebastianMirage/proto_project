import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Productos from "./pages/Productos";
import Devs from "./pages/Devs";
import Getstarted from "./pages/Getstarted";
import Dashboard from "./pages/Dashboard";
import HomeLayout from "./layouts/HomeLayout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />}/>
          <Route path="/faq" element={<FAQ />} />
          <Route path="/products" element={<Productos />} />
          <Route path="/devs" element={<Devs />} />
          </Route>
          
          <Route path="/getstarted" element={<Getstarted />} > </Route>
          <Route path="/dashboard" element={<Dashboard />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App