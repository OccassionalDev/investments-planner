class UsersController < ApplicationController
    def create
    end 

    private 

    def user_params(*args)
        params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end 
end
