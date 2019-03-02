import csv

with open('observations-38272.csv') as csvfiles:
	csvreader = csv.reader(csvfiles)
	i = 0
	for lines in csvreader:
		name = lines[17]
		if name == "Fungi":
			continue
		i += 1
	print(i)