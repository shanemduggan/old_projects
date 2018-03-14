from selenium import webdriver
from bs4 import BeautifulSoup
import json

# Selenium
'''
driver = webdriver.Firefox() 
driver.get ('http://www.partyearth.com/los-angeles/silver-lake-5/') 

file = open("ptsilverlake_html.txt", "w")
file.write(repr(driver.page_source))
driver.quit()
'''

# BeautifulSoup
file = open("ptsilverlake_html.txt", "r")
soup = BeautifulSoup(file)

source_pretty = soup.prettify()
source_pretty_open = open("ptsilverlake_data_pretty.txt", "w")
source_pretty_open.write(str(source_pretty))


# Finding the desired element
raw_title = soup.find_all("div", class_="name_and_type")
soup = BeautifulSoup(str(raw_title))


# Prettifying raw data from desired element
data_pretty = soup.prettify()
event_data_open = open("ptsilverlake_data.txt", "w")
event_data_open.write(str(data_pretty))


# Last step before we have desired data.
event_data_open = open("ptsilverlake_data.txt", "r")
soup = BeautifulSoup(event_data_open.read())

event_data = []

for data in soup.find_all('a'):
	text = data.text.strip()
	url = data.get('href')
	event_data.append({'text': text, 'url': url})


d = event_data
jsonarray = json.dumps(d, indent=2)

json = open("ptSilverlakeData.json", "w")
json.write(jsonarray)

print jsonarray