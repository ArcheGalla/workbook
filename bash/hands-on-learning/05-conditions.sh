#!/usr/bin/env bash

# This is how we can use condition in bash

CURRENT_DIR=$(pwd);

# Check is file exist in our case we check for this file exist
# Also use semicollum to write condition in one line
if [ -f "${CURRENT_DIR}/05-conditions.sh" ] ;then echo "This file " ; fi

if [ -f "${CURRENT_DIR}/05-conditions.sh" ] 
	then echo "exist"
fi


# if [ "3" -g "3" ]
# 	then
# 		echo "This will not be shown"
# elif [ true ]; then
# 		echo "This will be shown"
# fi	

# if [ -r somefile ]; then
# content=$(cat somefile)
# elif [ -f somefile ]; then
# echo “The file ‘somefile’ exists but is not readable to the script.”
# else
# echo “The file ‘somefile’ does not exist.”
# fi

HOST=`hostname`;
echo "$HOST"