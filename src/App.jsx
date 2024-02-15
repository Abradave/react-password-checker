import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'




function App() {
 

  return (
    <>
      <Header />
      <Main />
      {/*todo: generate current date*/}
      <Footer name='AbraDave' date='2024.02.15.'/>
    </>
  )
}

export default App
