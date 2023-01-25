Rails.application.routes.draw do
  
  resources :foods, only: [:index, :create]
  resources :descriptions
  resources :workout_descriptions
  resources :user_foods
  resources :comments, only: [:index]
  resources :users, only: [:create]
  resources :muscle_groups
  resources :workout_muscle_groups
  resources :workouts, only: [:index]
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
