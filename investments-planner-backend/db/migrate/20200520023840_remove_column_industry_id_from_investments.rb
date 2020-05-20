class RemoveColumnIndustryIdFromInvestments < ActiveRecord::Migration[6.0]
  def change
    remove_column :investments, :industry_id
  end
end
