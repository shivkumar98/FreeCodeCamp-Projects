# Relational Database Certification

## 1: Learn Bash By Building a Boilerplate

Some of the fundamental Bash commands include:
- cd: change directory
- ls: list files
    - we can add a -l flag to list contents in long list format: 'ls -l'
    - we can add -a flag to list all files: 'ls -a'
- more: looks inside a file
- clear: clears terminal
- pwd: print working directory
- mkdir: makes directory
    - you can make a directory in a sub folder by writing the current directory
    - e.g. mkdir current/child makes a child folder in current folder
- echo: prints to console
    - you can print to a file also
    - e.g. echo hello world! &gt;&gt; README.md
- touch: makes a file, e.g. 'touch index.html'
    - you can touch files in other directories too
    - e.g. touch client/asset/font/bold.font
- cp: copies files/directories
    - cp &lt;file&gt; &lt;desitnation&gt;
    - You can copy a folder recursively using -R flag
    - e.g. cp -R website-boilerplate shivs-website
- mv: moves files/directories
    - can also be used to rename a file, e.g. 'mv index.js index.html'
- rm: removes files
    - rm &lt;fileName&gt;
    - -r flag removes directories and contents recursively, this is useful if you want to delete a directory with content inside
    - e.g. rm -r fonts
- rmdir: removes directory
- find: lists all files of a folder in a tree view
    - -name flag lets you search for a file/directory
    - e.g. find -name index.html
- '--help' is a flag which gives help for a command
    - e.g. 'ls --help'
- exit: exits terminal
