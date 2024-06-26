class AuthorizeApiRequest
    prepend SimpleCommand

  def initialize(headers = {})
    @headers = headers
  end

  def call
    user
  end

  private

  attr_accessor :headers 

  def user
    @user ||= User.find(decoded_auth_token[:user_id]) if decoded_auth_token
    @user || errors.add(:token, 'Invalid token') && nil
  end

  def decoded_auth_token         
   
    @decoded_auth_token ||= JsonWebToken.decode(http_auth_header)
    
    #if (Time.now).to_i >= @decoded_auth_token[:exp].to_i
     #   @decoded_auth_token = errors.add(:token,"token expired")
    #end
  end

  def http_auth_header 
    if headers['Authorization'].present? 
        return headers['Authorization'].split(' ').last
    else 
        errors.add(:token, 'Missing token')
    end
    
  end
end