import NavBar from "./NavBar"
import Footer from "./Footer"
import { Outlet, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"


function App() {

  const navigate = useNavigate()

  const [cats, setCats] = useState()

  useEffect(()=>{
    fetch("https://catspace.onrender.com/cats")
    .then(resp => resp.json())
    .then(data =>setCats(data))
    .catch(error=>console.log(error))
  }, [])

  const deleteCat = (event) => {
    const catId = event.target.value
    console.log(catId)
    const isConfirmed = "Are you sure you want to delete this beautiful feline?"

    fetch(`https://catspace.onrender.com/cats/${catId}`, {
              method: 'DELETE',
              headers: {
                  'Content-Type': 'application/json'
              }
      }
    )
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        let newCats = [...cats]
        const index = cats.indexOf(catId)
        console.log(index)
        console.log(newCats)
        const removed = newCats.splice(index,1)
        setCats(newCats)
        navigate("/")
        }
    
    )
  }     
          // console.log(cats)
          // setCats(cats)
          
      
      // if (window.confirm(isConfirmed) == true) {
          

      //       if (response.ok) {
      //         setCats((newCats)=>{
      //           console.log(newCats)
      //           return [...newCats]
      //         })
      //         navigate('/');
      //     } else {
      //       alert('There was an issue deleting this feline.');
      //     }
      //     })
      //     .catch(error => console.log('Error:', error));
      // }




const context = {
  allCats: cats,
  deleteCat: deleteCat
  
}

  return (
    <>
      <header>
        <NavBar cats={cats}/>
      </header>
      <main>
        <Outlet context={context}/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
