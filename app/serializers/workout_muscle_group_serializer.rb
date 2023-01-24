class WorkoutMuscleGroupSerializer < ActiveModel::Serializer
  attributes :id, :workout_id, :muscle_group_id
end
