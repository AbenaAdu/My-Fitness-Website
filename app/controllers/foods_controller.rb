class FoodsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response
    
    def index
        foods = Food.all
        render json: foods
    end 

    def create
        food = Food.create!(food_params)
        render json: food, status: :created
    end

    private

    def render_invalid_response(invalid)
        render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def food_params
        params.permit(:name, :calories, :time)
    end
end
