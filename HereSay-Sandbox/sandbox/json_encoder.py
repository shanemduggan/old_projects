from bs4 import BeautifulSoup
import json

event_data_open = open("event_data.txt", "r")
soup = BeautifulSoup(event_data_open.read())

event_data = []

for data in soup.find_all('a'):
	text = data.text.strip()
	url = data.get('href')
	event_data.append({'text': text, 'url': url})


d = event_data
jsonarray = json.dumps(d, indent=2)

json = open("yelpData.json", "w")
json.write(jsonarray)