import React from 'react'

function UserPage({currentUser}) {

    
  return (
    <div>
        <h1>{currentUser ? currentUser.username : "Please Log In"}</h1>
        <button>Logout</button>
        <button>Delete Account</button>
    </div>
  )
}

export default UserPage