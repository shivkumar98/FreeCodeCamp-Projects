# 8 Learn Advanced Bash by Building a Kitty Ipsum Translator

## 1 Standard Output and Standard Error

- You can redirect the output of a command to a file using >

- I printed hello bash to a file:

~/project$ echo hello bash > stdout.txt

- Using a single > will create and overwrite the file with the command, a double >> will append to a file.

~/project$ echo hello bash >> stdout.txt

- The stdout.txt file looks like:

![](2022-12-27-09-54-40.png)

- If I execute this command:

~/project$ echo hello bash > stdout.txt

- Then the file is overwritten:

![](2022-12-27-09-55-31.png)

- We can empty the file by redirecting no command:

~/project$ > stdout.txt

### Redirecting Unsuccessful Commands to File:

- If you try to redirect an incorrect command to a file, nothing is printed:

~/project$ bad_command > stderr.txt
bash: bad_command: command not found

### stdout and stderr

- There are 2 types of outputs for a command:

1) stdout - Successful Output 
2) stderr - Unsuccessful Output 

- Both of these will print to the terminal by default

### Printing stderr Output

- In order to print the output of an unsuccessful command, you must prepend the redirect symbol with 2:

~/project$ bad_command 2> stderr.txt

- The stderr.txt file looks like:

![](2022-12-27-10-02-27.png)

- You can use 1> to redirect stdout which is used by default:

~/project$ echo hello bash 1> stdout.txt 

## 2 Standard In: stdin

- stdin is used to read information, usually from the keyboard.

- In order to read input from the keyboard, you use the READ keyword:

        ~/project$ read NAME
            shiv

### Redirection: Reading input from a File

- We can use redirection to read data from a file.

- E.g, if we wanted to READ a name variable using name.txt which contains the text "freeCodeCamp", then we execute the following:

        ~/project$ read NAME < name.txt 

- If we echo the NAME variable, it prints:

        ~/project$ echo $NAME
            freeCodeCamp

### Piped Command

- The pipe symbol instructs to use the output from one command as the input of another

- E.g., we can echo a command into a read command:

    ~/project$ echo Shiv | read NAME

- If I echo the name variable, it prints freeCodeCamp:

        ~/project$ echo $NAME
            freeCodeCamp

- When using the pipe, it is using another terminal instance. Hence the commands are being executed in isolation!


### Cat Command

- The cat command is used to display the contents of a file:

        ~/project$ cat name.txt
            freeCodeCamp

## Example Script

- I created a script which reads name and prints it out, along with a unsuccessful command:

    ![](2022-12-27-10-39-31.png)

- Instead of giving the stdin after executing the scipt, we can use pipe to set it beforehand:

        ~/project$ echo Shiv | ./script.sh
            Hello Shiv
            ./script.sh: line 4: bad_command: command not found

- We can redirect the stdout and stderr to files in one command:

        ~/project$ echo Shiv | ./script.sh 2> stderr.txt > stdout.txt 

- The stdout.txt and stderr.txt files look like

    ![](2022-12-27-10-44-26.png)

- We can use redirection to give the stdin from a text file:

        ~/project$ ./script.sh < name.txt 2> stderr.txt 
            Hello freeCodeCamp