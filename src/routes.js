import App from "./Components/App"
import Home from "./Components/Home"
import About from "./Components/About"
import CatProfile from "./Components/CatProfile"
import Form from './Components/AddACat'
import ErrorPage from "./Components/ErrorPage"


const routes = [
    {
        path: "/",
        element:<App />,
        errorElement: <ErrorPage/>,
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
                path: "/profile/:id",
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