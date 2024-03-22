class UserController < ApplicationController  
    skip_before_action :authenticate_request, only: %i[ create ]
    def create
        user = User.new
        user.name = params[:name]
        user.email = params[:email]
        user.password = params[:password]

        if user.save
            render json:{ message: 'saved' } , status:200
        else
            render json: user.errors, status: :unprocessable_entity 
        end

    end
    def user_params
        #params.fetch(:book, {})
        params.require(:user).permit(:name, :email, :password)
      end
end
