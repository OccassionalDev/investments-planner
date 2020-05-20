class AddColumnTypeToInvestments < ActiveRecord::Migration[6.0]
  def change
    add_column :investments, :type, :string
  end
end
