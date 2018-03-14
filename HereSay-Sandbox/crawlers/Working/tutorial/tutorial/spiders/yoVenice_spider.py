from scrapy.spider import BaseSpider
from scrapy.selector import HtmlXPathSelector

class YoVeniceSpider(BaseSpider):
    name = "yovenice"
    domain_name = "www.yovenice.com"
    start_urls = ["http://www.yovenice.com/category/venice-beach-events/"]
	
	def parse(self, response):
		hxs = scrapy.HtmlXPathSelector(response)
		sites = hxs.select('//div[@class="entry-title"]')
		for site in sites:
			print site.extract()

