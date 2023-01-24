class User < ApplicationRecord
    has_secure_password
    
    has_many :comments
    has_many :workouts, through: :comments

    has_many :user_foods
    has_many :foods, through: :user_foods

    validates :username, presence: true
    validates :username, uniqueness: true
    validates :password, presence: true
    validates :email, presence: true
    validates :email, uniqueness: true
end
