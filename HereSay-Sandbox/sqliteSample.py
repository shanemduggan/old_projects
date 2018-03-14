#http://zetcode.com/db/sqlitepythontutorial/ (info from this site)
#http://www.tutorialspoint.com/sqlite/sqlite_python.htm (check this out)
#Not exactly sure how to put in a date

------------------------------------------------------------

import sqlite3 as lite

con = lite.connect('eventData.db)

with con:

	cur = con.cursor()
	cur.execute("CREATE TABLE data(type STRING, venue STRING, date STRING, start INT)")
	cur.execute("INSERT INTO data VALUES('trivia', 'Sports Harbour', 'Every Wednesday', 9:00)")
	
# turn on column & headers
# in sqlite > .mode column & .headers on <--- easier to view

---------------------------------------------------------------


#inserting data from a variable
events = (
	('trivia', 'Sports Harbor', 'Every Wednesday', 9:00)
	('concert', 'Santa Monica Pier', 'Summer', 7:30)
)

con = lite.connect('eventData.db)

with con:
	
	cur = con.cursor()
	
	cur.execute("DROP TABLE IF EXISTS data")
	cur.execute("CREATE TABLE data(type STRING, venue STRING, date STRING, start INT)")
	cur.executemany("INSERT INTO data VALUES(?, ?, ?, ?)", events)

-----------------------------------------------------------------	

#http://stackoverflow.com/questions/3261858/does-anyone-have-example-code-for-a-sqlite-pipeline-in-scrapy
#Using SQLite with Scrapy
#Copy & pasted. Need to edit to reflect Heresay data

from scrapy import log
from pysqlite2 import dbapi2 as sqlite

# This pipeline takes the Item and stuffs it into scrapedata.db
class scrapeDatasqLitePipeline(object):
    def __init__(self):
        # Possible we should be doing this in spider_open instead, but okay
        self.connection = sqlite.connect('./scrapedata.db')
        self.cursor = self.connection.cursor()
        self.cursor.execute('CREATE TABLE IF NOT EXISTS myscrapedata ' \
                    '(id INTEGER PRIMARY KEY, url VARCHAR(80), desc VARCHAR(80))')

    # Take the item and put it in database - do not allow duplicates
    def process_item(self, item, spider):
        self.cursor.execute("select * from myscrapedata where url=?", item['url'])
        result = self.cursor.fetchone()
        if result:
            log.msg("Item already in database: %s" % item, level=log.DEBUG)
        else:
            self.cursor.execute(
                "insert into myscrapedata (url, desc) values (?, ?)",
                    (item['url'][0], item['desc'][0])

            self.connection.commit()

            log.msg("Item stored : " % item, level=log.DEBUG)
        return item

    def handle_error(self, e):
        log.err(e)

#Another starting point for mysql pipeline. Need to do more research

self.dbpool = adbapi.ConnectionPool("sqlite3", database="/path/sqlite.db")




