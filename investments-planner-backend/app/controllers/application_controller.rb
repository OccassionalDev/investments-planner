class ApplicationController < ActionController::API
    def user_hash(user)
        {
            id: user.id,
            name: user.name,
            password_digest: user.password_digest,
            recovery_password_digest: user.recovery_password_digest,
            investments: user.investments,
            industries: user.investments.industries,
            industry_shares: user.investments.industry_shares
        }
    end 
end
