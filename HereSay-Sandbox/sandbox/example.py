a["abc"] = [1, 2, "bob"]

key = "somekey"
a.setdefault(key, [])
a[key].append(1)

print a