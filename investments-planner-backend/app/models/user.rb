class User < ApplicationRecord
    has_secure_password
    has_secure_password :recovery_password, validations: false

    validates_presence_of :name, :email
    validates_uniqueness_of :email

    has_many :investments
    has_many :types
    has_many :industries
    has_many :categories, through: :industries, source: investment

end
