class Description < ApplicationRecord
    has_many :workout_descriptions
    has_many :workouts, through: :workout_descriptions
end
