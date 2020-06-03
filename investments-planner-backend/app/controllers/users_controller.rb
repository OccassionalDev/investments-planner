class UsersController < ApplicationController
    def index 
        users = User.all 
        render json: users, include: ["investments"]
    end 

    def show
        user = User.find_by(id: params[:id])
        render json: user_hash(user)
    end 
    
    def create
        user = User.create(user_params)

        if user.save 
            render json: user_hash(user)
        else 
            render json: { error: user.errors.full_messages }
        end 
    end 

    private 

    def user_params(*args)
        params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end 
end
