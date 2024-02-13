import NavBar from "./NavBar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"

function App() {

const [cats, setCats] = useState([]); 
const [searchTerm, setSearchTerm] = useState('');


useEffect(()=>{
  fetch("https://catspace.onrender.com/cats")
  .then(resp => resp.json())
  .then(data =>setCats(data))
  .catch(error=>console.log(error))
}, [])


  return (
    <>
      <header>
        <NavBar cats={cats} setSearchTerm={setSearchTerm}/>
      </header>
      <main>
      <Outlet context={{ cats: cats.filter(cat => cat.name.toLowerCase().includes(searchTerm.toLowerCase())), searchTerm }}/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
