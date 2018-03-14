from scrapy.spider import BaseSpider
from scrapy.selector import HtmlXPathSelector
from yelpope.items import YelpopeItem
class YelpopeSpider(BaseSpider):
    name = "yelpope" # Name of the spider, to be used when crawling
    allowed_domains = ["yelp.com"] # Where the spider is allowed to go
    start_urls = [
        "http://www.yelp.com/events/venice-ca-us"
    ]
    def parse(self, response):
        hxs = HtmlXPathSelector(response) # The XPath selector
        sites = hxs.select('//ul[@id="main_events_list"]/li/div') 
        items = []
        for site in sites:
            item = YelpopeItem()
            item['name'] = site.select('div[@class="media-story"]/h3/a/span/text()').extract()
            items.append(item)
        return items