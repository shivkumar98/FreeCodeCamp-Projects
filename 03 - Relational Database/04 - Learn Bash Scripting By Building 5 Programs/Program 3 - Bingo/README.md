# Program 3: Bingo

- In this tutorial, I learnt about random number generations and elif statements in scripts.

## Contents:

1.[Creating file and setting permissions](#creating-file-and-setting-permissions)
1.[Generating random number](#generating-random-number)
1.[Conditionals](#conditionals)
1.[Finished Script](#finished-script)

<hr>

## Creating file and setting permissions:

- I create a bingo.sh file:

~/project$ touch bingo.sh

- I set the permissions:

~/project$ chmod +x bingo.sh 

- Initialised the file with the following:

        #!/bin/bash
        # Bingo Number Generator
        echo -e "\n~~ Bingo Number Generator ~~\n"

<hr>

## Generating random number:

- I printed all environment variables:

        ~/project$ printenv
        SHELL=/bin/bash
        ...
        LANG=en_US.UTF-8
        ...
- I printed one of the environment variables:

        codeally@9614278b947b:~/project$ echo $LANG
            en_US.UTF-8

- I printed information for declare:

        ~/project$ declare -p
        declare -- BASH="/usr/bin/bash"
        ...
        declare -- _="-p"

- Printing the RANDOM variable:

        ~/project$ echo $RANDOM
            12705

- I used the random variable in my script:

        NUMBER=$RANDOM
        echo $NUMBER

- The RANDOM variable will generate a random number between 0-32767. You can use the modulus operator so it return 0-75:

        NUMBER=$RANDOM%75
        echo $NUMBER

- Running the script gives us the literal:

        ~/project$ ./bingo.sh 

        ~~ Bingo Number Generator ~~

        14629%75

- Bringing the help for let:

        ~/project$ help let
        let: let arg [arg ...]
            Evaluate arithmetic expressions.
            
            Evaluate each ARG as an arithmetic expression.  Evaluation is done in
            fixed-width integers with no check for overflow, though division by 0
            is trapped and flagged as an error.  The following list of operators is
            grouped into levels of equal-precedence operators.  The levels are listed
            in order of decreasing precedence.
            
                id++, id--      variable post-increment, post-decrement
                ++id, --id      variable pre-increment, pre-decrement
                -, +            unary minus, plus
                !, ~            logical and bitwise negation
                **              exponentiation
                *, /, %         multiplication, division, remainder
                +, -            addition, subtraction
                <<, >>          left and right bitwise shifts
                <=, >=, <, >    comparison
                ==, !=          equality, inequality
                &               bitwise AND
                ^               bitwise XOR
                |               bitwise OR
                &&              logical AND
                ||              logical OR
                expr ? expr : expr
                                conditional operator
                =, *=, /=, %=,
                +=, -=, <<=, >>=,
                &=, ^=, |=      assignment
            
            Shell variables are allowed as operands.  The name of the variable
            is replaced by its value (coerced to a fixed-width integer) within
            an expression.  The variable need not have its integer attribute
            turned on to be used in an expression.
            
            Operators are evaluated in order of precedence.  Sub-expressions in
            parentheses are evaluated first and may override the precedence
            rules above.
            
            Exit Status:
            If the last ARG evaluates to 0, let returns 1; let returns 0 otherwise.


- In order to make the expression into a calculation, we need to wrap it around with (( ... ))

- I updated the script so its a calculation:

        NUMBER=$(( RANDOM%75 + 1 ))
        echo $NUMBER

<hr>

##  Conditionals:

- I used round brackets to check if the number is <= 15:

        echo -e "\n~~ Bingo Number Generator ~~\n"

        NUMBER=$(( RANDOM % 75 + 1 ))
        TEXT="The next number is, "
        if (( NUMBER <= 15 ))
        then
            echo $TEXT B:$NUMBER

        fi

- I then added an else if condition:

        NUMBER=$(( RANDOM % 75 + 1 ))
        TEXT="The next number is, "
        if (( NUMBER <= 15 ))
        then
            echo $TEXT B:$NUMBER
        elif [[ $NUMBER -le 30 ]]
        then
            echo $TEXT I:$NUMBER
        fi

- Added another condition:

        NUMBER=$(( RANDOM % 75 + 1 ))
        TEXT="The next number is, "
        if (( NUMBER <= 15 ))
        then
            echo $TEXT B:$NUMBER
        elif [[ $NUMBER -le 30 ]]
        then
            echo $TEXT I:$NUMBER
        elif (( NUMBER < 46 ))
        then
            echo $TEXT N:$NUMBER
        fi

- Added another:

        NUMBER=$(( RANDOM % 75 + 1 ))
        TEXT="The next number is, "
        if (( NUMBER <= 15 ))
        then
            echo $TEXT B:$NUMBER
        elif [[ $NUMBER -le 30 ]]
        then
            echo $TEXT I:$NUMBER
        elif (( NUMBER < 46 ))
        then
            echo $TEXT N:$NUMBER
        elif [[ $NUMBER -lt 61 ]]
        then
            echo $TEXT G:$NUMBER
        fi

- Adding else statement:

        NUMBER=$(( RANDOM % 75 + 1 ))
        TEXT="The next number is, "
        if (( NUMBER <= 15 ))
        then
            echo $TEXT B:$NUMBER
        elif [[ $NUMBER -le 30 ]]
        then
            echo $TEXT I:$NUMBER
        elif (( NUMBER < 46 ))
        then
            echo $TEXT N:$NUMBER
        elif [[ $NUMBER -lt 61 ]]
        then
            echo $TEXT G:$NUMBER
        else 
            echo $TEXT O:$NUMBER
        fi

- Project is finished and works!

<hr>

## Finished Script:

        #!/bin/bash

        # Bingo Number Generator

        echo -e "\n~~ Bingo Number Generator ~~\n"

        NUMBER=$(( RANDOM % 75 + 1 ))
        TEXT="The next number is, "
        if (( NUMBER <= 15 ))
        then
            echo $TEXT B:$NUMBER
        elif [[ $NUMBER -le 30 ]]
        then
            echo $TEXT I:$NUMBER
        elif (( NUMBER < 46 ))
        then
            echo $TEXT N:$NUMBER
        elif [[ $NUMBER -lt 61 ]]
        then
            echo $TEXT G:$NUMBER
        else 
            echo $TEXT O:$NUMBER
        fi
