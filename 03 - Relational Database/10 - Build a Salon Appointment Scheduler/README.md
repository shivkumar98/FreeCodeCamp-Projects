# 10 - Build a Salon Appointment Scheduler
    
## Introduction

In this project I will create an interactive Bash program that uses PostgreSQL to track the customers and appointments for your salon.

## Instructions

- I will create a salon.sh file which will comply to the below user stories.

### User Stories:

1) Create a database named salon
2) Connect to salon database, create tables name customers, appointments and services.
3) Each table should have a primary key column that automatically increments.
4) Each primary key column should be named table_name_id. E.g. customers should have a primary key of customer_id
5) Your appointments table should have a customer_id foreign key which references customer_id in customers.
6) Your appointments table should have a service_id foreign key which references service_id from services table.
7) Your customers table should have a phone column of type VARCHAR and not null.
8) Your customers and services tables should have a name column
9) Your appointment table should have a time column that is a VARCHAR.
10) You should have atleast 3 rows in your servies table, where one where service_id is 1.
11) You should create a salon.sh script in project folder
12) Your script should have a shebang of #! /bin/bash
13) Your script should have executeable permissions.
14) You should not use clear command in the script.
15) You should display a numbered list of services you provide, with a formatr of #) &lt;service&gt;
16) If you pick a service that doesn't exist, you should be shown the same list of services again.
17) Your script should prompt users to enter a service_id, phone number, a name if they are not already a customer, and a time. These variables should be read into variables labelled: SERVICE_ID_SELECTED, CUSTOMER_PHONE, CUSTOMER_NAME, SERVICE_TIME.
18) If a phone number doesn't exist, you should get the customers name and phone number into the customers table.
19) You can insert a row into appointments table by running script and entering 1, 555-555-5555, Fabio, 10:30 if the phone number isn't in the customers table. The row should hae a customer_id and service_id which was selected.
20) You can insert another row into appointments table by entering 2, 555-555-5555, 11am if the number is already in the table
21) After an appointment is successfully added, you should output the message:
"I have put you doen for a &lt;service&gt; at  &lt;time&gt;, &lt;name&gt;.


## Creating Database:

- I logged into postgres in the terminal:

    ~/project$ psql --username=freecodecamp --dbname=postgres

- Connected to database:

postgres=> \c salon 
You are now connected to database "salon" as user "freecodecamp".

- Created 3 tables:

salon=> CREATE TABLE customers();
CREATE TABLE
salon=> CREATE TABLE appointments();
CREATE TABLE
salon=> CREATE TABLE services();
CREATE TABLE

- Added primary key for each table:

salon=> ALTER TABLE customers ADD COLUMN customer_id SERIAL PRIMARY KEY;
ALTER TABLE
salon=> ALTER TABLE appointments ADD COLUMN appointment_id SERIAL PRIMARY KEY;
ALTER TABLE
salon=> ALTER TABLE services ADD COLUMN service_id SERIAL PRIMARY KEY;
ALTER TABLE

- The first 4 tests now pass:

![](/03%20-%20Relational%20Database/09%20-%20Learn%20Bash%20and%20SQL%20by%20Building%20a%20Bike%20Rental%20Shop/screenshots/2022-12-29-10-05-56.png)

- Adding customer_id foreign key to appointments table:

salon=> ALTER TABLE appointments ADD COLUMN customer_id INT NOT NULL;ALTER TABLE
salon=> ALTER TABLE appointments ADD FOREIGN KEY(customer_id) REFERENCES customers(customer_id);
ALTER TABLE

- Fifth test now passes:

![](/03%20-%20Relational%20Database/09%20-%20Learn%20Bash%20and%20SQL%20by%20Building%20a%20Bike%20Rental%20Shop/screenshots/2022-12-29-10-11-14.png)

- Adding service_id foreign key to appointments table:

salon=> ALTER TABLE appointments ADD COLUMN service_id INT NOT NULL;ALTER TABLE
salon=> ALTER TABLE appointments ADD FOREIGN KEY(service_id) REFERENCES services(service_id);
ALTER TABLE

