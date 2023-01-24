class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :workouts do |t|
      t.string :name
      t.string :image
      t.string :sets
      t.string :reps
      t.string :difficulty_level
      t.boolean :fav

      t.timestamps
    end
  end
end
