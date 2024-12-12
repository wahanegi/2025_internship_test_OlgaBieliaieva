class Api::V1::PostsController < ApplicationController
  def index
    posts = Post.all.order(created_at: :desc)
    render json: posts
  end
end
