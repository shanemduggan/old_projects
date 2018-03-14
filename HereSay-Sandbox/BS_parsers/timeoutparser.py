from selenium import webdriver
from bs4 import BeautifulSoup
import json
 
'''driver = webdriver.Firefox()

driver.get('http://www.timeout.com/los-angeles/things-to-do/may-events-calendar?package_page=3863')
timeout_source = driver.page_source
file = open("timeout_source.txt", "w")
file.write(repr(timeout_source))
driver.quit()'''


file = open("timeout_source.txt", "r")
soup = BeautifulSoup(file)
 
 
# Finding the desired element
raw_title = soup.find_all("div", class_="feature-item__wrapper")
soup = BeautifulSoup(str(raw_title))


# Prettifying raw data from desired element
data_pretty = soup.prettify()
event_data_open = open("timeout_data.txt", "w")
event_data_open.write(str(data_pretty))


# Last step before we have desired data.
event_data_open = open("timeout_data.txt", "r")
soup = BeautifulSoup(event_data_open.read())

event_data = []
url_data = []
text_data = []
almost_data = []

for data in soup.find_all('img'):
	text = data.get('alt')
	#text_data.append(text)
	text_data.append({'title': text})

	
for data in soup.find_all('a'):
	url = data.get('href')
	#url_data.append(url)
	url_data.append({'url': url})

	
event_data = zip(text_data, url_data)
print event_data

#for data in event_data:
#	event_data.append({'title': event_data, 'url': event_data})
	
	
#tuple(event_data)
#event_data = event_data.append({text_data: url_data})



d = almost_data
jsonarray = json.dumps(d, indent=2)

json = open("timeoutData.json", "w")
json.write(jsonarray)

print jsonarray
