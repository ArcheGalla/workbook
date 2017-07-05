#!/bin/bash 

# Exercise 1:

# Write a shell script that consists of a function that display
# the number of files in the present working directory. Name this
# function "file_count" and call it in your script. If you use a 
# variable in your function, remember to make it a local variable.

# Hint: The wcutility is used to count the number of lines, words, and bytes. 

function quit {
               exit
           }
           function hello {
               echo Hello!
           }
           hello
           quit
           echo foo 








# Exercise 2:

# Modify the script from the previous exercise. Make the "file_count" function
# accept a directory as an argument. Next have the function display the name of
# the directory followed by a colon. Finally, display the number of files to the
# screen on the next line. Call the function three times. First, on the "/etc" 
# directory, next on the "/var" directory and finally on the "/usr/bin" directory.

# Example output:
# /etc:
# 85

