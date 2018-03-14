from selenium import webdriver
from bs4 import BeautifulSoup
# from BeautifulSoup import BeautifulSoup

# Selenium
driver = webdriver.Firefox() 
driver.get ('http://www.yelp.com/search?find_desc=&find_loc=Venice%2C+CA&ns=1&l\s=71baa56a7602cc86') 

file = open("html.txt", "w")
file.write(repr(driver.page_source))
file.close()
driver.quit()



# BeautifulSoup - Prettify source code
HTML = open("html.txt").read()
soup = BeautifulSoup(HTML)
pretty = soup.prettify()

file = open("html_parsed.txt", "w")
file.write(pretty)


# Finding the desired element
raw_title = soup.findAll("span", {"class": "indexed-biz-name"})
print raw_title
soup = BeautifulSoup(str(raw_title))

# Prettifying raw data from desired element
data_pretty = soup.prettify()
event_data_open = open("event_data.txt", "w+")
event_data_open.write(str(data_pretty))
file.close()



# Skip this for now, use below loop
'''for link in soup.find_all('a'):
	text = link.text.strip()
	print text

for link in soup.find_all('a'):
	url = link.get('href')
	print url'''
	
	
# Last step before we have desired data. Desired data is saved in true_data.txt
soup = BeautifulSoup(event_data_open.read())

event_data = []
	
for data in soup.find_all('a'):
	text = data.text.strip()
	url = data.get('href')
	event_data.append(text)
	event_data.append(url)


true_data = open("true_data.txt", "w")
true_data.write(str(event_data))