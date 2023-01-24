class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :sets, :reps, :difficulty_level, :fav

  has_many :descriptions
  has_many :comments
end
