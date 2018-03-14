import sqlite3

# we can call this function when we run a selenium script to add the data to the db
 
conn = sqlite3.connect("db/database.db")
cursor = conn.cursor()
 
cursor.execute("""CREATE TABLE events
                  (title text, link text, date text) 
               """)
	
# need to make variables 'title' 'link' 'date' 'category' 'location'
# import them in from the beautifulsoup file?
cursor.executemany("INSERT INTO events VALUES (?,?,?)", title, link, date)
conn.commit()