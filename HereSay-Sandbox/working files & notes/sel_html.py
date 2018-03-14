from selenium import webdriver

driver = webdriver.Firefox() 
driver.get ('http://www.yelp.com/search?find_desc=&find_loc=Venice%2C+CA&ns=1&l\s=71baa56a7602cc86') 

file = open("html.txt", "w")
file.write(repr(driver.page_source))
file.close()
driver.quit()

print "HTML data saved to html.txt"
 
#print repr(driver.page_source)
#with open ('myfile', 'a') as f: f.write ('hi there\n')
#from bs4 import BeautifulSoup
#soup = BeautifulSoup(open("index.html"))
#soup = BeautifulSoup ("<html>data</html>") 