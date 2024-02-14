import NavBar from "./NavBar"
import Footer from "./Footer"
import { Outlet, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"


function App() {

  const navigate = useNavigate()

const [cats, setCats] = useState([]); 
const [searchTerm, setSearchTerm] = useState('');


  useEffect(()=>{
    fetch("https://catspace.onrender.com/cats")
    .then(resp => resp.json())
    .then(data =>setCats(data))
    .catch(error=>console.log(error))
  }, [])

  const deleteCat = (event) => {
    const catId = event.target.value
    const isConfirmed = "Are you sure you want to delete this beautiful feline?"

    if (window.confirm(isConfirmed) == true){
      fetch(`https://catspace.onrender.com/cats/${catId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(data =>{
          let newCats = [...cats]
          const index = cats.indexOf(catId)
          const removed = newCats.splice(index,1)
          setCats(newCats)
          navigate("/")
          }
        )
    } 
  }     


const context = {
  allCats: cats,
  deleteCat: deleteCat
  
}

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
