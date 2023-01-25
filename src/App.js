import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Navbar1 from "./components/Navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form/Form";
import GenerateUrl from "./components/GenerateUrl/GenerateUrl";
import { StrictMode } from "react";

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <div className="flex flex-col justify-between min-h-screen">
          <div className="flex flex-col items-center">
            <Navbar1 />
            <Routes>
              <Route path="/" element={<GenerateUrl />} />
              <Route path="/account/:bahasa/" element={<Form />} />
              <Route path="/account/signin" element={<Login />} />

              <Route path="*" element={<h1>page not found</h1>} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
