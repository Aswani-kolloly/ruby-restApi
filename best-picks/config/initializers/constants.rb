module Constants
    current_time=Time.now
    PURPOSE_ACCESS_TOKEN = "ACCESS_TOKEN" 
    PURPOSE_REFRESH_TOKEN   = "REFRESH_TOKEN"
    CURRENT_TIME =  # (current_time.to_i * 1000)current time in milli seconds
    #72.hours * 1000 * 60 * 60
    ACCESS_TOKEN_EXPIRY =   (2.minutes.from_now(Time.now)).to_i
    REFRESH_TOKEN_EXPIRY =  (5.minutes.from_now(Time.now)).to_i
end