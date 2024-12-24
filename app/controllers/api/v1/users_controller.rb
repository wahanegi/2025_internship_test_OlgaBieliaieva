class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user!

  def current
    if current_user
      render json: { user: { id: current_user.id,
      email: current_user.email,
      name: current_user.name,
      nickname: current_user.nickname,
      confirmed: current_user.confirmed? } }, status: :ok
    else
      render json: { error: "Unauthorized", message: "You need to log in" }, status: :unauthorized
    end
  end
end
