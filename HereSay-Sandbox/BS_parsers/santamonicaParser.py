from selenium import webdriver
from bs4 import BeautifulSoup
 
'''driver = webdriver.Firefox()

driver.get('http://www.santamonica.com/events-calendar/')
sm_source = driver.page_source
file = open("sm_source.txt", "w")
file.write(repr(sm_source))
file.close()
driver.quit()
'''

# BeautifulSoup
file = open("sm_source.txt", "r")
soup = BeautifulSoup(file)
 

# Finding the desired element
raw_title = soup.find_all("div", class_="evnt-item")
soup = BeautifulSoup(str(raw_title))


# Prettifying raw data from desired element
data_pretty = soup.prettify()
event_data_open = open("sm_data.txt", "w")
event_data_open.write(str(data_pretty))

'''# Last step before we have desired data.
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
json.write(jsonarray)'''