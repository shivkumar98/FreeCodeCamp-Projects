# 14 Build a Number Guessing Gamer

## Introduction

In this certification project, I need to create a script which generates a random number between 1 and 10000 for user to guess.

## 1 Instructions
- I need to create a number_guess database

- I ned to create a scrip which passes the below user stories:

### User Stories:

1) Create a number_guessing_game folder in the project folder.

2) Create number_guess.sh in your number_ghuessing_game folder and give it executeable permissions.

3) Your script should have a shebang at the top which uses #!/bin/bash

4) Turn the number_guessing_game folder into a git repository.

5) The git repository should have atleast five commits.

6) Your script should randomly generate a number that users have to guess.

7) When you run yours script, you should prompt the user for a username with "Enter your username:". and take a username as input. Your database should allow usernames that are 22 characters.

8) If that username has been used before, it should print Welcome back, &lt;username>! You have played &lt;games_played> games, and your best game took &lt;best_game> guesses., with <username> being a users name from the database, &lt;games_played> being the total number of games that user has played, and &lt;best_game> being the fewest number of guesses it took that user to win the game

9) If the username has not been used before, you should print Welcome, &lt;username>! It looks like this is your first time here.

10) The next line printed should be Guess the secret number between 1 and 1000: and input from the user should be read

11) Until they guess the secret number, it should print It's lower than that, guess again: if the previous input was higher than the secret number, and It's higher than that, guess again: if the previous input was lower than the secret number. Asking for input each time until they input the secret number.

12) If anything other than an integer is input as a guess, it should print "That is not an integer, guess again:"

13) When the secret number is guessed, your script should print You guessed it in &lt;number_of_guesses> tries. The secret number was &lt;secret_number>. Nice job! and finish running

14) The message for the first commit should be Initial commit

15) The rest of the commit messages should start with fix:, feat:, refactor:, chore:, or test:

16) You should finish your project while on the main branch, your working tree should be clean, and you should not have any uncommitted changes

## 2 Project Commentary

- I create a folder in the project folder:
    
        ~/project$ mkdir number_guessing_game

- I change into the newly created folder:

        ~/project$ cd number_guessing_game/

- Create the number_guess.sh script:
    
        ~/project/number_guessing_game$ touch number_guess.sh

- Add executeable execution:

        ~/project/number_guessing_game$ chmod +x number_guess.sh 

- Added the shebang:

    ![](2022-12-30-20-16-15.png)

- Initialise git repo:

        ~/project/number_guessing_game$ git init
            Initialized empty Git repository in /home/codeally/project/number_guessing_game/.git/

- I add all files to staging:

        ~/project/number_guessing_game$ git add .

- I make my initial commit:

        ~/project/number_guessing_game$ git commit -m "Initial commit"
            [master (root-commit) 1aa5e64] Initial commit
            1 file changed, 8 insertions(+)
            create mode 100755 number_guess.sh

- The first four tests now pass:

    ![](2022-12-30-20-17-10.png)

- I add a print and read statement to take username:

        echo "Enter your username:"
        read $USERNAME

## Creating number_guess database

- I add the database connection to top of my script

- I create a database called number_guess:

        CREATE DATABASE number_guess;
            CREATE DATABASE

- I create a users table:

        CREATE TABLE users(user_id SERIAL PRIMARY KEY);
            CREATE TABLE

- I add a username column:

        ALTER TABLE users ADD COLUMN username VARCHAR(22);
            ALTER TABLE

- I add number of games and best game columns:

        ALTER TABLE users ADD COLUMN games_played INT;
            ALTER TABLE
        ALTER TABLE users ADD COLUMN best_game INT;
            ALTER TABLE