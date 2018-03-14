# title = soup.fetch('a', 'biz-name')
# event_data = open("event_data.txt", "w")
# event_data.write(title)



# http://www.crummy.com/software/BeautifulSoup/bs3/download/2.x/documentation.html
# create directory to data
# use fetch?
# use attrs convenience alias



# gets the title of an HTML doc
# soup.html.head.title


# print data_parsed.prettify()


# Finds last item in list
# Not sure why
title = soup.findAll("span", {"class": "indexed-biz-name"})

for data in title:
	titles_data = data.find('a')
	event_data = open("event_data.txt", "w")
	event_data.write(str(titles_data))
	
	
# could use this, but there are lots of unwanted characters. find better way.	
for data in soup:
	data = soup.findAll('a', href=True)
	print data

	
	

# example
'''for div in data_title.find('a'):
    print div.find('a')['href']
    print div.find('a').contents[0]
    print div.find('img')['src']'''

	
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