class WorkoutsController < ApplicationController
    skip_before_action :check_user, only: :index

    def index
        workouts = Workout.all
        render json: workouts
    end
end
