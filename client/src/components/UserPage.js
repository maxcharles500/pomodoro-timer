import React from 'react'

function UserPage({currentUser}) {

  
  return (
    <div>
        <h1>{currentUser ? currentUser.username : "Please Log In"}</h1>
    </div>
  )
}

export default UserPage