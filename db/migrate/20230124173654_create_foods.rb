class CreateFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :foods do |t|
      t.integer :calories
      t.string :name
      t.string :time

      t.timestamps
    end
  end
end
