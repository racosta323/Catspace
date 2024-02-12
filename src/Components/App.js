import NavBar from "./NavBar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"

function App() {

const [cats, setCats] = useState()

useEffect(()=>{
  fetch("https://catspace.onrender.com/cats")
  .then(resp => resp.json())
  .then(data =>setCats(data))
  .catch(error=>console.log(error))
}, [])


  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <Outlet context={cats}/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
