import App from "./Components/App"
import Home from "./Components/Home"
import About from "./Components/About"
import CatProfile from "./Components/CatProfile"
import Form from './Components/AddACat'


const routes = [
    {
        path: "/",
        element:<App />,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/profile",
                element: <CatProfile/>
            },
            {
                path: "/addacat",
                element: <Form/>
            }
        ]
    }
]

export default routes