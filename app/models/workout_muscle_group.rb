class WorkoutMuscleGroup < ApplicationRecord
    belongs_to :workout
    belongs_to :muscle_group
end
