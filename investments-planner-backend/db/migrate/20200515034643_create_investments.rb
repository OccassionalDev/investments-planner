class CreateInvestments < ActiveRecord::Migration[6.0]
  def change
    create_table :investments do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :type_id
      t.integer :industry_id
      t.string :name
      t.integer :shares

      t.timestamps
    end
  end
end
