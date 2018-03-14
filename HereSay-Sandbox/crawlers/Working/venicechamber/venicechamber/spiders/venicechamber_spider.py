from scrapy.spider import BaseSpider
from scrapy.selector import HtmlXPathSelector
from venicechamber.items import VenicechamberItem
class VenicechamberSpider(BaseSpider):
    name = "venicechamber" # Name of the spider, to be used when crawling
    allowed_domains = ["venicechamber.chambermaster.com"] # Where the spider is allowed to go
    start_urls = [
        "http://venicechamber.chambermaster.com/events/"
    ]
    def parse(self, response):
        hxs = HtmlXPathSelector(response) # The XPath selector
        sites = hxs.select('//*[@class="mn-listingcontent"]')
        items = []
        for site in sites:
            item = VenicechamberItem()
            item['title'] = site.select('div[@class="mn-title"]/a/text()').extract()
            items.append(item)
        return items