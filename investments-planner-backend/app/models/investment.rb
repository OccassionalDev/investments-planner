class Investment < ApplicationRecord
  belongs_to :user

  validates_presence_of :name, :invest_type, :shares, :industry

  def self.industries
    self.all.pluck(:industry).uniq
  end 
end
