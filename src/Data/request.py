import requests
import os
from dotenv import load_dotenv

load_dotenv()
print(os.getenv("API_KEY"), "is the API key")
print(os.getenv("URL"))

url = os.getenv("URL")
auth='Bearer'+' '+ os.getenv('API_KEY')

payload = {'fullname': 'sydney '}
files=[
  ('file',('M-Pesa Statement yakobo.pdf',open('C:\\Users\\User\\Downloads\\M-Pesa Statement yakobo.pdf','rb'),'application/pdf'))
]
headers = {
  'Authorization': auth
}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)