- Sixth test now passes:

    ![](/03%20-%20Relational%20Database/09%20-%20Learn%20Bash%20and%20SQL%20by%20Building%20a%20Bike%20Rental%20Shop/screenshots/2022-12-29-10-13-32.png)

- Added phone column to customers table:

salon=> ALTER TABLE customers ADD COLUMN phone VARCHAR(20) UNIQUE;
ALTER TABLE

- Seventh test now passes:

![](/03%20-%20Relational%20Database/09%20-%20Learn%20Bash%20and%20SQL%20by%20Building%20a%20Bike%20Rental%20Shop/screenshots/2022-12-29-10-18-25.png)

- Added name columns to customers and services table:

salon=> ALTER TABLE customers ADD COLUMN name VARCHAR(30);
ALTER TABLE
salon=> ALTER TABLE services ADD COLUMN name VARCHAR(30);
ALTER TABLE

- Adding time column to appointments:

salon=> ALTER TABLE appointments ADD COLUMN time VARCHAR(10);
ALTER TABLE

- Eighth test now passes:

![](/03%20-%20Relational%20Database/09%20-%20Learn%20Bash%20and%20SQL%20by%20Building%20a%20Bike%20Rental%20Shop/screenshots/2022-12-29-10-23-42.png)

- Adding rows to the services table:

salon=> INSERT INTO services(name) VALUES ('Haircut'),('Hair wash and style'),('Nails'),('Pedicure'),('All services');
INSERT 0 5

- Ninth test now passes:

    ![](/03%20-%20Relational%20Database/09%20-%20Learn%20Bash%20and%20SQL%20by%20Building%20a%20Bike%20Rental%20Shop/screenshots/2022-12-29-10-27-30.png)

## Creating Salon Script

- I create a salon.sh script in the project folder:

codeally@97e30f6002bb:~/project$ touch salon.sh
codeally@97e30f6002bb:~/project$ echo "#! /bin/bash" >> salon.sh
codeally@97e30f6002bb:~/project$ chmod +x salon.sh

- Tests 10-12 now pass:

![](/03%20-%20Relational%20Database/09%20-%20Learn%20Bash%20and%20SQL%20by%20Building%20a%20Bike%20Rental%20Shop/screenshots/2022-12-29-10-31-46.png)


### Services Menu

- I initialise the script by formatting SQL queries and defining a SERVICES_MENU which prints available services from the database:

    ![](/03%20-%20Relational%20Database/09%20-%20Learn%20Bash%20and%20SQL%20by%20Building%20a%20Bike%20Rental%20Shop/screenshots/2022-12-29-10-44-42.png)

- The fifteenth test now passes:

    ![](/03%20-%20Relational%20Database/09%20-%20Learn%20Bash%20and%20SQL%20by%20Building%20a%20Bike%20Rental%20Shop/screenshots/2022-12-29-10-45-37.png)


- If a selected service does not exist then the menu should be displayed again. I update the services menu to display any arguments passed into it. I first check if the users input is a number and then query the database to see if a services exists for the give ID:

    ![](/03%20-%20Relational%20Database/09%20-%20Learn%20Bash%20and%20SQL%20by%20Building%20a%20Bike%20Rental%20Shop/screenshots/2022-12-29-11-06-54.png)

### Script at this point

- The entire script looks like:

    ![](/03%20-%20Relational%20Database/09%20-%20Learn%20Bash%20and%20SQL%20by%20Building%20a%20Bike%20Rental%20Shop/screenshots/2022-12-29-11-08-08.png)

- Executing the script:

    ![](/03%20-%20Relational%20Database/09%20-%20Learn%20Bash%20and%20SQL%20by%20Building%20a%20Bike%20Rental%20Shop/screenshots/2022-12-29-11-12-09.png)

- The first 15 tests now pass! The fifteenth test being:

    ![](/03%20-%20Relational%20Database/09%20-%20Learn%20Bash%20and%20SQL%20by%20Building%20a%20Bike%20Rental%20Shop/2022-12-29-11-14-09.png)