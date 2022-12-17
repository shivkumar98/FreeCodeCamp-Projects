# 1: Learn Bash By Building a Boilerplate

## 1.1 - Basic Bash Commands

**1) Change directory:** 

        cd <directory> # enters directory

**2) List files:**

        ls
        ls -l # long list format
        ls -a # list all files

**3) Look inside a file:**

        more index.html # shows contents of index.html

**4) Clear terminal:**

        clear # clears terminal

**5) Print working directory:**

        pwd # prints current location

**5) Make directory:**

        mkdir <directory_name>
        mkdir current/child  # makes a child folder in current folder

**6) Printing to console/files:**

        echo text # prints text to console
        echo text >> README.md # prints text inside README.md

**6) Creating files:**

        touch index.html # creates index.html in current directory
        touch client/asset/font/bold.font # creates bold.font in client/asset

**7) Copying and Moving Files/Directories:**
        cp <file> <destination>

- If you want to copy a folder AND its contents, you must add the resursive flag
    
        cp -R website-boilerplate shivs-website # copies website-boilerplate and its files to shivs-website directory

**8) Moving/renaming files:**

        mv <file> <directory>

- can also be used to rename a file:

        mv index.js index.html # renames index.js to index.html

**9) Removing files:**

        rm <file>
    

- To remove a folder and its contents you must use recursive flag:

        rm -r fonts # deletes fonts folder entirely

**10) Removing directory:**

        rmdir <directory>

**11) Tree view of directory:**
        
        find

- To find the working directory of a specific file, we can use the name flag:

        find -name index.html # lists working directory of all files with name index.html in current directory

**12) Exit terminal**

        exit

**13) Getting help with a command:**

        ls --help # shows documentation for ls commands