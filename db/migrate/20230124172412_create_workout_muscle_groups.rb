class CreateWorkoutMuscleGroups < ActiveRecord::Migration[6.1]
  def change
    create_table :workout_muscle_groups do |t|
      t.integer :workout_id
      t.integer :muscle_group_id

      t.timestamps
    end
  end
end
