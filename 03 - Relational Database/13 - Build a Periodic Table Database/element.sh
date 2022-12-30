#!/bin/bash
PSQL="psql -X --username=freecodecamp --dbname=periodic_table --tuples-only -c"
# if no argument provided
if [[ ! $1 ]]
then
  echo "Please provide an element as an argument."
else
  # if argument is a number
  if [[ $1 =~ ^[0-9]+$ ]]
  then
    # if there is an element with the number
    if [[ $($PSQL "SELECT atomic_number FROM elements WHERE atomic_number=$1") ]]
    then
      ATOMIC_NUMBER=$($PSQL "SELECT atomic_number FROM elements WHERE atomic_number=$1")
    fi
  elif [[ $1 =~ ^[A-Z][a-z]$ || $1 =~ ^[A-Z]$ ]] #  If Argument is a symbol
  then
    if [[ $($PSQL "SELECT atomic_number FROM elements WHERE symbol='$1'") ]]
    then
      ATOMIC_NUMBER=$($PSQL "SELECT atomic_number FROM elements WHERE symbol='$1'")
    fi
  elif [[ $($PSQL "SELECT atomic_number FROM elements WHERE name='$1'") ]] # if argument is a full name
  then
    ATOMIC_NUMBER=$($PSQL "SELECT atomic_number FROM elements WHERE name='$1'")
  fi
  
    if [[ $ATOMIC_NUMBER ]]
    then
      ATOMIC_NUMBER=$(echo $ATOMIC_NUMBER | sed 's/ |/"/')
      SYMBOL=$($PSQL "SELECT symbol FROM elements
                  WHERE atomic_number=$ATOMIC_NUMBER")
      SYMBOL=$(echo $SYMBOL | sed 's/ //g')
      NAME=$($PSQL "SELECT name FROM elements
                     WHERE atomic_number=$ATOMIC_NUMBER")
      NAME=$(echo $NAME | sed 's/ //g')
      ATOMIC_MASS=$($PSQL "SELECT atomic_mass FROM properties
                          WHERE atomic_number=$ATOMIC_NUMBER")
      ATOMIC_MASS=$(echo $ATOMIC_MASS | sed 's/ //g')
      MELTING_POINT=$($PSQL "SELECT melting_point_celsius FROM properties
                            WHERE atomic_number=$ATOMIC_NUMBER")
      MELTING_POINT=$(echo $MELTING_POINT | sed 's/ //g')
      BOILING_POINT=$($PSQL "SELECT boiling_point_celsius FROM properties
                      WHERE atomic_number=$ATOMIC_NUMBER")
      BOILING_POINT=$(echo $BOILING_POINT | sed 's/ //g')
      TYPE=$($PSQL "SELECT type FROM TYPES
                     WHERE type_id =(SELECT type_id FROM properties
                                     WHERE atomic_number=$ATOMIC_NUMBER)")
      TYPE=$(echo $TYPE | sed 's/ //g')
      echo "The element with atomic number $ATOMIC_NUMBER is $NAME ($SYMBOL). It's a $TYPE, with a mass of $ATOMIC_MASS amu. $NAME has a melting point of $MELTING_POINT celsius and a boiling point of $BOILING_POINT celsius."
    else 
      echo "I could not find that element in the database."
    fi
    
fi
