class CommentsController < ApplicationController
    skip_before_action :check_user, only: :index
    def index
        comments = Comment.all
        render json: comments
    end
end
