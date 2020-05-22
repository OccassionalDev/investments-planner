class SessionsController < ApplicationController
    def create
        user = User.find_by_email(params[:user][:email])

        if user && user.authenticate(params[:user][:password])
            render json: user, include: ["investments"]
        else 
            render json: { error: "Invalid email or password" }
        end 
    end 

    def destroy
    end 
end 