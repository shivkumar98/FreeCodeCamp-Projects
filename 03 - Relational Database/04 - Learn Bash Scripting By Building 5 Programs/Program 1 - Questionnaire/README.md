# Program 1: Questionnaire

## Contents:

1. [Creating questionnaire.sh file](#creating-questionnairesh-file)
1. [Adding location of shell interpreter](#adding-location-of-shell-interpreter)
1. [Changing Permissions](#changing-permissions)
1. [Functions and Variables (Adding question1 and question2)](#functions-and-variables-adding-question1-and-question2)
1. [Taking Input From User](#taking-input-from-user)
1. [Adding a title](#adding-a-title)
1. [Adding spaces around title](#adding-spaces-around-title)
1. [Creating question 3](#creating-question-3)
1. [Final Bash Script](#final-bash-script)

<hr>

## Creating questionnaire.sh file:

- Created a questionnaire.sh file in the project folder:

~/project$ touch questionnaire.sh
~/project$ echo hello questionnaire >> questionnaire.sh
~/project$ echo echo hello questionnaire >> questionnaire.sh 

- Running the shell script with sh uses the shell interpreter:

    sh questionnaire.sh;

    - This displayed hello questionnaire to the console.

- Running the script using bash will use the bash interpreter:

    bash questionnaire.sh;

- This again display hello questionnaire to the console.

<hr>

## Adding location of shell interpreter:

- We can display the location of the bash interpreter:

    which bash

    - This displays /usr/bin/bash to the console

- We can instruct a bash script on which interpreter to use by declaring it in a shebang at the top of the file:

    #!<path_to_interpreter>

    - E.g. #!/bin/bash

- I needed to add '#!/bin/bash' to the top of questionnaire.sh]

- We can instruct the console to run the default interpreter for the bash script:

    ./questionnaire.sh

- The permissions were denied for this!

<hr>

## Changing Permissions:

- Displaying the files:

    ~/project$ ls -l
    total 8
    drwxr-sr-x 3 codeally strove 4096 Dec 19 08:18 learn-bash-scripting-by-building-five-programs
    -rw-r--r-- 1 codeally strove   28 Dec 19 08:38 questionnaire.sh
    
- -rw-r--r-- describes the permissions of a file.
    - r means read, w means write, x means execute.
    - There is no x here! So

- Adding the execute permissions using chmod command:

    chmod +x questionnaire.sh 

- Relisting the files now displays:

    -rwxr-xr-x 1 codeally strove   28 Dec 19 08:38 questionnaire.sh

- Adding commands to my shell script:

    ~/project$ echo 'echo hello terminal' >> questionnaire.sh
    ~/project$ echo 'ls -l' >> questionnaire.sh

- Executing the script:

    ~/project$ ./questionnaire.sh
    hello terminal
    total 8
    drwxr-sr-x 3 codeally strove 4096 Dec 19 08:18 learn-bash-scripting-by-building-five-programs
    -rwxr-xr-x 1 codeally strove   54 Dec 19 08:52 questionnaire.sh

- I need to delete all lines except shebang in the script:

    ~/project$ sed -i '$ d' questionnaire.sh 
    ~/project$ more questionnaire.sh 
        #!/usr/bin/bash
        #!/bin/bash
        echo hello terminal
    ~/project$ sed -i '$ d' questionnaire.sh 
    ~/project$ sed -i '1d' questionnaire.sh
    ~/project$ more questionnaire.sh 
        #!/bin/bash

<hr>

## Functions and Variables (Adding question1 and question2)

- You can create variables and functions within bash, to create a variable you have the following syntax

- Create a question with variable name QUESTION1 set to "what's your name?"

    echo 'QUESTION1="What'"'"'s your name?"' >> questionnaire.sh

        - The single quotation needed to be escaped!

- To call a variable, it must be prefaced with $

    - I will add a line to print the first question at the bottom of the script:

            ~/project$ echo 'echo $QUESTION1' >> questionnaire.sh 

- I now execute the script:

    ~/project$ ./questionnaire.sh 
        What's your name?

<hr>

## Taking Input From User

- You can take input from user using read keyword:

    read VARIABLE_NAME

- Storing input in variable called NAME:

    ~/project$ echo 'read NAME' >> questionnaire.sh 

- I will print "Hello name." in the script:

    ~/project$ echo 'echo Hello $NAME.' >> questionnaire.sh

- Running the script:

    ~/project$ ./questionnaire.sh 
        What's your name?
        Shiv
        Hello Shiv.

- Creating QUESTION2 variable with text "Where are you from?"

    ~/project$ echo 'QUESTION2="Where are you from?"' >> questionnaire.sh

- I inserted the printing of QUESTION2 on line 8 using sed:

    ~/project$ sed -i '8i\echo $QUESTION2' questionnaire.sh

- Reading input from user for QUESTION2:

    ~/project$ sed -i '9i\read LOCATION' questionnaire.sh

- Updating the response from hello name to hello name from location.:

    ~/project$ sed -i '$d' questionnaire.sh # deleting last line
    ~/project$ echo 'echo "Hello $NAME from $LOCATION."' >> questionnaire.sh 

- Running Script:

    ~/project$ ./questionnaire.sh 
        What's your name?
        Shiv
        Where are you from?
        UK
        Hello Shiv from UK.

## Adding a title:

- I want to print a title before any of the questions are asked, so I echo a line on line 2:

    ~/project$ sed -i '2s/^/ echo ~~ Questionnaire ~~ /' questionnaire.sh 

- Running the script:

    ~/project$ ./questionnaire.sh 
        ~~ Questionnaire ~~
        What's your name?
        Shiv
        Where are you from?
        UK
        Hello Shiv from UK.


## Adding spaces around title:

- I need help from echo:

    ~/project$ man echo # this just prints --help

- We can use the man command instead for a manual:

    ~/project$ man echo

- Replacing line 2:

    - Deleting second line:

        ~/project$ sed -i '2d' questionnaire.sh 

    - Inserting new line:

        ~/project$ sed -i '2i\ echo "\n~~ Questionnaire ~~\n"' questionnaire.sh 

- My solution generated literal line breaks:

    #!/bin/bash
    echo "
    ~~ Questionnaire ~~
    "

    QUESTION1="What's your name?"
    QUESTION2="Where are you from?"

    echo $QUESTION1
    read NAME

    echo $QUESTION2
    read LOCATION

    echo Hello $NAME from $LOCATION.

- Running the script:

    ~/project$ ./questionnaire.sh 

        ~~ Questionnaire ~~

        What's your name?
        Shiv
        Where are you from?
        UK
        Hello Shiv from UK.

- I cheated and manually set the value in the script:

    #!/bin/bash
    echo -e "\n~~ Questionnaire ~~\n"


    QUESTION1="What's your name?"
    QUESTION2="Where are you from?"

    echo $QUESTION1
    read NAME

    echo $QUESTION2
    read LOCATION

    echo Hello $NAME from $LOCATION.

- I realised that I didn't have to do everything via terminal :(

- I ran the script:

    ~/project$ ./questionnaire.sh 

    ~~ Questionnaire ~~

    What's your name?
    Shiv
    Where are you from?
    UK
    Hello Shiv from UK.

## Creating question 3:

- Added question:

    QUESTION3="What's your favorite coding website?"

- echoed the question:

    echo $QUESTION3

- Read the input:

    read WEBSITE

- Modified message from script:

    echo Hello $NAME from $LOCATION. I learned that your favorite coding website is $WEBSITE!

- Running the program:

    ~/project$ ./questionnaire.sh 

    ~~ Questionnaire ~~

    What's your name?
    Shiv
    Where are you from?
    UK
    What's your favorite coding website?
    FCC
    Hello Shiv from UK. I learned that your favorite coding website is FCC!

- Added line break before response is displayed

    echo -e "\nHello $NAME from $LOCATION. I learned that your favorite coding website is $WEBSITE!"

- Application works! Project Finished!

## Final Bash Script:

    #!/bin/bash
    echo -e "\n~~ Questionnaire ~~\n"


    QUESTION1="What's your name?"
    QUESTION2="Where are you from?"
    QUESTION3="What's your favorite coding website?"

    echo $QUESTION1
    read NAME

    echo $QUESTION2
    read LOCATION

    echo $QUESTION3
    read WEBSITE

    echo -e "\nHello $NAME from $LOCATION. I learned that your favorite coding website is $WEBSITE!"
