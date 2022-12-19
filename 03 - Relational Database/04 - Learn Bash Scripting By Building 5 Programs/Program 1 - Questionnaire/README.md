# 4: Learn Bash Scripting By Building 5 Programs

## Program 1: Questionnaire

### Creating questionnaire.sh file:

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

### Adding location of shell interpreter:

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

### Changing Permissions:

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

### Functions and Variables

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

### Taking Input From User

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