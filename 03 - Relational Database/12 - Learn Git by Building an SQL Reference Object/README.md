# 12 Learn Git by Building an SQL Reference Object

# Introduction

Git is a version control sytstem that keeps track of all the changes you make to a codebase. In this  240-lesson tutorial, I will learn how Git keeps track of code by creating an object commonly used by SQL commands.

# Table of Contents:

[1 Basic Git Commands](#1-basic-git-commands)
* [git init](#git-init)
* [Branches](#branches)
* [git status](#git-status)
* [git checkout](#git-checkout)

[2 Creating README.md](#2-creating-readmemd)
  * [git add <file_name>](#git-add--file-name-)


[3 Creating sql_reference.json](#3-creating-sql-referencejson)

[4 git commit](#4-git-commit)
  * [git log](#git-log)

[5 Adding Database Key to sql_reference.json](#5-adding-database-key-to-sql-referencejson)
  * [git diff](#--git-diff--)

[6 Adding drop key to database object](#6-adding-drop-key-to-database-object)

[7 Creatinng Another Branch](#7-creatinng-another-branch)
  * [git branch](#--git-branch--)
  * [Creating Add Create Table Reference Branch](#creating-add-create-table-reference-branch)
  * [Viewing the branches](#viewing-the-branches)
  * [git checkout <branch_name>](#git-checkout--branch-name-)

[8 Merging Branches](#8-merging-branches)
  * [Adding SQL Table reference To sql_reference.json](#--adding-sql-table-reference-to-sql-referencejson--)
  * [git log --oneline](#--git-log---oneline--)
  * [Switching back to main branch](#--switching-back-to-main-branch--)
  * [git merge](#--git-merge--)
  * [Deleting a Branch](#--deleting-a-branch--)

[9 Creating Add Drop Table Reference Branch](#9-creating-add-drop-table-reference-branch)
  * [Creating New Branch](#--creating-new-branch--)
  * [Adding Table Key to sql_reference.json](#--adding-table-key-to-sql-referencejson--)
  * [Commiting Changes](#--commiting-changes--)
  * [Switching Back to main Branch](#--switching-back-to-main-branch--)
  * [Deleting Created Branch](#--deleting-created-branch--)

[10 New Branch: feat/add-column-references](#10-new-branch--feat-add-column-references)
  * [Creating Add Column Branch](#--creating-add-column-branch--)
  * [Adding Column Key to sql_reference.json file](#--adding-column-key-to-sql-referencejson-file--)

[11 Fixing error on new branch](#11--fixing-error-on-new-branch)
  * [Creating fix/create-table-syntax Branch](#--creating-fix-create-table-syntax-branch--)
  * [Fixing Bug in Create Table Line in sql_reference.json](#--fixing-bug-in-create-table-line-in-sql-referencejson--)
  * [Commit Changes](#--commit-changes--)
  * [Change Back To main Branch](#--change-back-to-main-branch--)
  * [Switching Back to Feature Branch](#switching-back-to-feature-branch)

[12 Rebasing a Branch](#12-rebasing-a-branch)
  * [git rebase](#git-rebase)
  * [Updating sql_reference.json:](#updating-sql-referencejson-)

[13 Creating New Feature Branch:](#13-creating-new-feature-branch-)
  * [Updating sql_reference.json:](#updating-sql-referencejson--1)
  * [Changing to feat/add-column-references branch](#changing-to-feat-add-column-references-branch) 
  
[14 Rebase Conflict](#14-rebase-conflict)
  * [Updating sql_reference.json Again](#--updating-sql-referencejson-again--)

[15 Going Back to feat/add-insert-row-reference Branch](#15-going-back-to-feat-add-insert-row-reference-branch)
  * [Adding Row Update Key to sql_reference.json file](#--adding-row-update-key-to-sql-referencejson-file--)

[16 Git stash](#16-git-stash)
  * [git stash](#--git-stash--)
  * [git stash list](#--git-stash-list--)
  * [git stash pop](#--git-stash-pop--)
  * [git stash show](#--git-stash-show--)
  * [git stash apply](#--git-stash-apply--)
  * [git stash show stasg@{#}](#--git-stash-show-stasg------)
  * [git stash drop](#--git-stash-drop--)
  * [Changing Back To Main Branch](#--changing-back-to-main-branch--)
  * [Deleting Add Insert Row Reference Branch](#--deleting-add-insert-row-reference-branch--)

[17 Creating Add More Row References Branch](#17-creating-add-more-row-references-branch)
  * [Changing back to main branch](#--changing-back-to-main-branch--)

[18 Changing back to Add Column References Branch](#18-changing-back-to-add-column-references-branch)
  * [Rebasing against main branch](#--rebasing-against-main-branch--)
  * [Adding Primary Key to sql_references.json](#adding-primary-key-to-sql-referencesjson)
  * [Adding Foreign Key to sql_references.json](#--adding-foreign-key-to-sql-referencesjson--)

[19 Changing back to Row References Branch](#19-changing-back-to-row-references-branch)
  * [Adding Row Delete Key to the sql_reference.json File](#--adding-row-delete-key-to-the-sql-referencejson-file--)
  * [Going Back To Main Branch To Merge](#--going-back-to-main-branch-to-merge--)
  * [Deleting Row References Branch](#deleting-row-references-branch)

[20 Creating Fix: Add Missing Rename References Branch](#20-creating-fix--add-missing-rename-references-branch)
  * [Adding Database Rename Key to sql_reference.json](#--adding-database-rename-key-to-sql-referencejson--)

[21 Going Back to Colum References Branch](#21-going-back-to-colum-references-branch)
  * [Rebasing Against main Branch](#--rebasing-against-main-branch--)
  * [Rebase Conflicts](#--rebase-conflicts--)
  * [Adding unique Key to Column Object](#adding-unique-key-to-column-object)
  * [Rebase Conntinue](#--rebase-conntinue--)

[22 Undoing Commits](#22-undoing-commits)
  * [git reset](#--git-reset--)
  * [Git HEAD](#--git-head--)
  * [git revert](#--git-revert--)
  * [git show](#--git-show--)
  * [git rebase --interactive](#--git-rebase---interactive--)
  * [Squashing commits](#--squashing-commits--)
  * [Switching to main Branch](#--switching-to-main-branch--)
  * [Switching to Add Missing Rename References Branch](#--switching-to-add-missing-rename-references-branch--)
  * [Adding Table Rename Key to sql_reference.json](#--adding-table-rename-key-to-sql-referencejson--)
  * [Switch back to main branch](#--switch-back-to-main-branch--)

[22 gitignore](#22-gitignore)
  * [Creating add-gitignore Branch](#--creating-add-gitignore-branch--)
  * [Creating .gitignore](#--creating-gitignore--)
  * [Switching Back to main Branch](#--switching-back-to-main-branch---1)



<br><hr>

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



## Branches

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

<br><hr>

# 2 Creating README.md

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

<br><hr>

# 3 Creating sql_reference.json

- I create another file:

        ~/project/sql_reference$ touch sql_reference.json

- I check the status again and we again have an untracked file:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-13-55-20.png)

- I add the file to staging area:

        ~/project/sql_reference$ git add sql_reference.json 

- Checking the status again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-13-56-27.png)

<br><hr>

# 4 git commit

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

<br><hr>

# 5 Adding Database Key to sql_reference.json

- I update the sql_reference.json object:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-14-02-47.png)

- I check the status again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-14-03-39.png)

- Git recognises that a file is modified rather than untracked since it was committed already.

## **git diff**

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

<br><hr>

# 6 Adding drop key to database object

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

<br><hr>

# 7 Creatinng Another Branch

## **git branch**

- I check which branch I am on using **git branch** command:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-14-21-40.png)

## Creating Add Create Table Reference Branch

- We create a new branch named feat/add-create-table-reference:

        ~/project/sql_reference$ git branch feat/add-create-table-reference

- This clones the main branch since that was the previous branch we were on!

## Viewing the branches

- I view the branches again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-14-25-02.png)
    
- We can see the new branch but we are still on the main one as shown in green!

## git checkout <branch_name>

- We can change branches using the git checkout command:

        ~/project/sql_reference$ git checkout feat/add-create-table-reference

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-14-27-43.png)


- We again verify which branch we are on:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-14-28-17.png)

<br><hr>

# 8 Merging Branches

- We often do not want to add changes directly to the main branch, we would rather merge changes from a staging branch.

## **Adding SQL Table reference To sql_reference.json**

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

## **git log --oneline**

- This is really long! We can use the --oneline flag:

        ~/project/sql_reference$ git log --oneline

- This outputs:

    ![](2022-12-29-15-01-21.png)

## **Switching back to main branch**

- I switch back to the main branch using the checkout command:

        ~/project/sql_reference$ git checkout main
        Switched to branch 'main'

- Looking back at the sql_reference.json file, we can see the changes dissapeared:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-15-03-15.png)

- The changes from the other branch on not visible on this one!

- Again I check the commit history:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-15-04-55.png)

## **git merge**

- Now that I am on the main branch, I can merge the changes in the feat/add-create-table-reference using the git merge command:

        ~/project/sql_reference$ git merge feat/add-create-table-reference

- This prints the following to terminal:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-15-09-16.png)

- Checking to commit history again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-15-12-28.png)

## **Deleting a Branch**

- We can delete a branch using the branch command with the -d flag.

- We shall delete the old branch:

        ~/project/sql_reference$ git branch -d feat/add-create-table-reference
            Deleted branch feat/add-create-table-reference (was 87efc2f).

<br><hr>

# 9 Creating Add Drop Table Reference Branch

## **Creating New Branch**

- We can use the checkout command to create and switch to a new branch named feat/add-drop-table-reference:

        ~/project/sql_reference$ git checkout -b feat/add-drop-table-reference

## **Adding Table Key to sql_reference.json**

- I update the sql_reference.json with a new key-value pair for the table object.

- The sql_reference.json now looks like:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-15-22-54.png)

- Checking the status again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-15-24-06.png)

- Checking the differences:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-15-24-42.png)

- Added json file to staging:

        ~/project/sql_reference$ git add sql_reference.json

## **Commiting Changes**

- Commiting the changes to git:

        ~/project/sql_reference$ git commit -m "feat: add drop table reference"

## **Switching Back to main Branch**

- We switch back to the main branch:

        ~/project/sql_reference$ git checkout main

- I merge the changes from the other branch:

        ~/project/sql_reference$ git merge feat/add-drop-table-reference

## **Deleting Created Branch**

- I deleted the other branch:

        ~/project/sql_reference$ git branch -d feat/add-drop-table-reference
         Deleted branch feat/add-drop-table-reference (was 16ca4d4).

<br><hr>

# 10 New Branch: feat/add-column-references

## **Creating Add Column Branch**

- I created a new branch:

        ~/project/sql_reference$ git checkout -b feat/add-column-references
        Switched to a new branch 'feat/add-column-references'

- This will be a working process branch!

## **Adding Column Key to sql_reference.json file**

- I add another property to the JSON file:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-15-48-55.png)

- I check the differences with latest commit:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-15-50-10.png)

- I add all files to the staging area using "." as the filename, referring to current directory:


        ~/project/sql_reference$ git add .

- I commit my changes:

        ~/project/sql_reference$ git commit -m "feat: add column reference"

- I display the commit history:
    
    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-15-52-36.png)

- I change back to the main branch

        ~/project/sql_reference$ git checkout main
        Switched to branch 'main'

<br><hr>

# 11: Fixing error on new branch   

- There was an error in one of the commands, we shall fix it by cloning another branch!

## **Creating fix/create-table-syntax Branch**

- I create another branch:

        ~/project/sql_reference$ git checkout -b fix/create-table-syntax
            Switched to a new branch 'fix/create-table-syntax'

## **Fixing Bug in Create Table Line in sql_reference.json**

- The create table command in the JSON file is missing the brackets!

- I update the sql_reference.json file:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-15-58-12.png)

- I check the differences:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-15-58-51.png)

- I then add the files to staging area:

        ~/project/sql_reference$ git add .

## **Commit Changes**

- I commiit the changes:

        ~/project/sql_reference$ git commit -m "fix: create table syntax"
        [fix/create-table-syntax 3ad2ef3] fix: create table syntax
        1 file changed, 1 insertion(+), 1 deletion(-)

## **Change Back To main Branch**

- I change back to the main branch to merge the fix:

        ~/project/sql_reference$ git checkout main
        Switched to branch 'main'

- Merge:

        ~/project/sql_reference$ git merge fix/create-table-syntax
        Updating 16ca4d4..3ad2ef3
        Fast-forward
        sql_reference.json | 2 +-
        1 file changed, 1 insertion(+), 1 deletion(-)

- Displaying commit history of main branch:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-16-09-28.png)

- I delete the fix branch:

        ~/project/sql_reference$ git branch -d fix/create-table-syntax
            Deleted branch fix/create-table-syntax (was d3609d2).

## Switching Back to Feature Branch

- I switch back to the feature branch:

        ~/project/sql_reference$ git checkout feat/add-column-references
            Switched to branch 'feat/add-column-references'

- I display the commits of this branch:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-16-14-31.png)

<br><hr>

# 12 Rebasing a Branch

- The bug was fixed in the fix branch and merged to the main branch. We want the feat branch to pull the changes from the main branch. 

## git rebase

- We can rebase from the main branch with the following command:

        ~/project/sql_reference$ git rebase main

- This prints to the terminal:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-16-24-55.png)

- Displaying the git history:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-16-25-58.png)


## Updating sql_reference.json:

- I add a drop key to the column object in the json file.

- The sql_reference.json file now looks like:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-16-33-04.png)

- Looking at the status, we can see the file has been modified:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-16-33-52.png)

- Checking the differences:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-16-34-31.png)

- I add all the files to staging:

        ~/project/sql_reference$ git add .

- I commit the changes:

    ~/project/sql_reference$ git commit -m "feat: add drop column reference"
        [feat/add-column-references 5c0afc2] feat: add drop column reference
        1 file changed, 2 insertions(+), 1 deletion(-)

- Looking at the commit history:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-16-41-02.png)    

- Switching back to main branch:

        ~/project/sql_reference$ git checkout main
            Switched to branch 'main'

<br><hr>

# 13 Creating New Feature Branch:

- I create a new branch called feat/add-insert-row-reference:

        ~/project/sql_reference$ git checkout -b feat/add-insert-row-reference
            Switched to a new branch 'feat/add-insert-row-reference'

## Updating sql_reference.json:

- I add a new key-value pair to the JSON file.

- The JSON file now looks like:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-16-49-36.png)

- Checking status:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-16-50-11.png)

- Checking differences:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-16-50-42.png)

- Added files to staging:

    ~/project/sql_reference$ git add .

- Commiting:

        ~/project/sql_reference$ git commit -m "feat: add insert row reference"
            [feat/add-insert-row-reference 1dd6d5f] feat: add insert row reference
            1 file changed, 3 insertions(+)

- Switching back to main branch to merge changes:

        ~/project/sql_reference$ git checkout main

- Merged branches:

        ~/project/sql_reference$ git merge feat/add-insert-row-reference
        Updating d3609d2..1dd6d5f
        Fast-forward
        sql_reference.json | 3 +++
        1 file changed, 3 insertions(+)

- Checking logs:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-16-54-29.png)

## Changing to feat/add-column-references branch

- I changed branches:

        ~/project/sql_reference$ git checkout feat/add-column-references
            Switched to branch 'feat/add-column-references'

## 14 Rebase Conflict

- I rebase this branch from main branch:

        ~/project/sql_reference$ git rebase main

- The rebasing fails:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-16-58-19.png)

- Looking at the sql_reference.json file:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-17-03-44.png)

- I update the JSON file, so it now looks like:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-17-06-34.png)

- Checking the status:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-17-07-05.png)

- It says I'm still in process of rebasing. So I add the file to staging:

        ~/project/sql_reference$ git add .

- Checking the status again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-17-08-32.png)

- It shows all conflicts fixed so I trun the suggested command:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-17-10-05.png)

- Viewing commit history:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-17-10-44.png)    

## **Updating sql_reference.json Again**

- I update the JSON file again, so it now looks like:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-17-12-28.png)

- Checking the status:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-17-12-59.png)

- Checking the differences:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-17-13-25.png)

- Adding files to staging:

        ~/project/sql_reference$ git add .

- Commiting changes:

        ~/project/sql_reference$ git commit -m "feat: add rename column reference"
        [feat/add-column-references 958b7b9] feat: add rename column reference
        1 file changed, 2 insertions(+), 1 deletion(-)

<br><hr>

# 15 Going Back to feat/add-insert-row-reference Branch

- I change to the other feature branch:

        ~/project/sql_reference$ git checkout feat/add-insert-row-reference
            Switched to branch 'feat/add-insert-row-reference'

## **Adding Row Update Key to sql_reference.json file**

- I add another key-value pair to the row object with value: "Update table_name SET column_name = new_value WHERE condition;"

- The sql_reference.json is updated to:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-17-19-26.png)

- I check the status:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-17-20-21.png)

<br><hr>

# 16 Git stash

- We made a mistake earlier! 😰😰😰

- The update we applied to sql_reference.json was an insert command, not an update

## **git stash**

- We can stash changes so we can add them to another branch:

        ~/project/sql_reference$ git stash

- This prints to terminal:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-09-45-41.png)

- The uncommited changes have now dissapeared:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-09-46-28.png)

- Looking at the status:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-09-47-30.png)

## **git stash list**

- We can view stashed changes with git stash list:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-09-48-19.png)

## **git stash pop**

- You can bring the changes back with git stash pop:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-09-49-04.png)

- This removes the last stashed save!

- The JSON file is restored:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-09-50-07.png)

- Listing the stashes again returns nothing:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-09-52-14.png)

- I stash the changes again:

        ~/project/sql_reference$ git stash

## **git stash show**

- We can see a condensed view of the stashes with git stash show:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-09-53-56.png)

- We can see the full changes of the last patch using the -p flag:

        ~/project/sql_reference$ git stash show -p

- This diaplays:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-09-55-22.png)

## **git stash apply**

- We can apply the change in the stash without removing it using the git stash apply command:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-09-57-09.png)

- Looking at the JSON file, we can see the stash has been applied:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-09-57-50.png)

- Looking at the stash list again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-09-58-28.png)

- I stash the changes again

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-09-59-24.png)

- The most recent stash will appear at the top (stash@{0})

## **git stash show stasg@{#}**

- We can display details of a specific stash by using its ID.

- I display details of oldest stash:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-01-42.png)

- Displaying all details using patch flag:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-04-51.png)

## **git stash drop**

- We have two identical stashes! We can drop a specified stash using git stash drop &lt;stashname&gt;

- I drop one of the stashes since they're identical:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-07-17.png)

- Listing stashes again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-08-18.png)

## **Changing Back To Main Branch**

- I switch back to main branch:

        ~/project/sql_reference$ git checkout main

## **Deleting Add Insert Row Reference Branch**

- I delete the branch:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-12-41.png)


<br><hr>

# 17 Creating Add More Row References Branch

- I create and checkout a new branch:

        ~/project/sql_reference$ git checkout -b feat/add-more-row-references
        Switched to a new branch 'feat/add-more-row-references'

- Viewing stashes again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-25-34.png)

- Popping the stash:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-26-44.png)

- Verifying the stash list:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-27-43.png)

- Looking at the difference, we can see the update key has been added:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-28-33.png)

- Adding changes:

        ~/project/sql_reference$ git add .

- Viewing the status:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-29-40.png)

- Committing the changes:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-30-23.png)

## **Changing back to main branch**

- I change back to the main branch to merge the changes:

        ~/project/sql_reference$ git checkout main
        Switched to branch 'main'

- Merge the changes:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-32-11.png)

<br><hr>

# 18 Changing back to Add Column References Branch

- I switch back to the other branch:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-33-38.png)

## **Rebasing against main branch**

- I rebase against main branch:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-34-58.png)

- There is an error!

- Looking at the JSON file again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-35-43.png)

- I make the JSON file whole again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-36-49.png)

- Looking at the status:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-37-33.png)

- I add the files to staging:

        ~/project/sql_reference$ git add .

- Displaying the status again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-38-57.png)

- Continuing with rebase command:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-39-34.png)

- Viewing the commit history:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-40-12.png)

## Adding Primary Key to sql_references.json

- I add another key to the column object in the JSON file.

- The JSON file now looks like:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-47-00.png)

- Adding changes to staging:

        ~/project/sql_reference$ git add .

- Commiting changes:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-48-22.png)

## **Adding Foreign Key to sql_references.json**

- I add a foreign_key key to the column object to the JSON file.

- The JSON file now looks like:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-49-48.png)

- Checking the differences:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-50-19.png)

- Added files to staging area:

        ~/project/sql_reference$ git add .

- Committing changes:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-51-37.png)


<br><hr>

# 19 Changing back to Row References Branch

- I checkout the other branch:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-52-42.png)

## **Adding Row Delete Key to the sql_reference.json File**

- I add another key to the row object in the JSON file

- The JSON file now looks like:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-54-03.png)

- Looking at the differences:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-54-38.png)    

- Added files to staging area:

        ~/project/sql_reference$ git add .

- Committing changes:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-56-07.png)

## **Going Back To Main Branch To Merge**

- I checkout the main branch:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-56-59.png)

- Merging from row references branch:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-57-55.png)

## Deleting Row References Branch

- I delete the feat/add-more-row-references branch:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-59-18.png)

<br><hr>

# 20 Creating Fix: Add Missing Rename References Branch

- I create and checkout a new branch since we missed a bunch of renamed commands!

- I create and checkout a branch titled "fix/add-missing-rename-references" branch:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-11-00-59.png)

## **Adding Database Rename Key to sql_reference.json**

- I add a rename key to the database object in the JSON file:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-11-02-08.png)

- Viewing the differences:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-11-02-46.png)

- Adding files to staging area:

        ~/project/sql_reference$ git add .

- Committing changes:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-11-03-52.png)


