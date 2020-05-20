class RemoveColumnTypeIdFromInvestments < ActiveRecord::Migration[6.0]
  def change
    remove_column :investments, :type_id
  end
end
