# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  before_action :configure_sign_in_params, only: [ :create ]

  respond_to :json

  private

  def respond_with(resource, _opts = {})
    if resource.persisted?
      render json: { message: "Logged in successfully", user: { id: resource.id,
      email: resource.email,
      name: resource.name,
      nickname: resource.nickname,
      confirmed: resource.confirmed? } }, status: :ok
    else
      render json: { error: "Login failed" }, status: :unauthorized
    end
  end

  def respond_to_on_destroy
    head :no_content
  end

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  # def create
  #   super
  # end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_in_params
    devise_parameter_sanitizer.permit(:sign_in, keys: [ :name, :nickname ])
  end
end
