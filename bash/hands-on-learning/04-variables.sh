#!/usr/bin/env bash

# This is summaty for variables

# Variable should be uppercase divided by underscore
VARIABLE_NAME="some value"

# Variable can ve assed by puting $ signe infront of variable name
# or by wrapping in specials construction
echo $VARIABLE_NAME

echo ${VARIABLE_NAME}

echo "concating with string ${VARIABLE_NAME}";

# To assign result of expression we can use the next contruction

USER=$(whoami);
PATH=$HOME;
echo "The user name is ${USER}"
echo "The users home directory is ${PATH}"