<br><hr>

# 21 Going Back to Colum References Branch

- I got back to the column references branch:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-11-08-29.png)

## **Rebasing Against main Branch**

- There was a commit to main since working on this branch. I will rebase against main branch:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-11-09-43.png)

## **Rebase Conflicts**

- We have conflicts! Looking at the sql_reference.json file:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-11-10-38.png)

- I fix the sql_reference.json file:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-11-11-24.png)

- Checking the status:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-11-11-55.png)

- Adding files to staging area:

        ~/project/sql_reference$ git add .

- Checking the status:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-11-16-15.png)

- Continuing with rebase:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-11-16-56.png)

## Adding unique Key to Column Object

- I update the sql_reference.json object by adding a unique key in the column object.

- The sql_reference.json file now looks like:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-11-18-57.png)

- Viewing the differences:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-11-23-05.png)

- Adding the files to staging area:

        ~/project/sql_reference$ git add .

## **Rebase Conntinue**

- Committing changes:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-11-24-24.png)

<br><hr>

# 22 Undoing Commits

- We shall explore ways to undo a commit.

## **git reset**

- The git reset command lets us go "back in time" by travelling to any point in your commit history.

## **Git HEAD**

- The current **HEAD** is a reference to the last commit

- Hence we can go back 1 commit earlier using **git reset HEAD~1**:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-11-28-13.png)

