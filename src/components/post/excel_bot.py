import pyautogui as py
import time
import tkinter as tk

time.sleep(5)
for i in range (1,10):
    py.click()
    py.rightClick()
    py.press('down',presses=11)

    py.press('enter')
    py.hotkey('ctrl','a')
    py.hotkey('ctrl','c')

    py.press('tab',presses=2)
    py.press('enter')
    py.sleep(1)
    py.press('tab',presses=2)
    py.hotkey('ctrl','v')
    py.sleep(1)
    py.press('left_arrow',presses=2)
    py.press('down')
    py.sleep(1)

