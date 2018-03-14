from bs4 import BeautifulSoup

# Skip this for now, use below loop
'''for link in soup.find_all('a'):
	text = link.text.strip()
	print text

for link in soup.find_all('a'):
	url = link.get('href')
	print url'''
	
	
# Last step before we have desired data. Desired data is saved in true_data.txt
event_data_open = open("event_data.txt", "r")
soup = BeautifulSoup(event_data_open.read())

event_data = []
	
for data in soup.find_all('a'):
	text = data.text.strip()
	url = data.get('href')
	event_data.append(text)
	event_data.append(url)

