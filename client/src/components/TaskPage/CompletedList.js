import React, {useState} from 'react'
import Task from './Task'

function CompletedList({tasks, setActiveTasks, activeTasks, completedTasks, setCompletedTasks }) {
    const mappedTasks = () => {
        console.log(tasks)
        if (tasks){
            return tasks.map(task => {
                if(!!task.completed == true){
                    return <Task task={task} key={task.id} setActiveTasks={setActiveTasks} activeTasks={activeTasks} completedTasks={completedTasks} setCompletedTasks={setCompletedTasks}/>
                }
                else{
                   
                }    
               
                
            })
        }
       else{
           return <Task task={{title : "login/signup"}} />
       }
       console.log(tasks)
    }
      
      
  return (
      <div>
        <h1>Completed Tasks</h1>
        <div>{mappedTasks()}</div>
      </div>
  

  )
}

export default CompletedList