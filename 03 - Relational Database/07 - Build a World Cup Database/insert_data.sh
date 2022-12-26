#! /bin/bash

if [[ $1 == "test" ]]
then
  PSQL="psql --username=postgres --dbname=worldcuptest -t --no-align -c"
else
  PSQL="psql --username=freecodecamp --dbname=worldcup -t --no-align -c"
fi

# Do not change code above this line. Use the PSQL variable above to query your database.

echo $($PSQL "\c worldcup")
echo $($PSQL "TRUNCATE games, teams")
cat games.csv | while IFS="," read -r YEAR ROUND WINNER OPPONENT WINNER_GOALS OPPONENT_GOALS
do
  if [[ $YEAR != "year" ]]
  then
    ## populating teams table:
    # checking if winner is in teams
    if [[ -z $($PSQL "SELECT name FROM teams WHERE name='$WINNER'") ]]
    then
      echo $($PSQL "INSERT INTO teams(name) VALUES ('$WINNER')")
    fi

    # checking if opponent is in teams
    if [[ -z $($PSQL "SELECT name FROM teams WHERE name='$OPPONENT'") ]]
    then
      echo $($PSQL "INSERT INTO teams(name) VALUES ('$OPPONENT')")
    fi
    
    # getting winner_id
    WINNER_ID=$($PSQL "SELECT team_id FROM teams WHERE name = '$WINNER'")
    # getting opponent_id
    OPPONENT_ID=$($PSQL "SELECT team_id FROM teams WHERE name='$OPPONENT'")
    echo "winner_id: $WINNER_ID"
    echo "opponent_id: $OPPONENT_ID"
    echo $($PSQL "INSERT INTO games(year, round, winner_id, opponent_id, winner_goals, opponent_goals) VALUES ($YEAR, '$ROUND', $WINNER_ID, $OPPONENT_ID, $WINNER_GOALS, $OPPONENT_GOALS)")
    
  fi
done