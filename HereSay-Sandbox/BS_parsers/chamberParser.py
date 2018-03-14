from selenium import webdriver
from bs4 import BeautifulSoup
import json
 
# Selenium
driver = webdriver.Firefox() 
driver.get ('http://venicechamber.chambermaster.com/events') 
 
file = open("chamber_html.txt", "w")
file.write(repr(driver.page_source))
driver.quit()
 
# BeautifulSoup
file = open("chamber_html.txt", "r")
soup = BeautifulSoup(file)
 
 
# Finding the desired element
raw_title = soup.find_all("div", class_="mn-section")
soup = BeautifulSoup(str(raw_title))
 
 
# Prettifying raw data from desired element
data_pretty = soup.prettify()
event_data_open = open("chamber_event_data.txt", "w")
event_data_open.write(str(data_pretty))
 
 
# Last step before we have desired data.
event_data_open = open("chamber_event_data.txt", "r")
soup = BeautifulSoup(event_data_open.read())

data_title = soup.find_all("div", class_="mn-title")
data_title_open = open("chamber_data.txt", "w")
data_title_open.write(str(data_title))
data_title_open = open("chamber_data.txt", "r")
soup = BeautifulSoup(data_title_open.read())
 
event_data = []

for data in soup.find_all('a'):
	text = data.text.strip()
	url = data.get('href')
	event_data.append({'text': text, 'url': url})

d = event_data
jsonarray = json.dumps(d, indent=2)

json = open("chamberData.json", "w")
json.write(jsonarray)
