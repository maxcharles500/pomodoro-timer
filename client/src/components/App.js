// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import {useEffect, useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './Authorization/Auth'
import Login from './Authorization/Login'
import UserPage from './UserPage'
import Timers from './Timers/Timers'
import TasksPage from './TaskPage/TasksPage'
import ActiveList from './TaskPage/ActiveList'
import CompletedList from './TaskPage/CompletedList'
import Navigation from './Navigation'
function App() {
  
  const [errors, setErrors] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [tasks, setTasks] = useState(null);
  const [activeTasks, setActiveTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])

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

  

  },[currentUser]);

 
   if (!isAuthenticated) return <>
   <Login error={'please login'}  setTasks={setTasks} 
   tasks={tasks} 
   setIsAuthenticated={setIsAuthenticated} 
   isAuthenticated={isAuthenticated}  
   currentUser={currentUser} 
   setCurrentUser={setCurrentUser} />
   <Auth setIsAuthenticated={setIsAuthenticated} 
   setCurrentUser={setCurrentUser} />
   </> 

  return (
    <>
    <Router>
      <Navigation />
    
    
    <Routes>
<Route path='/user' 
element={<UserPage currentUser={currentUser} />} 
/>
 <Route path='/Home' element={<>
  <ActiveList 
  tasks={tasks}
  setTasks={setTasks}
  activeTasks={activeTasks}
  setActiveTasks={setActiveTasks}
  completedTasks={completedTasks}
  setCompletedTasks={setCompletedTasks}/>
  <Timers sampleCountdownMs={1500000}/>
  <TasksPage 
  completedTasks={completedTasks}
  setCompletedTasks={setCompletedTasks}
  setTasks={setTasks} 
  tasks={tasks} 
  currentUser={currentUser} 
  activeTasks={activeTasks}
  setActiveTasks={setActiveTasks}
  
  />

 </>}
 />
 <Route path='/completed' element={<>
  <CompletedList 
   tasks={tasks} 
   currentUser={currentUser} 
   setActiveTasks={setActiveTasks} 
   activeTasks={activeTasks} 
   completedTasks={completedTasks}
  setCompletedTasks={setCompletedTasks}/>
 </>}/>
   
   </Routes>
   </Router>
    </>
  );
}

export default App;