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