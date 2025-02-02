import Content from "./Content";
import Header from "./Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
function App() {
  return (
    <div className="flex flex-col justify-between  min-h-screen  ">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
