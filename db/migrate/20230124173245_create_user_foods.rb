class CreateUserFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :user_foods do |t|
      t.integer :food_id
      t.integer :user_id

      t.timestamps
    end
  end
end
