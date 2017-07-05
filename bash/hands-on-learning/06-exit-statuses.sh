#! /bin/bash

# $? mean result of execution previos program
ls /not/here
echo "$?";

if [ ls /not/here ]
	then
		echo "File not exist, status code is ${$?}"
else
	echo "This will be displayed"
fi