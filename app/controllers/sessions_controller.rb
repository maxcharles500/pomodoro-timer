class SessionsController < ApplicationController
    skip_before_action :authorized, only: :create
    def create 
        user = User.find_by(username: params[:username]) 

        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            
            render json: user, status: :ok 
        else 
            render json: {error: {login: "Invalid password and/or Username"}}, status: :unauthorized
        end
    end
end
