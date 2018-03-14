# from BeautifulSoup import BeautifulSoup
from bs4 import BeautifulSoup

HTML = open("html.txt").read()
soup = BeautifulSoup(HTML)
pretty = soup.prettify()

file = open("html_parsed.txt", "w")
file.write(pretty)
# file.close()




# title = soup.find("span", {"class": "indexed-biz-name"}).a.contents

# pulls elements we want from overall html
# raw
raw_title = soup.findAll("span", {"class": "indexed-biz-name"})
soup = BeautifulSoup(str(raw_title))
data_pretty = soup.prettify()
event_data = open("event_data.txt", "r+")
event_data.write(str(data_pretty))


# raw > data
soup = BeautifulSoup(data_pretty)
data_title = soup.a.text
# print data_title

# http://www.sixfeetup.com/blog/an-introduction-to-beautifulsoup < this should help


# raw > data
# soup = BeautifulSoup(event_data.read())

for link in soup.find_all('a'):
	text = link.text.strip()
	print text

for link in soup.find_all('a'):
	url = link.get('href')
	print url


	
	
	
	
	
	