- Viewing the commit history, we can see the last commit of "feat: add unique reference" is gone!

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-11-30-17.png)

- Viewing the git status:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-11-31-00.png)

- Looking at the differences:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-11-31-27.png)

- We can see the unique line is still there!

- Adding the files to staging:

        ~/project/sql_reference$ git add .

- Committing the changes:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-11-33-43.png)

## **git revert**

- Reverting is a good way to undo a commit

- Undoing the last commit using **git revert HEAD**:

        ~/project/sql_reference$ git revert HEAD

- git opens up nano asking for a commit message for the revert:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-11-36-26.png)

- I use the default message and exit nano!

- I view the commit history:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-11-37-43.png)


## **git show**

- I use **git show** to display details of last commit:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-11-39-48.png)

- I use **git show HEAD~1** to show details of orginal commit I reverted to:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-11-40-45.png)

## **git rebase --interactive**

- You can use the --interactive flag to manipulate the commits

- I enter **git rebase --interactive HEAD~2** into the terminal to change the last 2 commits:, this opens nano:


    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-11-58-08.png)


- The top two commits have "pick" next to them. Pick means it will use the commits as they were.

- At the bottom it shows:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-11-59-41.png)

- I replace the word pick with"d" for the two commits. So now it looks like:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-00-50.png)

