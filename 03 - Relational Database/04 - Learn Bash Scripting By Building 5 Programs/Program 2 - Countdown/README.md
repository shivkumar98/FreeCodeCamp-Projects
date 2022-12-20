# Program 2: Countdown

## Creating file:

- Created file in terminal:

        ~/project$ touch countdown.sh

- Added execution permissions:

        ~/project$ chmod +x countdown.sh 

- Added location of interpreter:
    
        #!/bin/bash'

- Added comment to script:

        #Program that counts down to zerio from a given argument

## Arguments:

- Echoing arguments:

        echo $*

- Executing the script displays an empty line

- Executing the script with arguments:


        ~/project$ ./countdown.sh arg1 arg2 arg3
            arg1 arg2 arg3

- $* prints all arguments passed to the script.

- You can access a specific argument using $[number]

- I replaced the last line in the script with:

    echo $1

    - Executing the script now displays:

        ~/project$ ./countdown.sh arg1 arg2 arg3
            arg1

## Conditionals:

- We want to check the value of the argument using if

    - man if does not display anything so we can instead use help if

            help if

    - The syntax of the if statement is:

            if [[ CONDITION ]]
            then
            STATEMENTS
            fi

- I will replace the echo to see if the argument is arg1:

        if [[ $1 == arg1 ]] # spaces are required around statement and ==
        then
            echo "true"
        fi

- Running the script:

        ~/project$ ./countdown.sh arg1 arg2 arg3
            true

- Adding an else statement

        if [[ $1 == arg1 ]]
        then
            echo "true"
        else
            echo "false"
        fi

- Running the script:

        ~/project$ ./countdown.sh arg
            false

## Arithmetic Comparisons:

- Getting help on [[ expression ]]:

        ~/project$ help [[ expression ]]
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

