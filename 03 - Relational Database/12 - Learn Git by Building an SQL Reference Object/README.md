# 12 Learn Git by Building an SQL Reference Object

# Introduction

Git is a version control sytstem that keeps track of all the changes you make to a codebase. In this tutorial, I will learn how Git keeps track of code by creating an object commonly used by SQL commands.

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

# 3 Creating sql_reference.JSON

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

# 5 Adding Database Connection

- I update the sql_reference.json object:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-14-02-47.png)

- I check the status again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-14-03-39.png)

- Git recognises that a file is modified rather than untracked since it was committed already.

## git diff

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

## git branch

- I check which branch I am on using git branch command:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-14-21-40.png)

## Creating New Branch: git branch <branch_name>

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

## Adding SQL Table reference

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

## git log --oneline

- This is really long! We can use the --oneline flag:

        ~/project/sql_reference$ git log --oneline

- This outputs:

    ![](2022-12-29-15-01-21.png)

## Switching back to main branch

- I switch back to the main branch using the checkout command:

        ~/project/sql_reference$ git checkout main
        Switched to branch 'main'

- Looking back at the sql_reference.json file, we can see the changes dissapeared:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-15-03-15.png)

- The changes from the other branch on not visible on this one!

- Again I check the commit history:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-15-04-55.png)

## git merge

- Now that I am on the main branch, I can merge the changes in the feat/add-create-table-reference using the git merge command:

        ~/project/sql_reference$ git merge feat/add-create-table-reference

- This prints the following to terminal:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-15-09-16.png)

- Checking to commit history again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-15-12-28.png)

## Deleting a Branch

- We can delete a branch using the branch command with the -d flag.

- We shall delete the old branch:

        ~/project/sql_reference$ git branch -d feat/add-create-table-reference
            Deleted branch feat/add-create-table-reference (was 87efc2f).

<br><hr>

# 9 New Branch: feat/add-drop-table-reference

## Creating New Branch

- We can use the checkout command to create and switch to a new branch named feat/add-drop-table-reference:

        ~/project/sql_reference$ git checkout -b feat/add-drop-table-reference

## Updating sql_reference.json

- I update the sql_reference.json with a new key-value pair for the table object.

- The sql_reference.json now looks like:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-15-22-54.png)

- Checking the status again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-15-24-06.png)

- Checking the differences:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-15-24-42.png)

- Added json file to staging:

        ~/project/sql_reference$ git add sql_reference.json

## Commiting Changes

- Commiting the changes to git:

        ~/project/sql_reference$ git commit -m "feat: add drop table reference"

## Switching Back to main Branch

- We switch back to the main branch:

        ~/project/sql_reference$ git checkout main

- I merge the changes from the other branch:

        ~/project/sql_reference$ git merge feat/add-drop-table-reference

## Deleting Created Branch

- I deleted the other branch:

        ~/project/sql_reference$ git branch -d feat/add-drop-table-reference
         Deleted branch feat/add-drop-table-reference (was 16ca4d4).

<br><hr>

# 10 New Branch: feat/add-column-references

## Creating Add Column Branch

- I created a new branch:

        ~/project/sql_reference$ git checkout -b feat/add-column-references
        Switched to a new branch 'feat/add-column-references'

- This will be a working process branch!

## Updating sql_reference.json file:

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

# 11: Fixing error on new branch   

- There was an error in one of the commands, we shall fix it by cloning another branch!

## Creating fix/create-table-syntax Branch

- I create another branch:

        ~/project/sql_reference$ git checkout -b fix/create-table-syntax
            Switched to a new branch 'fix/create-table-syntax'

## Fixing Bug

- The create table command in the JSON file is missing the brackets!

- I update the sql_reference.json file:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-15-58-12.png)

- I check the differences:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-15-58-51.png)

- I then add the files to staging area:

        ~/project/sql_reference$ git add .

## Commit Changes

- I commiit the changes:

        ~/project/sql_reference$ git commit -m "fix: create table syntax"
        [fix/create-table-syntax 3ad2ef3] fix: create table syntax
        1 file changed, 1 insertion(+), 1 deletion(-)

## Change Back To main Branch

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

# 12 Rebase Branch

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

## Updating sql_reference.json Again

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

