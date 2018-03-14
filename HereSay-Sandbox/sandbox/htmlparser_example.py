from selenium import webdriver
from bs4 import BeautifulSoup

# Selenium
driver = webdriver.Firefox() 
driver.get ('http://www.yelp.com/search?find_desc=&find_loc=Venice%2C+CA&ns=1&l\s=71baa56a7602cc86') 

file = open("html.txt", "w")
file.write(repr(driver.page_source))
driver.quit()

# BeautifulSoup
file = open("html.txt", "r")
soup = BeautifulSoup(file)


# Finding the desired element
raw_title = soup.find_all("span", class_="indexed-biz-name")
soup = BeautifulSoup(str(raw_title))


# Prettifying raw data from desired element
data_pretty = soup.prettify()
event_data_open = open("event_data.txt", "w+")
event_data_open.write(str(data_pretty))


# Last step before we have desired data.
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