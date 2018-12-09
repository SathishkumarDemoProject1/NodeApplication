'''
Created on Dec 9, 2018

@author: sathish
'''
import threading;

def printthread(mincount,maxcount):
    print(mincount,maxcount)

a=[1,2,3,5]

print(a[1:2])

rowcount=1000;
threadWait=[];
mincount=0;
maxcount=100;
while(maxcount<=rowcount):
    threadWait.append(threading.Thread(target=printthread,args=(mincount,maxcount)))
    mincount+=100;
    maxcount+=100;
if(maxcount!=rowcount):
    threadWait.append(threading.Thread(target=printthread,args=(mincount,rowcount)))
for thread in threadWait:
    thread.start();
for thread in threadWait:
    thread.join();
print("thread end")
