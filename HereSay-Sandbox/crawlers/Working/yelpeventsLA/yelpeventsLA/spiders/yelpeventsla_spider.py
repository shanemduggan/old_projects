from scrapy.spider import BaseSpider
from scrapy.selector import HtmlXPathSelector
from yelpeventsLA.items import YelpeventslaItem
class YelpeventslaSpider(BaseSpider):
    name = "yelpeventsla" # Name of the spider, to be used when crawling
    allowed_domains = ["yelp.com"] # Where the spider is allowed to go
    start_urls = [
        "http://www.yelp.com/search?find_desc=venice+events&find_loc=Venice%2C+CA&ns=2#find_desc=events&start=0&l=p:CA:[Los_Angeles::,Venice::]"
    ]
    def parse(self, response):
        hxs = HtmlXPathSelector(response) # The XPath selector
        sites = hxs.select('//h3[@class="search-result-title"]/span')
        items = []
        for site in sites:
            item = YelpeventslaItem()
            item['name'] = site.select('a[@class="biz-name"]/text()').extract()
            items.append(item)
        return items