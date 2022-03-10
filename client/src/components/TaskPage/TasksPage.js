import React from 'react'
import CreateTask from './CreateTask'
import TaskList from './TaskList'
import CompletedList from './CompletedList'

function TasksPage({currentUser, setTasks, tasks, setActiveTasks, activeTasks, completedTasks, setCompletedTasks}) {
  return (
    <>
    <CreateTask currentUser={currentUser} setTasks={setTasks} tasks={tasks} />
    <TaskList tasks={tasks} currentUser={currentUser} setActiveTasks={setActiveTasks} activeTasks={activeTasks} completedTasks={completedTasks} setCompletedTasks={setCompletedTasks}/>
    </>
  )
}

export default TasksPage