- I saved and exit nano

- Showing commit history:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-01-48.png)

- The commit to add the unique command and the one to revert it have beemn dropped.

- I rebase to the --root using interactive command:

        ~/project/sql_reference$ git rebase --interactive --root

- This opens nano:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-03-53.png)

- The latest commit is at the bottom. There is an option "r" to edit the commit message.

- I edit the commit message for the commit with message "feat: add drop table reference":

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-07-02.png)

- I save and exit Nano.

- Another Nano instance opens asking me to edit the commit message:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-10-48.png)

- I add an "s" to the end of the commit message:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-11-15.png)

- I save and exit Nano.

- Showing commit history:


    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-12-09.png)

- I rebase from main branch

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-13-42.png)

- Displaying commit history again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-14-51.png)

## **Squashing commits**

- Squashing commits means taking several commits and turning them into one.

- We can use the "s" keyword to squash commits:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-22-43.png)

- I replace pick with "s" for commits I want to squash":
    
    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-27-39.png)

- This opens another instance of Nano:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-29-41.png)

- Nano brought up a list of all commit messages. I exit Nano

- Viewing  commit history:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-31-15.png)

- I bring up details of last commit using -1 flag@

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-32-08.png)

## **Switching to main Branch**

- I switch to main branch:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-32-50.png)


