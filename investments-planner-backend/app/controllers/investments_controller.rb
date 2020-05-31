class InvestmentsController < ApplicationController  
    before_action :find_user, only: [:create]
    before_action :find_user_and_investment, only: [:update, :destroy]
    
    def create
        investment = @user.investments.create(investment_params)

        render json: {
            user: @user,
            new_investment: investment
        }
    end 

    def update
        if @investment.update(investment_params)
            render json: @user, include: ["investments"]
        else 
            render json: { error: @investment.errors.full_messages }
        end 
    end 

    def destroy
        @investment.destroy
        render json: @user, include: ["investments"]
    end 

    private 

    def find_user 
        @user = User.find_by(id: params[:user_id])
    end 

    def find_user_and_investment
        find_user
        @investment = @user.investments.find_by(id: params[:id])
    end 

    def investment_params(*args) 
        params.require(:investment).permit(:name, :invest_type, :industry, :shares)
    end 
end
