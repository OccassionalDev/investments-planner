class UsersController < ApplicationController
    def index 
        users = User.all 
        render json: users, include: ["investments"]
    end 

    def show
        user = User.find_by(id: params[:id])
        render json: {
            id: user.id,
            name: user.name,
            password_digest: user.password_digest,
            recovery_password_digest: user.recovery_password_digest,
            investments: user.investments,
            industries: user.investments.industries,
            industry_shares: user.investments.industry_shares
        }
    end 
    
    def create
        user = User.create(user_params)

        if user.save 
            render json: user, include: ["investments"]
        else 
            render json: { error: user.errors.full_messages }
        end 
    end 

    private 

    def user_params(*args)
        params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end 
end
