import React, {useState} from 'react'
import Auth from './Auth'


function Login({setCurrentUser, setIsAuthenticated, isAuthenticated, setTasks, tasks, currentUser }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
   
    const [error, setError] = useState([])

    function onLogin(e){
        e.preventDefault()
        const user = {
            username,
            password
        }
       
        fetch(`/login`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
          if(res.ok){
            res.json()
            .then(user=>{
              setCurrentUser(user)
              setIsAuthenticated(true)
              setTasks(user.tasks)
              
            })
            
          } else {
            res.json()
            .then(json => setError(json.error.login))
          }
        })
       
    }
    return (
      
        <> 
       
        <h1>Login</h1>
        <form onSubmit={onLogin}>
        <label>
          Username
   
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
         Password
    
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
       
        <input type="submit" value="Login!" href='#home'/>
      </form>
      {error?<div>{error}</div>:null}
      {/* <Auth setCurrentUser={setCurrentUser} setIsAuthenticated={setCurrentUser}/> */}
        </>
    )
}

export default Login;