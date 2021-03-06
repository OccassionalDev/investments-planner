# Create Users
user_a = User.create(name: 'John Smith', email: 'js@js.com', password: 'js123', password_confirmation: 'js123')
user_b = User.create(name: 'Jane Doe', email: 'jd@jd.com', password: 'jd123', password_confirmation: 'jd123')
user_c = User.create(name: 'Demo', email: 'demo@demo.com', password: 'demo123', password_confirmation: 'demo123')

# Create Investments
user_a.investments.create(name: 'Google', invest_type: 'Stock', industry: 'IT Software and Services', shares: 13)
user_a.investments.create(name: 'Gold', invest_type: 'Commodity', industry: 'Gold', shares: 5)
user_a.investments.create(name: 'VCSH', invest_type: 'Bond', industry: 'Corporate Bond', shares: 18)
user_a.investments.create(name: 'Intel', invest_type: 'Stock', industry: 'AI and Robotics', shares: 10)
user_a.investments.create(name: 'Dunkin Donuts', invest_type: 'Stock', industry: 'Food and Beverage', shares: 15)