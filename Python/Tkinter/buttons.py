from tkinter import *

root =Tk()

def myClick():
    myLabel = Label(root, text="lihat ini,Bgus bukan")
    myLabel.pack()

myButton = Button(root, text="click", padx=50, pady=50, command =myClick, fg="red", bg="white") #padx = x pady=y command=memanggil fungsi fg=warna huruf bg=warna background
myButton.pack()


root.mainloop()
