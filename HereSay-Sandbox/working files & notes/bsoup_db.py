from bs4 import BeautifulSoup


# pulls elements we want from overall html
# raw
'''raw_title = soup.findAll("span", {"class": "indexed-biz-name"})
soup = BeautifulSoup(str(raw_title))
data_pretty = soup.prettify()
event_data = open("event_data.txt", "r+")
event_data.write(str(data_pretty))
'''

open_event_data = open("event_data.txt", "r+")

# raw > data

soup = BeautifulSoup(open_event_data.read())

'''event_name = []

for name in soup.find_all('a'):
	text = name.text.strip()
	event_name.append(text)


event_link = []
	
for link in soup.find_all('a'):
	url = link.get('href')
	event_link.append(url)
'''

event_data = []
	
for data in soup.find_all('a'):
	text = data.text.strip()
	url = data.get('href')
	event_data.append(text)
	event_data.append(url)


true_data = open("true_data.txt", "w")
true_data.write(str(event_data))

# print event_data
	
# event_data = [event_name, event_link]

# print event_data
	
# we can call this function when we run a selenium script to add the data to the db
import sqlite3
 
conn = sqlite3.connect("db/database.db")
cursor = conn.cursor()

 
cursor.execute('''
    CREATE TABLE events(name TEXT, link TEXT)
 ''')


# need to make variables 'title' 'link' 'date' 'category' 'location'
# import them in from the beautifulsoup file?
cursor.executemany(''' INSERT INTO events(name, link) VALUES (?,?)''', event_data)
conn.commit()	






