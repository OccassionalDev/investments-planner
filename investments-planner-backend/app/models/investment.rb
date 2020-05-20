class Investment < ApplicationRecord
  belongs_to :user

  validates_presence_of :name, :invest_type, :shares, :industry
end
