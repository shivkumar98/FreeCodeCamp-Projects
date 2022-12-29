#! /bin/bash
PSQL="psql -X --username=freecodecamp --dbname=salon --tuples-only -c"

SERVICES_MENU(){
  if [[ $1 ]]
  then
    echo -e "\n$1"
  fi

  # Ask user for service
  echo -e "Please enter the ID of the service you would like:"
  SERVICES=$($PSQL "SELECT * FROM services")
  echo "$SERVICES" | while read SERVICE_ID BAR SERVICE
  do
    echo "$SERVICE_ID) $SERVICE"
  done

  read SERVICE_ID_SELECTED
  # if service id to book is not a numbe
  if [[ ! $SERVICE_ID_SELECTED =~ ^[0-9]+$ ]]
  then
    # send to services menu
    SERVICES_MENU "Please enter only a number"
  else # Input IS a number
    SERVICE_RESULT=$($PSQL "SELECT name FROM services
                      WHERE service_id=$SERVICE_ID_SELECTED")
    # Checking if service isn't in database
    if [[ -z $SERVICE_RESULT ]]
    then
      # Display services again
      SERVICES_MENU "Please enter the ID of a service which exists"
    else # user has selected correct service
      echo "Please enter your phone number"
      read CUSTOMER_PHONE
      # check if phone number is in customers table
      CUSTOMER_NAME=$($PSQL "SELECT name FROM customers
                            WHERE phone='$CUSTOMER_PHONE'") 
      # if customer doesn't exist:
      if [[ -z $CUSTOMER_NAME ]]
      then
        echo "Please enter your name:"
        read CUSTOMER_NAME
        # adding customer to database
        INSERT_CUSTOMER_RESULT=$($PSQL "INSERT INTO customers(phone, name)
                      VALUES ('$CUSTOMER_PHONE', '$CUSTOMER_NAME')")
      fi
      echo "Please enter a time for your appointment"
      read SERVICE_TIME;

      # Inserting appointment
      ## Getting customer_id:
      CUSTOMER_ID=$($PSQL "SELECT customer_id FROM customers
                            WHERE phone='$CUSTOMER_PHONE'")
      ## inserting row into appointments table
      INSERT_APPOINTMENT_RESULT=$($PSQL "INSERT INTO
                    appointments(customer_id, service_id, time)
                    VALUES
                    ($CUSTOMER_ID, $SERVICE_ID_SELECTED, '$SERVICE_TIME');")
      SERVICE_NAME=$($PSQL "SELECT name FROM services
                            WHERE service_id=$SERVICE_ID_SELECTED")
      echo "I have put you down for a $SERVICE_NAME at $SERVICE_TIME, $CUSTOMER_NAME."
    fi
  fi    
}

SERVICES_MENU