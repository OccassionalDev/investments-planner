class Investment < ApplicationRecord
  belongs_to :user

  validates_presence_of :name, :invest_type, :shares, :industry

  def self.industries
    self.all.pluck(:industry).uniq
  end 

  def self.industry_shares
    industries = self.industries
    shares_list = []

    industries.each do |industry|
      shares_list.push(self.where(:industry => industry).sum(:shares))
    end 

    return shares_list
  end 
end
