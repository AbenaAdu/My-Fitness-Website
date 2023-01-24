class CommentSerializer < ActiveModel::Serializer
  attributes :id, :workout_id, :user_id, :description
end
