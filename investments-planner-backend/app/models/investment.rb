class Investment < ApplicationRecord
  belongs_to :user
  has_many :types
  has_many :industries
end
