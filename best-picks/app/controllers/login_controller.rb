class LoginController < ApplicationController
    skip_before_action :authenticate_request

 def authenticate
   command = AuthenticateUser.call(params[:email], params[:password])
   if command.success?
     render json: { access_token: command.result[0], refresh_token: command.result[1] }
   else
     render json: { error: command.errors }, status: :unauthorized
   end
 end


end
