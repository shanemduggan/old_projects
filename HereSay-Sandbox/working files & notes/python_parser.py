import re



quoted = re.compile('"[^"]*"')
for value in quoted.findall(userInputtedText):
    print value


with open('data.txt', 'r') as f:
    data  = list()
    group = dict()
    for key, value in re.findall(r'(.*):\s*([\dE+-.]+)', f.read()):
        if key in group:
            data.append(group)
            group = dict()
        group[key] = value
    data.append(group)

print data


'''
{"event": [		
		{"title": "SAVE THE DATE: The Next Venice Art Crawl on March 19th!", "link": "href"},
		{"title": "L.A. Louver: Ben Jackel - American Imperium", "link": "href"}
		]
	}
'''