- Merging branch:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-34-12.png)

- Deleting the add column references branch:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-35-02.png)

## **Switching to Add Missing Rename References Branch**

- I checkout the other branches:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-36-41.png)

- Rebasing from main branch:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-37-22.png)

- Viewing 5 last commits:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-38-56.png)

## **Adding Table Rename Key to sql_reference.json**

- I udpate the sql_reference.json file to:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-41-03.png)

- Looking at the differences:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-41-34.png)

- I add the files to staging:

        ~/project/sql_reference$ git add .

- Committing changes:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-42-46.png)

- Viewing last 5 commits again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-50-49.png)

- There are two commits which can be squashed! I rebase using **git rebase --interactive HEAD~2**

- This brings up nano:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-53-11.png)

- I replace pick with "s":

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-54-11.png)

- This opens another instance of Nano:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-54-38.png)

- I add a new commit message:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-56-54.png)

- I add the following line:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-57-13.png)

- I save and exit Nano.

- I display details of the last commit:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-58-28.png)

## **Switch back to main branch**

- I checkout the main branch:

        ~/project/sql_reference$ git checkout main
        Switched to branch 'main'

- I merge branch:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-12-59-48.png)

- I delete the other branches except main:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-13-00-48.png)

- Viewing the commit history:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-13-01-17.png)


