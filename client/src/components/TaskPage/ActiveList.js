import React from 'react'
import Task from './Task'

function ActiveList({currentUser, tasks, setTasks, setActiveTasks, activeTasks, completedTasks, setCompletedTasks}) {
    const mappedTasks = () => {
        
        if (activeTasks){
            return activeTasks.map(task => {
                if(!task.completed == true){
                    return <Task task={task} key={task.id} setActiveTasks={setActiveTasks} activeTasks={activeTasks}  tasks={tasks} setTasks={setTasks} completedTasks={completedTasks} setCompletedTasks={setCompletedTasks}/>
                }
                else{
                   
                }    
               
                
            })
        }
       else{
           return <Task task={{title : "login/signup"}} />
       }
      
    }
  return (
      <>
      <h1>{activeTasks ? "Active Tasks" : ""}</h1>
    <div>{mappedTasks()}</div>
    </>
    
    
  )
}

export default ActiveList