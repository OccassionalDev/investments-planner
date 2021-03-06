Rails.application.routes.draw do
  resources :users, only: [:index, :create, :show] do 
    resources :investments, only: [:create, :update]
  end 
  resources :investments, only: [:destroy]
  resources :sessions, only: [:create, :destroy]

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
