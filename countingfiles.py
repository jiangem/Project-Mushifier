import os, os.path

sm = 0
Dir = "./image"
for files in os.listdir(Dir):
	i = 0
	for file in os.listdir(Dir + '/' + str(files)):
		sm += 1
		i += 1
	print(i)
print(sm)