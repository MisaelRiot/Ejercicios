#for python 3 reduce has to be imported
from functools import reduce

""" 
Ordinary function definitions

def suma(x,y):
    return x+y

def filtrar(n):
    return n==0

"""

li = [1,-2,1,-4]
lo = [5,3,6,7]
cadena = "Hoola Mundo"
ss = lambda x,y: x + y #using lambda in a variable

print (list(map(ss, li,lo)))
print (list(filter(lambda n: n=="o", cadena)))
print (reduce(ss, lo))