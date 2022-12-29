# 12 Learn Git by Building an SQL Reference Object

# Introduction

Git is a version control sytstem that keeps track of all the changes you make to a codebase. In this tutorial, I will learn how Git keeps track of code by creating an object commonly used by SQL commands.

# 1 Basic Git Commands

- I make an sql-reference directory in project folder:

~/project$ mkdir sql_reference

- I change into the new directory:

~/project$ cd sql_reference/

## git init

- This folder shall be used for the git repository, in order to do this you use the command "git init". This will create a directory named ".git"

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-13-40-57.png)

- I display all contents in the folder:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-13-41-24.png)

## Git Branches

- A git repository has branches to help keep track of the code. The "main" branch is a common branch which may be used for code for production.

## git status

- The "git status" command is used to see which branch you are on:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-13-45-40.png)

## git checkout

- We can create a new branch to out repository using the "git checkout" command with a -b flag (b for branch)

- Using this command, I create a "main" branch

        ~/project/sql_reference$ git checkout -b main
            Switched to a new branch 'main'

- I check the status again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-13-48-12.png)

## Creating README.md

- I create a new file inside the repository:

    ~/project/sql_reference$ touch README.md
    ~/project/sql_reference$ echo "SQL Reference" > README.md

- Using the status command again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-13-50-21.png)

- This is showing that the README file is not added to git yet so it is untracked.

## git add <file_name>

- We can add a file to be tracked using the "git add" command which adds the file to the staging area:

        ~/project/sql_reference$ git add README.md

- Checking the status again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-13-53-21.png)

## Creating sql_reference.JSON

- I create another file:

        ~/project/sql_reference$ touch sql_reference.json

- I check the status again and we again have an untracked file:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-13-55-20.png)

- I add the file to staging area:

        ~/project/sql_reference$ git add sql_reference.json 

- Checking the status again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-13-56-27.png)

## git commit

- We now have two files in staging. We shall commit them with a message using the -m flag (m for message) on the git commit command

- I do my intitial commit:

    ~/project/sql_reference$ git commit -m "Initial commit"

- This displays the following to the terminal:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-13-58-37.png)

- The files in the staging area are now in git history!

- I check the status again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-13-59-35.png)

- The working tree is now clean!

## git log

- We can see commit history using the git log command:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-14-00-41.png)


## 2 Adding Database Connection

- I update the sql_reference.json object:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-14-02-47.png)

- I check the status again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-14-03-39.png)

- Git recognises that a file is modified rather than untracked since it was committed already.

### git diff

- We can see new changes using git diff:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-14-05-17.png)

- The green lines are lines which are added!

- I add the new changes to staging using git add:

        ~/project/sql_reference$ git add sql_reference.json

- I check the status again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-14-06-54.png)

- I commit the changes with a message prefixed with "feat" which is common:

        ~/project/sql_reference$ git commit -m "feat: add create database reference"

- Viewing the commit history again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-14-13-15.png)

## 3 Adding drop key to database object

- I add a drop key to the kson object with a value of "DROP DATABASE database_name"

- The object now looks like:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-14-15-23.png)

- I checked the status again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-14-16-00.png)

- I check the differences again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-14-16-41.png)

- This shows one line was deleted, and two added.

- I commit the changes:
        
        ~/project/sql_reference$ git add sql_reference.json 

- I commit the changes with a message:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-14-19-20.png)

- I check the log again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-14-19-55.png)

- So far we've made changes on the main branch! We should work on another branch

## 4 Creatinng Another Branch

### git branch

- I check which branch I am on using git branch command:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-14-21-40.png)

### Creating New Branch: git branch <branch_name>

- We create a new branch named feat/add-create-table-reference:

        ~/project/sql_reference$ git branch feat/add-create-table-reference

- This clones the main branch since that was the previous branch we were on!

### Viewing the branches

- I view the branches again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-14-25-02.png)
    
- We can see the new branch but we are still on the main one as shown in green!

### git checkout <branch_name>

- We can change branches using the git checkout command:

        ~/project/sql_reference$ git checkout feat/add-create-table-reference

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-14-27-43.png)


- We again verify which branch we are on:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-14-28-17.png)

## 5 Merging Branches

- We often do not want to add changes directly to the main branch, we would rather merge changes from a staging branch.

### Adding SQL Table reference

- I add another object, alongside the database property of the JSON file.

- The sql_reference.json file now looks like:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-14-35-25.png)

- Showing the status again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-14-35-57.png)

- Checking the differences:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-14-36-30.png)

- Adding the file to staging area:

        ~/project/sql_reference$ git add sql_reference.json 

- I commit the changes:

        ~/project/sql_reference$ git commit -m "feat: add create table reference"

- This displays the following message:
    
    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-14-54-37.png)

- I check commit history:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-14-59-22.png)

### git log --oneline

- This is really long! We can use the --oneline flag:

        ~/project/sql_reference$ git log --oneline

- This outputs:

    ![](2022-12-29-15-01-21.png)

### Switching back to main branch

- I switch back to the main branch using the checkout command:

        ~/project/sql_reference$ git checkout main
        Switched to branch 'main'

- Looking back at the sql_reference.json file, we can see the changes dissapeared:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-15-03-15.png)

- The changes from the other branch on not visible on this one!

- Again I check the commit history:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-15-04-55.png)

### git merge

- Now that I am on the main branch, I can merge the changes in the feat/add-create-table-reference using the git merge command:

        ~/project/sql_reference$ git merge feat/add-create-table-reference

- This prints the following to terminal:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-15-09-16.png)

- Checking to commit history again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-15-12-28.png)

### Deleting a Branch

- We can delete a branch using the branch command with the -d flag.

- We shall delete the old branch:

        ~/project/sql_reference$ git branch -d feat/add-create-table-reference
            Deleted branch feat/add-create-table-reference (was 87efc2f).

## New Branch: feat/add-drop-table-reference

### Creating New Branch

- We can use the checkout command to create and switch to a new branch named feat/add-drop-table-reference:

        ~/project/sql_reference$ git checkout -b feat/add-drop-table-reference

### Updating sql_reference.json

- I update the sql_reference.json with a new key-value pair for the table object.

- The sql_reference.json now looks like:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-15-22-54.png)

- Checking the status again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-15-24-06.png)

- Checking the differences:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-15-24-42.png)

- Added json file to staging:

        ~/project/sql_reference$ git add sql_reference.json

### Commiting Changes

- Commiting the changes to git:

        ~/project/sql_reference$ git commit -m "feat: add drop table reference"

### Switching Back to main Branch

- We switch back to the main branch:

        ~/project/sql_reference$ git checkout main

- I merge the changes from the other branch:

        ~/project/sql_reference$ git merge feat/add-drop-table-reference