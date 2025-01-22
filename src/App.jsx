
import Content from "./Content"
import Header from "./Header"
import Footer from './components/Footer'
import {BrowserRouter ,Routes , Route} from "react-router-dom"
import Signin from "./components/Signin"
import Signup from "./components/Signup"
function App() {
  return (
    <div className='ml-[5%] mr-[5%] flex flex-col justify-between  min-h-screen  '>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  ) 
}

export default App
