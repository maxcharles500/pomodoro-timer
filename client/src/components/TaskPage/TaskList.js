import React from 'react'
import Task from './Task'
function TaskList({currentUser, tasks, setTasks, setActiveTasks, activeTasks, completedTasks, setCompletedTasks}) {


    const mappedTasks = () => {
        
        if (tasks){
            return tasks.map(task => {
                if(!activeTasks.includes(task) && !task.completed === true){
                    return <Task task={task} key={task.id} setActiveTasks={setActiveTasks} activeTasks={activeTasks} setATasks={setTasks} tasks={tasks} completedTasks={completedTasks} setCompletedTasks={setCompletedTasks} />
                }
                else{
                    
                }
                
            })
        }
       else{
          
       }
       
    }

   
  return (
    <div>
        {mappedTasks()}
    </div>
  )
}

export default TaskList