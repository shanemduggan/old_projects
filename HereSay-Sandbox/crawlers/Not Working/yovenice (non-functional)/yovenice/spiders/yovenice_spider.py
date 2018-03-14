from scrapy.spider import BaseSpider
from scrapy.selector import HtmlXPathSelector
from yovenice.items import YoveniceItem
class Yovenice(BaseSpider):
    name = "yovenice" # Name of the spider, to be used when crawling
    allowed_domains = ["yovenice.com"] # Where the spider is allowed to go
    start_urls = [
        "http://www.yovenice.com/category/venice-beach-events"
	]	
    def parse(self, response):
	    hxs = HtmlXPathSelector(response) # The XPath selector
		sites = hxs.select('//div[contains(@id="main")]/div[@class="site-main"]')
		items = []
		for site in sites:
			item = YoveniceItem()
			item['title'] = site.select('h1[@class="entry-title"]/a/text()').extract()
			item['link'] = site.select('h1[@class="entry-title"]/a/@href').extract()
			item['desc'] = site.select('div[@class="entry-content"]/p/text()').extract()
			items.append(item)
		return items
	
