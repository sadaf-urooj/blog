Rails.application.routes.draw do

    
  get 'comments/index'
  root 'home#index'
  devise_for :users

   resources :posts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

   resources :posts do
    resources :comments, controller: 'posts/comments'
  end 


end
