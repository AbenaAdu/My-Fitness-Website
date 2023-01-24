class CreateWorkoutDescriptions < ActiveRecord::Migration[6.1]
  def change
    create_table :workout_descriptions do |t|
      t.integer :description_id
      t.integer :workout_id

      t.timestamps
    end
  end
end