- You can get help on expressions just by typing help [[

        help [[


- Getting help on test:

        :~/project$ help test
        test: test [expr]
            Evaluate conditional expression.
            
            Exits with a status of 0 (true) or 1 (false) depending on
            the evaluation of EXPR.  Expressions may be unary or binary.  Unary
            expressions are often used to examine the status of a file.  There
            are string operators and numeric comparison operators as well.
            
            The behavior of test depends on the number of arguments.  Read the
            bash manual page for the complete specification.
            
            File operators:
            
            -a FILE        True if file exists.
            -b FILE        True if file is block special.
            -c FILE        True if file is character special.
            -d FILE        True if file is a directory.
            -e FILE        True if file exists.
            -f FILE        True if file exists and is a regular file.
            -g FILE        True if file is set-group-id.
            -h FILE        True if file is a symbolic link.
            -L FILE        True if file is a symbolic link.
            -k FILE        True if file has its `sticky' bit set.
            -p FILE        True if file is a named pipe.
            -r FILE        True if file is readable by you.
            -s FILE        True if file exists and is not empty.
            -S FILE        True if file is a socket.
            -t FD          True if FD is opened on a terminal.
            -u FILE        True if the file is set-user-id.
            -w FILE        True if the file is writable by you.
            -x FILE        True if the file is executable by you.
            -O FILE        True if the file is effectively owned by you.
            -G FILE        True if the file is effectively owned by your group.
            -N FILE        True if the file has been modified since it was last read.
            
            FILE1 -nt FILE2  True if file1 is newer than file2 (according to
                            modification date).
            
            FILE1 -ot FILE2  True if file1 is older than file2.
            
            FILE1 -ef FILE2  True if file1 is a hard link to file2.
            
            All file operators except -h and -L are acting on the target of a symbolic
            link, not on the symlink itself, if FILE is a symbolic link.
            
            String operators:
            
            -z STRING      True if string is empty.
            
            -n STRING
                STRING      True if string is not empty.
            
            STRING1 = STRING2
                            True if the strings are equal.
            STRING1 != STRING2
                            True if the strings are not equal.
            STRING1 < STRING2
                            True if STRING1 sorts before STRING2 lexicographically.
            STRING1 > STRING2
                            True if STRING1 sorts after STRING2 lexicographically.
            
            Other operators:
            
            -o OPTION      True if the shell option OPTION is enabled.
            -v VAR         True if the shell variable VAR is set.
            -R VAR         True if the shell variable VAR is set and is a name
                            reference.
            ! EXPR         True if expr is false.
            EXPR1 -a EXPR2 True if both expr1 AND expr2 are true.
            EXPR1 -o EXPR2 True if either expr1 OR expr2 is true.
            
            arg1 OP arg2   Arithmetic tests.  OP is one of -eq, -ne,
                            -lt, -le, -gt, or -ge.
            
            Arithmetic binary operators return true if ARG1 is equal, not-equal,
            less-than, less-than-or-equal, greater-than, or greater-than-or-equal
            than ARG2.
            
            See the bash manual page bash(1) for the handling of parameters (i.e.
            missing parameters).
            
            Exit Status:
            Returns success if EXPR evaluates to true; fails if EXPR evaluates to
            false or an invalid argument is given.

- Using the -le operator, I check if argument is less than 5:

        if [[ $1 -le 5 ]]
            then
        echo "true"
           else
        echo "false"
        fi

- You can run expressions directly in the terminal:

        ~/project$ [[ 4 -le 5 ]]

- Nothing happened, each command has an exit status: $?

        echo $?
           0 # this means true

- Runnning an expression which returns false:

        ~/project$ [[ 4 -ge 5 ]]
        ~/project$ echo $?
        1 # this means false

- We can seperate out commands using ;, as seen below:

        ~/project$ [[ 4 -ge 5 ]]; echo $?
            1

- We can check if a value is not equal to, using -ne:

        ~/project$ [[ 10 -ne 5 ]]; echo $?
            0

- The return status is an idication of failures:

        ~/project$ bad_command; echo $?
            bash: bad_command: command not found
            127

## Checking File exists:

- The expression to see if a file exists is:

        [[ filenam ]]; echo $?

- Checking if count down exits:

        ~/project$ [[ -a  countdown.sh ]]; echo $?
            0

## Checking Execution Permissions:

- Using the -x operator, you can check if a file is executeable by you:

        ~/project$ [[ -x countdown.sh ]]; echo $?
            0   

## Printing Numbers counting down:

- I modified the condition in my script to check if argument is greater than 0 and return a message for negative argument:

        #!/bin/bash
        #Program that counts down to zero from a given argument
        if [[ $1 -gt 0 ]]
        then
            echo "true"
        else
            echo "Include a positive integer as the first argument."
        fi

- I need to find a way to loop over the argument so I use help:

        ~/project$ help 
        GNU bash, version 5.0.17(1)-release (x86_64-pc-linux-gnu)
        These shell commands are defined internally.  Type `help' to see this list.
        Type `help name' to find out more about the function `name'.
        Use `info bash' to find out more about the shell in general.
        Use `man -k' or `info' to find out more about commands not in this list.

        A star (*) next to a name means that the command is disabled.

        job_spec [&]                                            history [-c] [-d offset] [n] or history -anrw [filen>
        (( expression ))                                        if COMMANDS; then COMMANDS; [ elif COMMANDS; then CO>
        . filename [arguments]                                  jobs [-lnprs] [jobspec ...] or jobs -x command [arg>
        :                                                       kill [-s sigspec | -n signum | -sigspec] pid | jobsp>
        [ arg... ]                                              let arg [arg ...]
        [[ expression ]]                                        local [option] name[=value] ...
        alias [-p] [name[=value] ... ]                          logout [n]
        bg [job_spec ...]                                       mapfile [-d delim] [-n count] [-O origin] [-s count]>
        bind [-lpsvPSVX] [-m keymap] [-f filename] [-q name] >  popd [-n] [+N | -N]
        break [n]                                               printf [-v var] format [arguments]
        builtin [shell-builtin [arg ...]]                       pushd [-n] [+N | -N | dir]
        caller [expr]                                           pwd [-LP]
        case WORD in [PATTERN [| PATTERN]...) COMMANDS ;;]...>  read [-ers] [-a array] [-d delim] [-i text] [-n ncha>
        cd [-L|[-P [-e]] [-@]] [dir]                            readarray [-d delim] [-n count] [-O origin] [-s coun>
        command [-pVv] command [arg ...]                        readonly [-aAf] [name[=value] ...] or readonly -p
        compgen [-abcdefgjksuv] [-o option] [-A action] [-G g>  return [n]
        complete [-abcdefgjksuv] [-pr] [-DEI] [-o option] [-A>  select NAME [in WORDS ... ;] do COMMANDS; done
        compopt [-o|+o option] [-DEI] [name ...]                set [-abefhkmnptuvxBCHP] [-o option-name] [--] [arg >
        continue [n]                                            shift [n]
        coproc [NAME] command [redirections]                    shopt [-pqsu] [-o] [optname ...]
        declare [-aAfFgilnrtux] [-p] [name[=value] ...]         source filename [arguments]
        dirs [-clpv] [+N] [-N]                                  suspend [-f]
        disown [-h] [-ar] [jobspec ... | pid ...]               test [expr]
        echo [-neE] [arg ...]                                   time [-p] pipeline
        enable [-a] [-dnps] [-f filename] [name ...]            times
        eval [arg ...]                                          trap [-lp] [[arg] signal_spec ...]
        exec [-cl] [-a name] [command [arguments ...]] [redir>  true
        exit [n]                                                type [-afptP] name [name ...]
        export [-fn] [name[=value] ...] or export -p            typeset [-aAfFgilnrtux] [-p] name[=value] ...
        false                                                   ulimit [-SHabcdefiklmnpqrstuvxPT] [limit]
        fc [-e ename] [-lnr] [first] [last] or fc -s [pat=rep>  umask [-p] [-S] [mode]
        fg [job_spec]                                           unalias [-a] name [name ...]
        for NAME [in WORDS ... ] ; do COMMANDS; done            unset [-f] [-v] [-n] [name ...]
        for (( exp1; exp2; exp3 )); do COMMANDS; done           until COMMANDS; do COMMANDS; done
        function name { COMMANDS ; } or name () { COMMANDS ; >  variables - Names and meanings of some shell variabl>
        getopts optstring name [arg]                            wait [-fn] [id ...]
        hash [-lr] [-p pathname] [-dt] [name ...]               while COMMANDS; do COMMANDS; done
        help [-dms] [pattern ...]                               { COMMANDS ; }

- I can see the help syntax here:

        for (( exp1; exp2; exp3 )); do COMMANDS; done  

- I add the for loop:

        if [[ $1 -gt 0 ]]
        then
            for (( i = $1; i > 0; i-- ))
            do
                echo $i
            done
        else
            echo "Include a positive integer as the first argument."
        fi

- The script works as intended!

## Adding pauses between numbers

- We need to use some non built in commands. We can display available pacakges using ls /bin:

        ~/project$ ls /bin
        addr2line
        al       
        al2                                  
        app
        ...
        znew

- There is a pacakge called sleep, I will check its manual:

        /project$ man sleep
        SLEEP(1)                                        User Commands                                        SLEEP(1)

        NAME
            sleep - delay for a specified amount of time

        SYNOPSIS
            sleep NUMBER[SUFFIX]...
            sleep OPTION

        DESCRIPTION
            Pause for NUMBER seconds.  SUFFIX may be 's' for seconds (the default), 'm' for minutes, 'h' for hours
            or 'd' for days.  Unlike most implementations that require NUMBER be an integer, here NUMBER may be an
            arbitrary  floating point number.  Given two or more arguments, pause for the amount of time specified
            by the sum of their values.

            --help display this help and exit

            --version

- I added a second sleep after each number is printed:

        if [[ $1 -gt 0 ]]
        then
            for (( i = $1; i > 0; i-- ))
            do
                echo $i
                sleep 1
            done
        else
            echo "Include a positive integer as the first argument."
        fi

- Script works as intended, but I need it to print to zero:

        if [[ $1 -gt 0 ]]
        then
        for (( i = $1; i >= 0; i-- ))
        do
            echo $i
            sleep 1
        done
        else
        echo "Include a positive integer as the first argument."
        fi

- The script works, now I need it to display a title:

        echo -e "\n~~ Countdown Timer ~~\n"


## Using a While Loop

- We can comment out existing code using 
        : '
            line 1
            ...
        '

- I commented out the for loop, I check help for while:

        ~/project$ help while
        while: while COMMANDS; do COMMANDS; done
            Execute commands as long as a test succeeds.
            
            Expand and execute COMMANDS as long as the final command in the
            `while' COMMANDS has an exit status of zero.
            
            Exit Status:
            Returns the status of the last command executed.

- I intialise a variable called I:

        I=$1

- I create a while-loop:

        I=$1
        while [[ $I -ge 0 ]]
        do
            echo $I
        done


- I need to deincrement I:

        I=$1
        while [[ $I -ge 0 ]]
        do
            echo $I
            (( I-- ))
            sleep 1
        done

- The script works

## Finished Script:

        #!/bin/bash

        # Program that counts down to zero from a given argument

        echo -e "\n~~ Countdown Timer ~~\n"

        if [[ $1 -gt 0 ]]
        then
            : '
            for (( i = $1; i >= 0; i-- ))
            do
                echo $i
                sleep 1
            done
            '

        I=$1
        while [[ $I -ge 0 ]]
            do
                echo $I
                (( I-- ))
                sleep 1
            done
        else
            echo Include a positive integer as the first argument.
        fi
