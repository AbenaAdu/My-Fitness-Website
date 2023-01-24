class FoodSerializer < ActiveModel::Serializer
  attributes :id, :calories, :name, :time
end
