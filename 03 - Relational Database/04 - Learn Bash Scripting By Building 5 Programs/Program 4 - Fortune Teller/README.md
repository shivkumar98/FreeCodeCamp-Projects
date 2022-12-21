# Program 4: Fortune Teller

## Contents
1. [Creating Bash Script](#creating-bash-script)
1. [Arrays](#arrays)
1. [Functions](#functions)
1. [Until command](#until-command))
1. [Checking Question ends with Question mark](#checking-question-ends-with-question-mark)
1. [Finished Script](#finished-script)

<hr>

## Creating Bash Script:

        ~/project$ touch fortune.sh
        ~/project$ chmod +x fortune.sh

<hr>


## Arrays:

- In the terminal, I created an array:

        ~/project$ ARR=("a" "b" "c")

- You can access the arrays elements using index or print whole array using @:

        codeally@c3e23aec84df:~\project$

- The array is in the declare list:

        ~/project$ declare -p ARR
            declare -a ARR=([0]="a" [1]="b" [2]="c")

- Added a responses array to script:

        RESPONSES=("Yes" "No" "Maybe" "Outlook good" "Don't count on it" "Ask again later")
        echo ${RESPONSES[5]}

- Creating random number between 0-5:

        N=$(( RANDOM%6 ))

- I updated the echo so it will print a random value from array:

        echo ${RESPONSES[$N]}

<hr>

## Functions:

- I use the help command to get information about functions

        ~/project$ help function
        function: function name { COMMANDS ; } or name () { COMMANDS ; }
            Define shell function.
            
            Create a shell function named NAME.  When invoked as a simple command,
            NAME runs COMMANDs in the calling shell's context.  When NAME is invoked,
            the arguments are passed to the function as $1...$n, and the function's
            name is in $FUNCNAME.
            
            Exit Status:
            Returns success unless NAME is readonly.

- I define a function and call it:

        GET_FORTUNE() {
        for (( i=0; i!=1; i++))
        do
            echo "Ask a yes or no question:"
            read QUESTION
        done
        }
        GET_FORTUNE

<hr>

## Until command:

- I need to keep asking for a question until user enters something ending with ?. I get help on the until command:

        ~/project$ help
        GNU bash, version 5.0.17(1)-release (x86_64-pc-linux-gnu)
        These shell commands are defined internally.  Type `help' to see this list.
        Type `help name' to find out more about the function `name'.
        Use `info bash' to find out more about the shell in general.
        Use `man -k' or `info' to find out more about commands not in this list.
        ...
        hash [-lr] [-p pathname] [-dt] [name ...]       while COMMANDS; do COMMANDS; done
        help [-dms] [pattern ...]                       { COMMANDS ; }
        codeally@c3e23aec84df:~/project$ help until
        until: until COMMANDS; do COMMANDS; done
            Execute commands as long as a test does not succeed.
            
            Expand and execute COMMANDS as long as the final command in the
            `until' COMMANDS has an exit status which is not zero.
            
            Exit Status:
            Returns the status of the last command executed.


- I implement the until command when calling the function:

        until [[ $QUESTION == test? ]]
        do
            GET_FORTUNE
        done

<hr>

## Checking Question ends with Question mark

- I get help for expressions:

        ~/project$ help [[
        [[ ... ]]: [[ expression ]]
            Execute conditional command.
            
            Returns a status of 0 or 1 depending on the evaluation of the conditional
            expression EXPRESSION.  Expressions are composed of the same primaries used
            by the `test' builtin, and may be combined using the following operators:
            
            ( EXPRESSION )    Returns the value of EXPRESSION
            ! EXPRESSION              True if EXPRESSION is false; else false
            EXPR1 && EXPR2    True if both EXPR1 and EXPR2 are true; else false
            EXPR1 || EXPR2    True if either EXPR1 or EXPR2 is true; else false
            
            When the `==' and `!=' operators are used, the string to the right of
            the operator is used as a pattern and pattern matching is performed.
            When the `=~' operator is used, the string to the right of the operator
            is matched as a regular expression.
            
            The && and || operators do not evaluate EXPR2 if EXPR1 is sufficient to
            determine the expression's value.
            
            Exit Status:
            0 or 1 depending on value of EXPRESSION.
    
- We can use the =~ operator for regex expressions.

- E.g. we can check if a quote starts with a letter using ^:

        ~/project$ [[ "hello world" =~ ^h ]]; echo $?
            0

- We can check if qoute ends with a letter using $:

        ~/project$ [[ "hello world" =~ \?$ ]]; echo $?
            0

- I updated the until loop:

        until [[ $QUESTION =~ \?$ ]]
        do
            GET_FORTUNE
        done

- Now the script will keep repeating the question unless question ends with ?:
        
        ~/project$ ./fortune.sh 

                ~~ Fortune Teller ~~

                Ask a yes or no question:
                test
                Ask a yes or no question:
                test?
                Outlook good


- I update the function:

        GET_FORTUNE() {
        for (( i=0; i!=1; i++))
        do
            if [[ ! $1 ]]
            then  
                echo "Ask a yes or no question:"
            else
                echo "Try again. Make sure it ends with a question mark:"
            fi
            read QUESTION
        done
        }

- The function now will print "Ask a yes or no question" if no argument is provided, otherwise prints "Try again. Make sure it ends with a question:"

- I update the script so the GET_FORTUNE is called then the until loop is executed, which calls GET_FORTUNE with argument again:

        GET_FORTUNE
        until [[ $QUESTION =~ \?$ ]]
        do
            GET_FORTUNE again
        done

- Running the script:

        ~/project$ ./fortune.sh 

            ~~ Fortune Teller ~~

            Ask a yes or no question:
            ddd
            Try again. Make sure it ends with a question mark:
            test?
            No

- The script is finished and works!

<hr>

## Finished Script:

        #!/bin/bash

        # Program to tell a persons fortune

        echo -e "\n~~ Fortune Teller ~~\n"

        RESPONSES=("Yes" "No" "Maybe" "Outlook good" "Don't count on it" "Ask again later")
        N=$(( RANDOM % 6 ))

        function GET_FORTUNE() {
            if [[ ! $1 ]]
            then
                echo Ask a yes or no question:
            else
                echo Try again. Make sure it ends with a question mark:
            fi

            read QUESTION
        }

        GET_FORTUNE

        until [[ $QUESTION =~ \?$ ]]
        do
            GET_FORTUNE again
        done

        echo -e "\n${RESPONSES[$N]}"
