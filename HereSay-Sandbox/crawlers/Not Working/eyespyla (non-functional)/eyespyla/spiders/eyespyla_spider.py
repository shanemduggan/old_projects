from scrapy.spider import BaseSpider
from scrapy.selector import HtmlXPathSelector
from eyespyla.items import EyespylaItem
class EyespylaSpider(BaseSpider):
    name = "eyespyla" # Name of the spider, to be used when crawling
    allowed_domains = ["eyespyla.com"] # Where the spider is allowed to go
    start_urls = [
        "http://www.eyespyla.com/www/thebuzz.nsf/8f86a86257fd2c5288256e2a00546f2d/f0c82fb4d8612af788256e2a005799dc!OpenDocument"
    ]
    def parse(self, response):
        hxs = HtmlXPathSelector(response) # The XPath selector
        sites = hxs.select('//*')
        items = []
        for site in sites:
            item = VenicechamberItem()
            item['title'] = site.select('div[@class="mn-title"]/a/text()').extract()
            items.append(item)
        return items