import Home from './Home.js';
import Profile from './Profile.js';
import '../App.css';

function App() {
  return (
    <>
      {/* the header/navbar will go here as the first child/children */}
      {/* in the future, we will use outlet context to provide data */}
     <Profile /> 
    </>
  );
}

export default App;
