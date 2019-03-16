import csv
import tensorflow as tf
import os
from urllib.request import urlretrieve
import string
import random
import urllib
import socket
def id_generator(size=10, chars=string.ascii_uppercase + string.digits):
	return ''.join(random.choice(chars) for _ in range(size))

def processcsv(filepath):
	dic = {}
	with open(filepath) as csvfiles:
		csvreader = csv.reader(csvfiles)
		names = []
		i = 0
		path = os.getcwd()
		for lines in csvreader:
			if i < 58905:
				i += 1
				continue
			image_url = lines[6]
			print(image_url)
			name = lines[17]
			print(name)
			if name == "Fungi":
				continue
			if not os.path.isdir("./image/" + name):
				os.mkdir("./image/" + name, 0o777)
				print(name)
				print(os.path.isdir("./image/" + name))
			try:
				urlretrieve(image_url,"./image/" + name + "/" + id_generator() + ".png")
			except (urllib.error.HTTPError, socket.gaierror, urllib.error.URLError, ConnectionAbortedError):
				print("Error occured")
			
			print("yes")
			print(i)
			i += 1			