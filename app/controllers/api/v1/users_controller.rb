class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user!

  def current
    if current_user
      render json: { user: current_user }, status: :ok
    else
      render json: { error: "Unauthorized", message: "You need to log in" }, status: :unauthorized
    end
  end
end
