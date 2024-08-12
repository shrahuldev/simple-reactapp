import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
function App() {
  return (
    <>
 <Router>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/user" element={<About/>}>
      <Route path="services" element={<Services/>}></Route>
      <Route path="contact" element={<Contact/>}></Route>
    </Route>
  </Routes>
 </Router>
     </>
  );
}
export default App;