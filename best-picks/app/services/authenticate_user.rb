class AuthenticateUser
    prepend SimpleCommand

  def initialize(email,password)
    @email = email
    @password = password
  end

  def call
    token_array = Array.new
    if user
    token_array[0] = JsonWebToken.encode({user_id:user.id,purpose:Constants::PURPOSE_ACCESS_TOKEN,exp:Constants::ACCESS_TOKEN_EXPIRY})
    token_array[1] = JsonWebToken.encode({user_id:user.id,purpose:Constants::PURPOSE_REFRESH_TOKEN,exp:Constants::REFRESH_TOKEN_EXPIRY})
    end
    return token_array
  end
  private
    attr_accessor :email, :password

  def user 
    user = User.find_by_email(email)
    return user if user && user.authenticate(password)

    errors.add :user_authentication, 'invalid credentials'
    nil
  end
end