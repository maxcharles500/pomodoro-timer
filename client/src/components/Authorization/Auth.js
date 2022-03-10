import React, {useState} from 'react'

function Auth({setCurrentUser,  setIsAuthenticated}) {
    const [username, setUsername] = useState('')
    
    const [password, setPassword] = useState('')
   
    const [errors, setErrors] = useState([])

    function onSignup(e){
        e.preventDefault()
        const user = {
             username,
            password
        }
       
        fetch(`/users`,{
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
             
            })
            
            
          } else {
            res.json()
            .then(json => setErrors(json.errors))
          }
        })
        
    }
    return (
        <> 
        <h1>Sign UP</h1>
        <form onSubmit={onSignup}>
        <label>
          Username
   
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
       
        <label>
         Password
    
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
       
        <input type="submit" value="Sign up!" />
      </form>
      {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
        </>
    )
}

export default Auth;