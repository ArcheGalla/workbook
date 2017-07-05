#! bin/bash

# Write a shell script that displays "This script will exit with a 0 exit status."  
# Be sure that the script does indeed exit with a 0 exit status. 

# echo "This script will exit with zero status";
# exit 0;

####################################################################################

# Write a shell script that accepts a file or directory name as an argument.  
# Have the script report if it is a regular file, a directory, or other type
# of file.  If it is a regular file, exit with a 0 exit status. If it is a 
# directory, exit with a 1 exit status. If it is some other type of file, exit
# with a 2 exit status. 


# FILE_NAME=$1;

# echo "-----------------------------------"
# echo "Input argument equal = ${FILE_NAME}";
# echo "-----------------------------------"
# if [ -f "${FILE_NAME}" ]
# 	# then 
# 		echo "This file is regular file";
# 		exit 0;
# elif [ -d "${FILE_NAME}" ]
# 	then
# 		echo "This is directory";
# 		exit 1;
# else
# 	exit 2; 
# fi


####################################################################################
 
# Write a script that executes the command "cat /etc/shadow".  If the command
# returns a 0 exit status report "Command succeeded" and exit with a 0 exit 
# status.  If the command returns a nonzero exit status report "Command failed"
# and exit with a 1 exit status

# cat /etc/shadow;

# echo $?

# if [ $? -eq 0 ];	then
	# echo "Command succeeded and exit with a 0 exit status";
	# exit 0;
# else
	# echo "Command failed";
	# exit 1
# fi