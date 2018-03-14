from scrapy.spider import BaseSpider
from scrapy.selector import HtmlXPathSelector
from hotelerwin.items import HotelerwinItem
class HotelerwinSpider(BaseSpider):
    name = "hotelerwin" # Name of the spider, to be used when crawling
    allowed_domains = ["hotelerwin.com"] # Where the spider is allowed to go
    start_urls = [
        "http://www.hotelerwin.com/calendar.aspx"
    ]
    def parse(self, response):
        hxs = HtmlXPathSelector(response) # The XPath selector
        sites = hxs.select('//div[@class="calGridDayEvents"]')
        items = []
        for site in sites:
            item = HotelerwinItem()
            item['title'] = site.select('h4[@class="calGridDayEventTitle calEventTitle"]/text()').extract()
            items.append(item)
        return items