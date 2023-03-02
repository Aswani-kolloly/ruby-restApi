class JsonWebToken
    class << self
        def encode(payload)
           
            payload[:key_time] = (Time.now).to_i
            #user_id[:type] = purpose
            JWT.encode(payload,Rails.application.secrets.secret_key_base,"HS256")
        end

        def decode(token)
            p "enters into jwt- decoding"
            body = JWT.decode(token,Rails.application.secrets.secret_key_base)[0] 
            p "jwt- decoding"
            p body
            HashWithIndifferentAccess.new body
        rescue JWT::ExpiredSignature
            p "token expired----"
            nil
        rescue JWT::DecodeError
            p "token missing"
            nil
       
        end
    end
end