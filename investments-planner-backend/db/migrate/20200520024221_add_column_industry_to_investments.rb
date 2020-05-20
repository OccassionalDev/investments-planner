class AddColumnIndustryToInvestments < ActiveRecord::Migration[6.0]
  def change
    add_column :investments, :industry, :string
  end
end
