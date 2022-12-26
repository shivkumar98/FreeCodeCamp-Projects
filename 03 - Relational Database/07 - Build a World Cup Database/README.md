# **7: Build a World Cup Database [Certification Project]**

## Table of Contents:

[**Instructions**](#--instructions--)
+ [Part 1: Create the Database](#--part-1--create-the-database--)
+ [Part 2: Insert the Data](#--part-2--insert-the-data--)
+ [Part 3: Query the Database](#--part-3--query-the-database--)

[**User Stories**](#--user-stories--)

[**Project Commentary.**](#--project-commentary--)
+ [Part 1: Create the Database](#--part-1--create-the-database---1)
+ [Part 2: Insert Data](#--part-2--insert-data--)
  - [insert_data.sh Script](#--insert-datash-script---)
+ [Part 3: Query the Database](#--part-3--query-the-database---1)
  - [Query 1: Total number of goals in all games](#--query-1--total-number-of-goals-in-all-games--)
  - [Query 2: Average number of goals in all games from winning teams](#--query-2--average-number-of-goals-in-all-games-from-winning-teams--)
  - [Query 3: Average number of goals in all games from winning teams](#--query-3--average-number-of-goals-in-all-games-from-winning-teams--)
  - [Query 4: Average number of goals in all games from both teams](#--query-4--average-number-of-goals-in-all-games-from-both-teams--)
  - [Query 5: Most goals in a single game](#--query-5--most-goals-in-a-single-game--)
  - [Query 6: Number of games where winning team scored more than 2](#--query-6--number-of-games-where-winning-team-scored-more-than-2--)
  - [Query 7: Winner of 2018 tournament](#--query-7--winner-of-2018-tournament--)
  - [Query 8: List of teams in 2014 Eigth Final](#--query-8--list-of-teams-in-2014-eigth-final--)
  - [Query 9: Each Winning Team](#--query-9--each-winning-team--)
  - [Query 10: Year and name of champions](#--query-10--year-and-name-of-champions--)
  - [Query 11: Team name beginning with 'Co'](#--query-11--team-name-beginning-with--co---)
  - [queries.sh Script](#--queriessh-script--)



This is the second project which I need to complete in order to get the certification!

I will create a Bash script which enters information from World Cup games into PostgreSQL and then squery the database for statistics.

<hr>

## **Instructions**

- You are given a CSV file: games.csv which contains all games of final three rounds of World Cup since 2014. This file contains year, round, winner, opponent and number of goals each team scored.

- There are 3 parts to this project.

  ### **Part 1: Create the Database**

- Log in to psql and create database structure according to user stories below.

  ### **Part 2: Insert the Data**

- Complete the insert_data.sh script to insert all data from games.csv into the database.

- Tests have a 20s limit.

  ### **Part 3: Query the Database**

- Complete the empty echo commands in the queries.sh to produce results matching expected_output.txt

<br>
<hr>

## **User Stories**

1. Create a database named worldcup.
2. Connect to the wordlcup database and create the teams and games tables.
3. Teams table should have a team_id column that is SERIAL type and is primary key, and a name column which is UNIQUE.
 4. Games table should have game_id column that is SERIAL type and is primary key, and a name column which is UNIQUE.
5. The games table should have winner_id and oppent_id foreign key columns which reference team_id from teams table.
6. The games table should have winner_goals and opponent_goals of type INT.
7. All columns should have NOT NULL constraint.
8. The  two .sh script files should have executeable permissions.
9. When you run your insert_data.sh script, it should add unique to the teams table. There should be 24 rows.
10. When you run insert_data.sh script, it should insert a row for each line in the games.csv file. There should be 32 rows filled with appropiate information.
11. Correctly complete the queries in queries.sh file. The output should match what is in the expected_output.txt file exactly.

<br>
<hr>

## **Project Commentary.**

### **Part 1: Create the Database**

- Logged into postgreSQL:

        ~/project$ psql --username=freecodecamp --dbname=postgres

- Created worldcup database:

        postgres=> CREATE DATABASE worldcup;
        CREATE DATABASE

- Connected to database:

        postgres=> \c worldcup
        You are now connected to database "worldcup" as user "freecodecamp".#

- Created teams table:

        worldcup=> CREATE TABLE teams(team_id SERIAL PRIMARY KEY NOT NULL, name VARCHAR(50) UNIQUE);
        CREATE TABLE

- Created games table:

        worldcup=> CREATE TABLE games(game_id SERIAL PRIMARY KEY NOT NULL, year INT NOT NULL, round VARCHAR NOT NULL);
        CREATE TABLE

- Now the first 4 tests pass:

    ![](/03%20-%20Relational%20Database/07%20-%20Build%20a%20World%20Cup%20Database/screenshots/2022-12-26-10-26-50.png)

- Added foreign key columns to games table:

        worldcup=> ALTER TABLE games ADD COLUMN winner_id INT references teams(team_id);
        ALTER TABLE
        worldcup=> ALTER TABLE games ADD COLUMN opponent_id INT references teams(team_id);
        ALTER TABLE

- Fifth test now passes:

    ![](/03%20-%20Relational%20Database/07%20-%20Build%20a%20World%20Cup%20Database/screenshots/2022-12-26-10-30-11.png)
    
- Added winner_goals and opponent_goals to the games table:

        worldcup=> ALTER TABLE games ADD COLUMN winner_goals INT NOT NULL;
        ALTER TABLE
        worldcup=> ALTER TABLE games ADD COLUMN opponent_goals INT NOT NULL;
        ALTER TABLE

- The 6th test now passes:

    ![](/03%20-%20Relational%20Database/07%20-%20Build%20a%20World%20Cup%20Database/screenshots/2022-12-26-10-33-02.png)

- I forgot the non-null requirement for all columns so altered the games and teams tables:

        worldcup=> ALTER TABLE games ALTER COLUMN winner_id SET NOT NULL;
        ALTER TABLE   
        worldcup=> ALTER TABLE games ALTER COLUMN opponent_id SET NOT NULL;
        ALTER TABLE
        worldcup=> ALTER TABLE teams ALTER COLUMN name SET NOT NULL;
        ALTER TABLE

- The seventh test now passes:

    ![](/03%20-%20Relational%20Database/07%20-%20Build%20a%20World%20Cup%20Database/screenshots/2022-12-26-10-39-04.png)

<br>

### **Part 2: Insert Data**

- I added execution permissions:

        ~/project$ chmod +x insert_data.sh 
        ~/project$ chmod +x queries.sh 

- The insert_data.sh script contains:

    ![](/03%20-%20Relational%20Database/07%20-%20Build%20a%20World%20Cup%20Database/screenshots/2022-12-26-10-53-04.png)

- I add a query to the script to connect to the worldcup database:

        echo $($PSQL "\c worldcup")

- I added a statement to truncate all tables before anything else:

        echo $($PSQL "TRUNCATE games, teams")

- I start my script with a while loop which reads each column of the CSV and ignoring the first line:

        cat games.csv | while IFS="," read -r YEAR ROUND WINNER OPPONENT WINNER_GOALS OPPONENT_GOALS
        do
            if [[ $YEAR != "year" ]]
            then
                echo $YEAR
            fi
        done

- I created a while loop which skipped first line and then had a check for the opponent and winner from each row of whether they were inside the teams table.

- After 1 line was read and teams were added, I inserted a row into games using winner_id and opponent_id from the teams table

<br>

#### **insert_data.sh Script:**

- My script, after completing part 2, looked like:

    ![](/03%20-%20Relational%20Database/07%20-%20Build%20a%20World%20Cup%20Database/screenshots/2022-12-26-11-49-53.png)

<br>
<hr>

### **Part 3: Query the Database**

- The queries.sh script was initialised as:

        #! /bin/bash

        PSQL="psql --username=freecodecamp --dbname=worldcup --no-align --tuples-only -c"

        # Do not change code above this line. Use the PSQL variable above to query your database.

        echo -e "\nTotal number of goals in all games from winning teams:"
        echo "$($PSQL "SELECT SUM(winner_goals) FROM games")"

        echo -e "\nTotal number of goals in all games from both teams combined:"
        echo

        echo -e "\nAverage number of goals in all games from the winning teams:"
        echo

        echo -e "\nAverage number of goals in all games from the winning teams rounded to two decimal places:"
        echo

        echo -e "\nAverage number of goals in all games from both teams:"
        echo

        echo -e "\nMost goals scored in a single game by one team:"
        echo

        echo -e "\nNumber of games where the winning team scored more than two goals:"
        echo

        echo -e "\nWinner of the 2018 tournament team name:"
        echo

        echo -e "\nList of teams who played in the 2014 'Eighth-Final' round:"
        echo

        echo -e "\nList of unique winning team names in the whole data set:"
        echo

        echo -e "\nYear and team name of all the champions:"
        echo

        echo -e "\nList of teams that start with 'Co':"
        echo

#### **Query 1: Total number of goals in all games**

- The expected result is: 

        Total number of goals in all games from both teams combined:
        90

- My answer is:

        SELECT SUM(winner_goals)+SUM(opponent_goals) FROM games;

#### **Query 2: Average number of goals in all games from winning teams**

- The expected result is:

        Average number of goals in all games from the winning teams:
        2.1250000000000000

- My answer is:

        SELECT AVG(winner_goals) FROM games;

#### **Query 3: Average number of goals in all games from winning teams**

- The expected result is:

        Average number of goals in all games from the winning teams rounded to two decimal places:
        2.13

- My answer is:

        SELECT ROUND(AVG(winner_goals),2) FROM games;



#### **Query 4: Average number of goals in all games from both teams**

- The expected result is:

        Average number of goals in all games from both teams:
        2.8125000000000000

- My answer is:

        SELECT ROUND(AVG(winner_goals)+AVG(opponent_goals),16) FROM games;

#### **Query 5: Most goals in a single game**

- The expected result is:

        Most goals scored in a single game by one team:
        7
- My answer is:

        SELECT MAX(winner_goals) FROM games;

<br>

#### **Query 6: Number of games where winning team scored more than 2**

- The expected result is:

        Number of games where the winning team scored more than two goals:
        6

- My answer is:

        SELECT COUNT(*) FROM games WHERE winner_goals>2;

#### **Query 7: Winner of 2018 tournament**

- The expected result is:

        Winner of the 2018 tournament team name:
        France

- My answer is:

        SELECT name FROM games INNER JOIN teams ON games.winner_id=teams.team_id WHERE year=2018 AND round='Final';

#### **Query 8: List of teams in 2014 Eigth Final**

- The expected result is:

        List of teams who played in the 2014 'Eighth-Final' round:
        Algeria
        Argentina
        Belgium
        Brazil
        Chile
        Colombia
        Costa Rica
        France
        Germany
        Greece
        Mexico
        Netherlands
        Nigeria
        Switzerland
        United States
        Uruguay

- My answer is:

        SELECT name FROM games FULL JOIN teams ON games.winner_id=teams.team_id OR games.opponent_id = teams.team_id WHERE year=2014 AND round='Eighth-Final' ORDER BY name;

#### **Query 9: Each Winning Team**

- The expected result is:

        List of unique winning team names in the whole data set:
        Argentina
        Belgium
        Brazil
        Colombia
        Costa Rica
        Croatia
        England
        France
        Germany
        Netherlands
        Russia
        Sweden
        Uruguay

- My answer is:

        SELECT DISTINCT(name) FROM games INNER JOIN teams ON games.winner_id=teams.team_id ORDER BY name;

#### **Query 10: Year and name of champions**

- The expected result is:

        Year and team name of all the champions:
        2014|Germany
        2018|France

- My answer is:

        SELECT year, name FROM games INNER JOIN teams ON games.winner_id=teams.team_id WHERE round='Final' ORDER BY year;

#### **Query 11: Team name beginning with 'Co'**

- The expected result is:

        List of teams that start with 'Co':
        Colombia
        Costa Rica

- My answer is:

        SELECT name FROM teams WHERE name LIKE 'Co%';


#### **queries.sh Script**

- The final script is:

![](/03%20-%20Relational%20Database/07%20-%20Build%20a%20World%20Cup%20Database/screenshots/2022-12-26-13-17-02.png)


- All tests now pass! I execute the following to get a dump of the database:

        ~/project$ pg_dump -cC --inserts -U freecodecamp worldcup > worldcup.sql