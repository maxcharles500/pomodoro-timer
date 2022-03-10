Rails.application.routes.draw do
  
  resources :tasks
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  post '/login', to: 'sessions#create'
  post '/auth', to: 'users#show'
end
