class ChangeColumnNameTypeToInvestType < ActiveRecord::Migration[6.0]
  def change
    rename_column :investments, :type, :invest_type
  end
end
