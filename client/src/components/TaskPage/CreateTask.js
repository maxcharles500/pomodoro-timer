import  React, {useState} from 'react'

import Modal from 'react-modal'


function CreateTask({currentUser, setTasks, tasks}) {
const [taskModalOpen, setTaskModalOpen] = useState(false)
const [title, setTitle] = useState('')

    const createTask = (e) => {
        e.preventDefault()
       const newTask = {
            title,
            "completed": false,
            "time_completed": " ",
            "user_id": currentUser.id
        }

        fetch(`/tasks`,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(newTask)
          })

        // fetch(`/users/${currentUser.id}`).then(res => res.json()).then(user => setTasks(user.tasks))
         
          setTaskModalOpen(false)
          setTasks([...tasks, newTask])
          
    }
         
    
  return (
      <div>
    <h1>TASKS</h1>
    <button onClick={() => setTaskModalOpen(true)}>+</button>
    
      <Modal isOpen={taskModalOpen} ariaHideApp={false}>
      <button onClick={() => setTaskModalOpen(false)}>X</button>
        <form onSubmit={createTask}>
        <p>Title</p>
          <input onChange={(e) => setTitle(e.target.value)}>
          </input>
          <button>submit</button>
        </form>
      </Modal>
    
    

    </div>
  )
}

export default CreateTask