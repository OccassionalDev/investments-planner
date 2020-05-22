class UsersController < ApplicationController
    def create
        user = User.create(user_params)

        if user.save 
            render json: user
        else 
            render json: { error: user.errors.full_messages }
        end 
    end 

    private 

    def user_params(*args)
        params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end 
end
