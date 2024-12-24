class Api::V1::PostsController < ApplicationController
  before_action :authenticate_user!
  before_action :check_confirmation, only: [ :create ]
  def index
    posts = Post.all.order(created_at: :desc)
  render json: posts.as_json(include: { user: { only: [ :id, :name, :nickname ] } })
  end

  def create
    media_url = nil

    if params[:media].present?
      begin
        temp_file = params[:media].tempfile
        cloudinary_response = Cloudinary::Uploader.upload(temp_file.path, folder: "posts")
        media_url = cloudinary_response["secure_url"]
      rescue StandardError => e
        render json: { error: { message: "Failed to upload image", errors: e.message } }, status: :unprocessable_entity
        return
      end
    end

   post = Post.new(post_params)
   post.user = current_user
   post.media = media_url

   if post.save
      render json: {
      message: "Post created successfully",
      post: post.as_json.merge("media_url" => post.media)
     }, status: :created
   else
    Rails.logger.debug "Errors: #{post.errors.full_messages}"
     render json: { errors: post.errors.full_messages }, status: :unprocessable_entity
   end
  end

  private

  def post_params
    params.permit(:body)
  end

  def check_confirmation
    unless current_user&.confirmed?
      render json: { error: "You must confirm your email to access this resource" }, status: :forbidden
    end
  end
end
