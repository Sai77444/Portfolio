import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutus from "./pages/Aboutus";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Layout from "./Layout/Layout";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}> 
      
        <Route path="/" element={<Homepage />} />
         <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/project" element={<Project />} />
           <Route path="/contact" element={<Contact/>} />
     </Route>
      
      
    )
  );

  return (
    
      <RouterProvider router={router} />
    
  );
}

export default App;