<br><hr>

# 23 gitignore

## **Creating add-gitignore Branch**

- I create and checkout a new branch:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-13-02-37.png)

- I create a file called ".env":

        ~/project/sql_reference$ touch .env

- .env files are used to store environment variables for running code. These sometimes contain secrets

- I add a secret text to the file:

        ~/project/sql_reference$ echo "SECRET=MY_SECRET" >> .env

- Displaying the status:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-13-06-50.png)

## **Creating .gitignore**

- I create the .gitignore file:

    ~/project/sql_reference$ touch .gitignore

- Displaying status:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-13-08-06.png)

- I add .env to the gitignore file:

    ~/project/sql_reference$ echo ".env" >> .gitignore

- Displaying the status:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-13-09-36.png)

- Now the .env file is ignored!

- Adding files to staging:

        ~/project/sql_reference$ git add .

- Committing changes:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-13-11-30.png)

- Creating another file called sample.env

        ~/project/sql_reference$ touch sample.env

- Displaying the status:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-13-12-41.png)

- Git will not ignore this file!

- I add some text to the sample.env file:

    ~/project/sql_reference$ echo "SECRET=" >> sample.env

- I add the file to staging:

    ~/project/sql_reference$ git add .

- I commit the changes:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-13-21-52.png)

- Displaying last 5 commits:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-13-22-40.png)

- The last two commits can be squashed, so I rebase the last 2 commits using **git rebase --interactive HEAD~2**. This brings up Nano:

    ![](2022-12-30-13-41-02.png)    

- I squash the commit for add sample.env:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-13-41-45.png)

- I save changes and this opens a new instance of Nano:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-13-43-59.png)

- I add a message to the top of the file:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-13-44-43.png)

- I check the commit details for last commit:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-13-45-50.png)

## **Switching Back to main Branch**

- I checkout the main branch:

        ~/project/sql_reference$ git checkout main
        Switched to branch 'main'

- I merge from the previous branch:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-13-47-26.png)

- Deleting the previous branch:

        ~/project/sql_reference$ git branch -d feat/add-gitignore
        Deleted branch feat/add-gitignore (was a798e23).

- Displaying the commit history:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-13-48-38.png)

- Tutorial is now complete!
