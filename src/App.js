import "./App.css";

import { Route, Routes } from "react-router-dom";

import About from "./pages/about";
import Home from "./pages/home";
import NotFound from "./pages/404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
