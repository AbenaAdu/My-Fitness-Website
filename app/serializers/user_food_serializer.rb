class UserFoodSerializer < ActiveModel::Serializer
  attributes :id, :food_id, :user_id
end
