import { useState } from 'react';
import CatCard from './CatCard.js';
import UploadAvatar from './UploadAvatar.js';

function Home() {

    //in the future, we will fetch the cat data, but for now i'll make a mock array

    const mockCats = [
        {
            id: 1,
            name: "Fluffykins",
            image: "https://www.fourpaws.com/-/media/Project/OneWeb/FourPaws/Images/articles/cat-corner/small-cat-breeds/munchkin-cropped.jpg",
        },
        {
            id: 2,
            name: "Costco Hotdog",
            image: "https://www.catbreedslist.com/stories-images/funny-cat-names-with-meaning-400x225.jpg",
        },
        {
            id: 3,
            name: "Petuccine Alfriendo",
            image: "https://catamazing.com/cdn/shop/files/catshark.jpg?v=1649869148",
        },
        {
            id: 4,
            name: "Magnus",
            image: "https://i.redd.it/bdrgb54ad0521.jpg",
        },
        {
            id: 5,
            name: "Petuccine Alfriendo",
            image: "https://catamazing.com/cdn/shop/files/catshark.jpg?v=1649869148",
        },
        {
            id: 6,
            name: "Magnus",
            image: "https://i.redd.it/bdrgb54ad0521.jpg",
        },
        {
            id: 3,
            name: "Petuccine Alfriendo",
            image: "https://catamazing.com/cdn/shop/files/catshark.jpg?v=1649869148",
        },
        {
            id: 4,
            name: "Magnus",
            image: "https://i.redd.it/bdrgb54ad0521.jpg",
        }
    ]

    // const [dbCat, setDbCat] = useState("")
    // fetch("https://cataas.com/cat?position=top")
    // // .then(r=>r.json())
    // .then(cat => {setDbCat(cat.url)})
    // // .catch(err => console.log(err))
    
    return (
        <>  
            <h2>View a cat's profile!</h2>
            {/* im testing uploadavatar below but it will eventually be placed in the addcat page not this page */}
            <UploadAvatar /> 
            <div className="cat-cards">
                {mockCats.map(cat => <CatCard key={cat.id} name={cat.name} image={cat.image} />)}
            </div>
        </>
    )
}

export default Home;