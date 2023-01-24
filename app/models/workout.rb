class Workout < ApplicationRecord
    has_many :workout_muscle_groups
    has_many :muscle_groups, through: :workout_muscle_groups

    has_many :comments
    has_many :users, through: :comments

    has_many :workout_descriptions
    has_many :descriptions, through: :workout_descriptions
end
