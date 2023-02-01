class Food < ApplicationRecord
    has_many :user_foods
    has_many :users, through: :user_foods

    validates :name, presence: true
    validates :calories, presence: true
    validates :time, presence: true
end
