class CommentSerializer < ActiveModel::Serializer
  attributes :id, :workout_id, :user_id, :description

  belongs_to :user
  belongs_to :workout
end
