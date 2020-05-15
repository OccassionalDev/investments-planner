# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Create Users
user_a = User.create(name: 'John Smith', email: 'js@js.com', password: 'js123', password_confirmation: 'js123')
user_b = User.create(name: 'Jane Doe', email: 'jd@jd.com', password: 'jd123', password_confirmation: 'jd123')
user_c = User.create(name: 'Demo', email: 'demo@demo.com', password: 'demo123', password_confirmation: 'demo123')

# Create Types
type_stock = Type.create(name: 'Stock')
type_bond = Type.create(name: 'Bond')
type_mining_and_metals = Type.create(name: 'Crypto')
type_certificate = Type.create(name: 'Certificate of Deposit')
type_exchange_trade = Type.create(name: 'Exchange-Traded Fund')
type_mutal = Type.create(name: 'Mutual Fund')
type_annuities = Type.create(name: 'Annuity')
type_commodity = Type.create(name: 'Commodity')

# Create Industries
industry_entertainment = Industry.create(name: "Entertainment")
industry_tech = Industry.create(name: "IT Software abd Services")
industry_crypto = Industry.create(name: "Cryptocurrency")
industry_food = Industry.create(name: "Food and Beverage")
industry_ai = Industry.create(name: 'AI and Robotics')
industry_health = Industry.create(name: 'Pharma and Health Care')
industry_education = Industry.create(name: 'Educational Services')