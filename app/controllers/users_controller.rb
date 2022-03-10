class UsersController < ApplicationController
    skip_before_action :authorized, only: :create

    def show
        current_user = User.find(session[:user_id]) 
        render json: current_user
    end
    def index
        users = User.all
        render json: users 
    end
    def create
        user = User.create!(user_params)
        render json: user, status: :created 
    rescue ActiveRecord::RecordInvalid => invalid 
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity 
    end 
   

    private 

    def user_params 
        params.permit(:username, :password)
    end
end
