# Program 5: Five

This script will be used to execute the four programs I've made consecutively.

## Finished Script:

- I define the script as:

        #!/bin/bash
        # Program to run my other four programs
        ./questionnaire.sh
        ./countdown.sh 3
        ./bingo.sh
        ./fortune.sh

<hr>

## Types:

- You can use type command, to see the type of any command. E.g.:

        ~/project$ type echo
            echo is a shell builtin
        ~/project$ 
        ~/project$ type read
            read is a shell builtin
        ~/project$ type if
            if is a shell keyword
        ~/project$ type then
            then is a shell keyword
        ~/project$ type bash
            bash is /usr/bin/bash
        ~/project$ type psql
            psql is /usr/bin/psql
        ~/project$ type ./five.sh 
            ./five.sh is ./five.sh
