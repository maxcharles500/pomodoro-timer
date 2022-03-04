// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import {useEffect, useState} from 'react'
import Auth from './Auth'
import Login from './Login'
import UserPage from './UserPage'
import Timers from './Timers'

function App() {
  
  const [errors, setErrors] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch("/auth")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(true);
          setCurrentUser(user);
        });
      }
    });

  

  },[]);

 
  // if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setCurrentUser={setCurrentUser} />;

  return (
    <>
    <h1>Focus</h1>
   <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} setCurrentUser={setCurrentUser}/>
   <Auth setIsAuthenticated={setIsAuthenticated} setCurrentUser={setCurrentUser} currentUser={currentUser}/>
  <UserPage currentUser={currentUser} />
  <Timers sampleCountdownMs={1500000}/>
    </>
  );
}

export default App;