require 'rails_helper'

RSpec.describe "User auth", type: :request do
  let!(:user) { User.create!(name: "John", email: "john@gmail.com", password: "12345678", confirmed_at: Time.now) }

  describe "POST /users" do
    it "register with valid credentials" do
      post user_registration_path, params: { user: { name: "John", email: "john1@gmail.com", password: "12345678", password_confirmation: "12345678" } }
      expect(response).to have_http_status(:created)
    end
  end

  describe "POST /users/sign_in" do
    it "signs in with valid credentials" do
      post user_session_path, params: { user: { email: user.email, password: "12345678" } }
      expect(response).to have_http_status(:ok)
    end
    it "does not sign with invalid credentials" do
      post user_session_path, params: { user: { email: user.email, password: "wrongpassword" } }
      expect(response).to have_http_status(:unprocessable_entity)
    end
  end

  describe "DELETE /users/sign_out" do
    it "signs out the user" do
      sign_in user
      delete destroy_user_session_path
      expect(response).to have_http_status(:no_content)
    end
  end
end
