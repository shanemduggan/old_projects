from bs4 import BeautifulSoup

file = open("sm_source.txt", "r")
soup = BeautifulSoup(file)
 
 
# Finding the desired element
# Prettifying raw data from desired element
data_pretty = soup.prettify()
event_data_open = open("sm_pretty.txt", "w")
event_data_open.write(str(data_pretty))