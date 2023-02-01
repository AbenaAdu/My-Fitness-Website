class Workout < ApplicationRecord
    has_many :workout_muscle_groups
    has_many :muscle_groups, through: :workout_muscle_groups

    has_many :comments
    has_many :users, through: :comments

    has_many :workout_descriptions
    has_many :descriptions, through: :workout_descriptions

    validates :name, presence: true
    validates :image, presence: true
    validates :sets, presence: true
    validates :reps, presence: true
    validates :difficulty_level, presence: true
    validates :difficulty_level, inclusion: { in: ["Beginner", "Intermediate", "Advanced"], message: "must include Beginner, Intermediate, or Advanced"  }
end
