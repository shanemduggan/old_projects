from scrapy.spider import BaseSpider
from scrapy.selector import HtmlXPathSelector
from concierge.items import ConciergeItem
class ConciergeSpider(BaseSpider):
    name = "concierge" # Name of the spider, to be used when crawling
    allowed_domains = ["theveniceconcierge.com"] # Where the spider is allowed to go
    start_urls = [
        "http://www.venicepaparazzi.com/upcoming-events/"
    ]
    def parse(self, response):
        hxs = HtmlXPathSelector(response) # The XPath selector
        sites = hxs.select('div[contains(@class="calendar")]div[@id="events_3"]/text()')
        items = []
        for site in sites:
            item = ConciergeItem()
            item['title'] = site.select('div[contains(@class="calendar")]div[@id="events_3"]/text()').extract()
            items.append(item)
        return items