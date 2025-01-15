
import Content from "./Content"
import Header from "./Header"
import Footer from './components/Footer'
function App() {

  return (
    <div className='ml-[5%] mr-[5%] flex flex-col justify-between  min-h-screen  '>
    <Header/>
    <Content/>
    <Footer/>
    </div>
  ) 
}

export default App
