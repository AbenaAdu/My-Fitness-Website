class WorkoutsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

    skip_before_action :check_user, only: :index

    def index
        workouts = Workout.all
        render json: workouts
    end

    def update
        workout = find_workout
        workout.update!(workout_params)
        render json: workout, status: :accepted
    end

    def destroy
        workout = find_workout
        workout.destroy
        render json: {}
    end

    def create
        workout = Workout.create!(addworkout_params)
        render json: workout, status: :created
    end


    private 

    def find_workout
        Workout.find(params[:id])
    end

    def workout_params
        params.permit(:fav)
    end

    def render_not_found_response
        render json: {error: "Workout not found"}, status: :not_found 
    end

    def render_invalid_response(invalid)
        render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def addworkout_params
        params.permit(:name, :image, :sets, :reps, :difficulty_level)
    end


end
