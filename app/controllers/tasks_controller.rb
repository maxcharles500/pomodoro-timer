class TasksController < ApplicationController
    
def index 
    tasks = Task.all
    render json: tasks 
end
def show
    task = find_task
    render json: task
end
def update 
    task = Task.find(params[:id])
    task.update!(task_params)
    
end
def create 
    new_task = Task.create!(task_params)
    if new_task.save 
    render json: new_task, status: :created
    else 
        render json: {error:task.errors.full_messages}, status: :unprocessable_entity 
    end

end 

private 

def task_params 
    params.permit(:title, :completed, :time_completed, :user_id)
 end
 def find_task
    Task.find(params[:id]) 
end

end
