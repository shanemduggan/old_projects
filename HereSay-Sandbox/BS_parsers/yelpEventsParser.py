from selenium import webdriver
from bs4 import BeautifulSoup
 
# Selenium
driver = webdriver.Firefox() 
driver.get ('http://www.yelp.com/events/venice-ca-us/browse') 
 
file = open("yelpevents_html.txt", "w")
file.write(repr(driver.page_source))
driver.quit()
 
# BeautifulSoup
file = open("yelpevents_html.txt", "r")
soup = BeautifulSoup(file)
 
 
# Finding the desired element
#raw_title = soup.find_all("ul", id_="main_events_list")
raw_title = soup.find_all('ul',{'id' : 'main_events_list'})
soup = BeautifulSoup(str(raw_title))
 
 
# Prettifying raw data from desired element
data_pretty = soup.prettify()
event_data_open = open("yelp_event_data.txt", "w")
event_data_open.write(str(data_pretty))
 
 
# Last step before we have desired data.
event_data_open = open("yelp_event_data.txt", "r")
soup = BeautifulSoup(event_data_open.read())
 
event_data = []
        
for data in soup.find_all('h2.a'):
        text = data.text.strip()
        url = data.get('href')
        event_data.append(text)
        event_data.append(url)

print event_data