# from bs4 import BeautifulSoup
from BeautifulSoup import BeautifulSoup

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
event_data = open("event_data.txt", "w")
event_data.write(str(data_pretty))


# raw > data
soup = BeautifulSoup(data_pretty)
data_title = soup.a.text
# print data_title

# http://www.sixfeetup.com/blog/an-introduction-to-beautifulsoup < this should help


# example
'''for div in data_title.find('a'):
    print div.find('a')['href']
    print div.find('a').contents[0]
    print div.find('img')['src']'''



# could use this, but there are lots of unwanted characters. find better way.	
for data in soup:
	data = soup.findAll('a', href=True)
	print data


	


	
	
'''for a in soup.findAll('a',href=True):
    if re.findall('python', a['href']):
        print "Found the URL:", a['href']'''


"""for data in title:
	event_data = open("event_data.txt", "w")
	event_data.write(str(data))

# title_data = {'class': 'indexed-biz-name'}
# a_text = soup.findAll(attrs = title_data)



# example
# for info in title:
#	name = info.findAll("span", {"class": "indexed-biz-name"}).a.contents"""