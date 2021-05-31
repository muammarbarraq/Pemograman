from tkinter import *

root =Tk()

e = Entry(root, width= 50)
e.pack()
e.insert(0, "Enter your name : ")

def myClick():
    hello = "Hello " + e.get()
    myLabel = Label(root, text=hello)
    myLabel.pack()

myButton = Button(root, text="Enter your Name", padx=50, pady=50, command =myClick, fg="red", bg="white") #padx = x pady=y command=memanggil fungsi fg=warna huruf bg=warna background
myButton.pack()


root.mainloop()