## Updating sql_reference.json file:

- I add another key-value pair to the row object with value: "Update table_name SET column_name = new_value WHERE condition;"

- The sql_reference.json is updated to:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-17-19-26.png)

- I check the status:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-29-17-20-21.png)

<br><hr>

# 16 Git stash

- We made a mistake earlier! 😰😰😰

- The update we applied to sql_reference.json was an insert command, not an update

## git stash

- We can stash changes so we can add them to another branch:

        ~/project/sql_reference$ git stash

- This prints to terminal:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-09-45-41.png)

- The uncommited changes have now dissapeared:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-09-46-28.png)

- Looking at the status:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-09-47-30.png)

## git stash list

- We can view stashed changes with git stash list:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-09-48-19.png)

## git stash pop

- You can bring the changes back with git stash pop:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-09-49-04.png)

- This removes the last stashed save!

- The JSON file is restored:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-09-50-07.png)

- Listing the stashes again returns nothing:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-09-52-14.png)

- I stash the changes again:

        ~/project/sql_reference$ git stash

## git stash show

- We can see a condensed view of the stashes with git stash show:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-09-53-56.png)

- We can see the full changes of the last patch using the -p flag:

        ~/project/sql_reference$ git stash show -p

- This diaplays:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-09-55-22.png)

## git stash apply

- We can apply the change in the stash without removing it using the git stash apply command:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-09-57-09.png)

- Looking at the JSON file, we can see the stash has been applied:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-09-57-50.png)

- Looking at the stash list again:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-09-58-28.png)

- I stash the changes again

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-09-59-24.png)

- The most recent stash will appear at the top (stash@{0})

## git stash show stasg@{#}

- We can display details of a specific stash by using its ID.

- I display details of oldest stash:

    ![](/03%20-%20Relational%20Database/12%20-%20Learn%20Git%20by%20Building%20an%20SQL%20Reference%20Object/screenshots/2022-12-30-10-01-42.png)

- Displaying all details using patch flag:

    ![](2022-12-30-10-04-51.png)


## git stash drop

- We have two identical stashes! We can drop a specified stash using git stash drop &lt;stashname&gt;

- I drop one of the stashes since they're identical:

    ![](2022-12-30-10-07-17.png)

- Listing stashes again:

    ![](2022-12-30-10-08-18.png)

## Changing Back To Main Branch

- I switch back to main branch:

## Deleting Inssert Row Reference Branch

- I delete the branch:

    ![](2022-12-30-10-12-41.png)


<br><hr>

# 17 Creating Add More Row References Branch

- I create and checkout a new branch:

        ~/project/sql_reference$ git checkout -b feat/add-more-row-references
        Switched to a new branch 'feat/add-more-row-references'

- Viewing stashes again:

    ![](2022-12-30-10-25-34.png)

- Popping the stash:

    ![](2022-12-30-10-26-44.png)

- Verifying the stash list:

    ![](2022-12-30-10-27-43.png)

- Looking at the difference, we can see the update key has been added:

    ![](2022-12-30-10-28-33.png)

- Adding changes:

        ~/project/sql_reference$ git add .

- Viewing the status:

    ![](2022-12-30-10-29-40.png)

- Committing the changes:

    ![](2022-12-30-10-30-23.png)

## Changing back to main branch

- I change back to the main branch to merge the changes:

        ~/project/sql_reference$ git checkout main
        Switched to branch 'main'

- Merge the changes:

    ![](2022-12-30-10-32-11.png)

# 18 Changing back to Add Column References Branch

- I switch back to the other branch:

    ![](2022-12-30-10-33-38.png)

## Rebasing against main branch

- I rebase against main branch:

    ![](2022-12-30-10-34-58.png)

- There is an error!

- Looking at the JSON file again:

    ![](2022-12-30-10-35-43.png)

- I make the JSON file whole again:

    ![](2022-12-30-10-36-49.png)

- Looking at the status:

    ![](2022-12-30-10-37-33.png)

- I add the files to staging:

        ~/project/sql_reference$ git add .

- Displaying the status again:

    ![](2022-12-30-10-38-57.png)

- Continuing with rebase command:

    ![](2022-12-30-10-39-34.png)

- Viewing the commit history:

