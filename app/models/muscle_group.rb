class MuscleGroup < ApplicationRecord
    has_many :workout_muscle_groups
    has_many :workouts, through: :workout_muscle_groups
end
