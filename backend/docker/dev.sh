#!/bin/bash

# Start the first process
./main &

# Start the second process
npm start --prefix ./front &

# Wait for any process to exit
wait -n

# Exit with status of process that exited first
exit $?

