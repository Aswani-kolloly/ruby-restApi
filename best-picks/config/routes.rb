Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  resources :brand
  resources :user
  #resources :product
  post 'login', to: 'login#authenticate'
  put 'login', to: 'login#refreshToken'
  
  
end

