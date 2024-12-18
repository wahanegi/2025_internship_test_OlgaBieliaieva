Rails.application.routes.draw do
  devise_for :users, defaults: { format: :json }, controllers: {
    sessions: "users/sessions",
    registrations: "users/registrations"
  }
  mount LetterOpenerWeb::Engine, at: "/letter_opener" if Rails.env.development?
  namespace :api do
    namespace :v1 do
      get "posts/index"
      get "users/current_user", to: "users#current"
    end
  end
  root "homepage#index"
  get "/*path" => "homepage#index"
  get "up" => "rails/health#show", as: :rails_health_check
end
