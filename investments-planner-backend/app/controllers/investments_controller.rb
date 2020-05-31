class InvestmentsController < ApplicationController    
    def create
        user = User.find_by(id: params[:user_id])
        investment = user.investments.create(investment_params)

        render json: {
            user: user,
            new_investment: investment
        }
    end 

    def update
        user = User.find_by(id: params[:user_id])
        investment = user.investments.find_by(id: params[:investment_id])

        if investment.update(investment_params)
            render json: user
        else 
            render json: { error: investment.errors.full_messages }
        end 
    end 

    def destroy
        user = User.find_by(id: params[:user_id])
        investment = user.investments.find_by(id: params[:investment_id])
        investment.destroy

        render json: user, include: ["investments"]
    end 

    private 

    def investment_params(*args) 
        params.require(:investment).permit(:name, :invest_type, :industry, :shares)
    end 
end
