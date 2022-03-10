import React from 'react'

function Task({task, setActiveTasks, activeTasks, setTasks, tasks}) {
const startTaskClick = () => {
    if(!activeTasks.includes(task)){
        setActiveTasks([...activeTasks, task])
    }
    else{
        console.log('nope already active')
    }
    
}
let timeCompleted = task.time_completed

const filteredTasks = (t) => {
  const newActiveTasks = activeTasks.filter(task =>  task.title !== t.title)
  setActiveTasks(newActiveTasks)
console.log(newActiveTasks)
}
const filter = (t) => {
//     const newTasks = tasks.filter(task =>  task.title !== t.title)
//   setTasks(newTasks)

}
console.log(task)

const finishTaskClick = () => {
console.log('task' , task)
    let date = Date()
    const patchTask = {
        completed: true,
        time_completed: date.toString(),
    }

    fetch(`/tasks/${task.id}`, {
            method: 'PATCH',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(patchTask)
        })
        filteredTasks(task)
        
}
  return (
      <>
    <h2>{task.title}</h2>
    
    <button onClick={startTaskClick}>{task.completed ? 'Comepleted:' : 'Start'}</button>
    <button onClick={finishTaskClick }>{task.completed ? timeCompleted : 'Done'}</button>
    </>
  )
}

export default Task 