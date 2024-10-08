import os
import base64
import json
from requests import post

client_id = 
client_secret = 

auth_string = client_id + ":" + client_secret
auth_bytes = auth_string.encode("utf-8")
auth_base64 = str(base64.b64encode(auth_bytes), "utf-8")

url = "https://accounts.spotify.com/api/token"
headers = {
    "Authorization": "Basic " + auth_base64,
    "Content-Type": "application/x-www-form-urlencoded"
}

data = {"grant_type": "client_credentials", "scope": "user-read-playback-position"}
result = post(url, headers=headers, data=data)
json_result = json.loads(result.content)
print(json_result)

token = json_result["access_token"]
print(token)