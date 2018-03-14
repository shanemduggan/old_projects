from selenium import webdriver
 
browser = webdriver.Firefox()

browser.get('http://www.yelp.com/events/la')
yelp1_source = browser.page_source
file = open("yelp1_source.txt", "w")
file.write(repr(yelp1_source))
file.close()


browser.get('http://venicechamber.chambermaster.com/events/')
chamber_source = browser.page_source
file = open("chamber_source.txt", "w")
file.write(repr(chamber_source))
file.close()


browser.get('http://www.yelp.com/events/venice-ca-us/browse')
yelp2_source = browser.page_source
file = open("yelp2_source.txt", "w")
file.write(repr(yelp2_source))
file.close()


browser.get('http://www.theveniceconcierge.com/calendar-2/')
conc_source = browser.page_source
file = open("conc_source.txt", "w")
file.write(repr(conc_source))
file.close()


browser.get('http://www.venicepaparazzi.com/upcoming-events/')
paparazzi_source = browser.page_source
file = open("paparazzi_source.txt", "w")
file.write(repr(paparazzi_source))
file.close()

browser.quit()


#design parsers for each sites source code
'''from bs4 import BeautifulSoup
 
# pulls elements we want from overall html
# raw
   raw_title = File
Soup = BeautifulSoup(raw_data)
 
event_data = []
for data in raw_title.find_all('a'):
text = data.text.strip()
url = data.get('href')
event_data.append(text)
event_data.append(url)
 
print event_data'''
