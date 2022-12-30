#!/bin/bash



PSQL="psql --username=freecodecamp --dbname=number_guess -t --no-align -c"


echo "Enter your username:"
read USERNAME

USERNAME_RESULT=$($PSQL "SELECT user_id FROM users WHERE username='$USERNAME'")
echo "result: $($PSQL "SELECT user_id FROM users WHERE username='$USERNAME'")"
# if user does not exist
if [[ -z $USERNAME_RESULT ]]
then
  INSERT_RESULT=$($PSQL "INSERT INTO users(username, games_played, best_game)
   VALUES ('$USERNAME', 0, 0)")
  echo "Welcome, $USERNAME! It looks like this is your first time here."
  GAMES_PLAYED=0
  BEST_GAME=-1
else # user exists in database
  GAMES_PLAYED=$($PSQL "SELECT games_played FROM users WHERE username='$USERNAME'")
  BEST_GAME=$($PSQL "SELECT best_game FROM users WHERE username='$USERNAME'")
  echo "Welcome back, $USERNAME! You have played $GAMES_PLAYED games, and your best game took $BEST_GAME guesses."
fi

RANDOM_NUMBER=$(( RANDOM%999 + 1 ))
# echo "Random number: $RANDOM_NUMBER" 
number_of_guess=0

echo "Guess the secret number between 1 and 1000:"
read GUESS
while [[ ! $GUESS =~ ^[0-9]+$ ]]
do
  echo "That is not an integer, guess again:"
  read GUESS
done

while [[ $GUESS != $RANDOM_NUMBER ]]
do
  if [[ $GUESS > $RANDOM_NUMBER ]]
  then
    echo "It's lower than that, guess again:"
    let "number_of_guess=number_of_guess+1"
    read GUESS
    while [[ ! $GUESS =~ ^[0-9]+$ ]]
    do
      echo "That is not an integer, guess again:"
      read GUESS
    done
  elif [[ $GUESS < $RANDOM_NUMBER ]]
  then
    echo "It's higher than that, guess again:"
    let "number_of_guess=number_of_guess+1"
    read GUESS
    while [[ ! $GUESS =~ ^[0-9]+$ ]]
    do
      echo "That is not an integer, guess again:"
      read GUESS
    done
  fi
done

let "number_of_guess=number_of_guess+1"



echo "You guessed it in $number_of_guess tries. The secret number was $RANDOM_NUMBER. Nice job!"

if [[ $GAMES_PLAYED == 0 ]]
then  
  UPDATE_RESULT=$($PSQL "UPDATE users SET games_played=1, best_game=$number_of_guess WHERE username='$USERNAME'")
else
  if [[ $number_of_guess < $BEST_GAME ]]
  then
    UPDATE_RESULT=$($PSQL "UPDATE users SET games_played=$(($GAMES_PLAYED+1)), best_game=$number_of_guess WHERE username='$USERNAME'")
  else
    UPDATE_RESULT=$($PSQL "UPDATE users SET games_played=$(($GAMES_PLAYED+1))")
  fi
fi