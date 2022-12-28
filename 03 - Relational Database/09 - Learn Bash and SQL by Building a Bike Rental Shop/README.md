# Learn Bash and SQL by Building a Bike Rental Shop

## 1 Creating Tables and Populating Data:

- I logged into postgres:

        ~/project$ psql --username=freecodecamp --dbname=postgres

- Created a database:

        postgres=> CREATE DATABASE bikes;
        CREATE DATABASE

- Connected to bikes database:

        postgres=> \c bikes
        You are now connected to database "bikes" as user "freecodecamp".

### Creating Bikes Table:

- Created bikes table:

        bikes=> CREATE TABLE bikes();
        CREATE TABLE

- Added biuke_id column

        bikes=> ALTER TABLE bikes ADD COLUMN bike_id SERIAL PRIMARY KEY;
        ALTER TABLE

- Added type column:

        bikes=> ALTER TABLE bikes ADD COLUMN type VARCHAR(50) NOT NULL;
        ALTER TABLE

- Added size column:

        bikes=> ALTER TABLE bikes ADD COLUMN size INT NOT NULL;
        ALTER TABLE

- Added available column with a default value of TRUE:

        bikes=> ALTER TABLE bikes ADD COLUMN available boolean NOT NULL DEFAULT TRUE;
        bikes=> ALTER TABLE

- The bikes table information:

    ![](2022-12-28-11-26-49.png)

### Creating Customers table

- Created customers table:

        bikes=> CREATE TABLE customers();
        CREATE TABLE

- Added customer_id column:

        bikes=> ALTER TABLE customers ADD COLUMN customer_id SERIAL PRIMARY KEY;
        bikes=> ALTER TABLE

- Added phone column:

        bikes=> ALTER TABLE customers ADD COLUMN phone VARCHAR(15) NOT NULL UNIQUE;
        bikes=> ALTER TABLE

- Added name column:

        bikes=> ALTER TABLE customers ADD COLUMN name VARCHAR(40) NOT NULL;
        ALTER TABLE

- The customers table information:

    ![](2022-12-28-11-31-32.png)

### Creating Rentals Table:

- I created a rentals table:

        bikes=> CREATE TABLE rentals();
        CREATE TABLE

- Added rental_id column:

        bikes=> ALTER TABLE rentals ADD COLUMN rental_id SERIAL PRIMARY KEY;
        ALTER TABLE

- Added customer_id column which will reference customers table:

        bikes=> ALTER TABLE rentals ADD COLUMN customer_id INT NOT NULL;
        bikes=> ALTER TABLE

- Adding foreign key constraint:

        bikes=> ALTER TABLE rentals ADD FOREIGN KEY(customer_id) REFERENCES customers(customer_id);
        ALTER TABLE

- Added bike_id column which will reference bikes table:

        bikes=> ALTER TABLE rentals ADD COLUMN bike_id INT NOT NULL;
        bikes=> ALTER TABLE

- Adding foreign key constraint:

        bikes=> ALTER TABLE rentals ADD FOREIGN KEY(bike_id) REFERENCES bikes(bike_id);
        bikes=> ALTER TABLE

- Adding date_rented column which has a default value of NOW():


        bikes=> ALTER TABLE rentals ADD COLUMN date_rented DATE NOT NULL DEFAULT NOW();
        ALTER TABLE


- Adding date_returned column:

        bikes=> ALTER TABLE rentals ADD COLUMN date_returned DATE;
        ALTER TABLE

- Information about rentals table:

    ![](2022-12-28-11-42-37.png)

### Adding bikes to inventory

- There are 9 bikes in inventory. I add the first one to the bikes table with type of Mountain and size of 27:

        bikes=> INSERT INTO bikes(type, size) VALUES ('Mountain', 27);
        INSERT 0 1

- This adds the following row in the table:

    ![](2022-12-28-11-45-04.png)

- Adding another Mountain bike with size of 28:

        bikes=> INSERT INTO bikes(type, size) VALUES ('Mountain', 28);
        INSERT 0 1

- Adding another Mountain bike of size 29:

        bikes=> INSERT INTO bikes(type, size) VALUES ('Mountain', 29);
        bikes=> INSERT 0 1

- Adding 27 inch Road bike:

        bikes=> INSERT INTO bikes(type, size) VALUES ('Road', 27);
        bikes=> INSERT 0 1

- All rows in bikes table:

    ![](2022-12-28-11-48-01.png)

- Adding 2 Road bikes with size 28 and 29:

        bikes=> INSERT INTO bikes(type, size) VALUES ('Road', 28), ('Road', 29);
        bikes=> INSERT 0 2

- Adding 3 BMX bikes of sizes 19, 20 and 21:

        bikes=> INSERT INTO bikes(type, size) VALUES ('BMX', 19), ('BMX', 20), ('BMX', 21);
        INSERT 0 3

- Viewing all bikes in table:

    ![](2022-12-28-11-50-36.png)

## 2 Creating Bike Shop Script:

- I create a bash script in project folder:

        ~/project$ touch bike-shop.sh
        ~/project$ chmod +x bike-shop.sh

- I add a title to print in terminal in bike-shop.sh.

- I add a MAIN_MENU function which asks the user a question, I call the method at the bottom of the script:

    ![](2022-12-28-11-57-54.png)

- Executing the script:

    ![](2022-12-28-11-58-23.png)

- I add a read command to the bottom of the MAIN_MENU function:

    ![](2022-12-28-12-02-02.png)

- I then defined RENT_MENU, RETURN_MENU, EXIT functions with placeholder text:

    ![](2022-12-28-12-07-06.png)

- I update the MAIN_MENU() function:

    ![](2022-12-28-12-12-50.png)

- The case statement was updates so that an argument is passed into the MAIN_MENU function:

    ![](2022-12-28-12-14-54.png)

- I updated the MAIN_MENU fuinction which check if an argumenmt is passed, if it is the argument is printed:

    ![](2022-12-28-12-17-49.png)

- Testing the script:

    ![](2022-12-28-12-18-29.png)

### Script at This Point:

    ![](2022-12-28-12-20-56.png)

### Updating RENT_MENU Function

- I delete the placeholder and add the following comments:

    ![](2022-12-28-12-22-35.png)

- I add a postgreSQL command to the top of my script to format the results of queries:

        PSQL="psql -X --username=freecodecamp --dbname=bikes --tuples-only -c"

### Get Available Bikes

- Below the get available bikes commend, I initialise the AVAILABLE_BIKES variable with a query. I print it on next line:


    ![](2022-12-28-12-26-32.png)

- I execute the script:

    ![](2022-12-28-12-28-30.png)

- For testing purposes, I set all bikes to unavailable in PSQL prompt:

        bikes=> UPDATE bikes SET available=false;
        UPDATE 9

- Running the script shows no available bikes in the rent menu

### If No Bikes are Available

- Below the 'if no bikes available' comment, I add check if the query is empty and call MAIN_MENU function:

    ![](2022-12-28-12-34-01.png)

- I add an else statement, with the following comments:

    ![](2022-12-28-12-37-59.png)

### Script at This Point:

- The entire script at this point looks like:

    ![](2022-12-28-12-42-14.png)

### Displaying Available Bikes

- I add the following statements to print to terminal:

    ![](2022-12-28-12-44-22.png)

- I update all bikes to available except the BMX bikes in the PSQL prompt:

        bikes=> UPDATE bikes SET available=true WHERE type!='BMX';
        UPDATE 6

- Running the script:

    ![](2022-12-28-12-50-12.png)

- I add a while loop to read the results and echo:

    ![](2022-12-28-12-55-51.png)

- Running the script:

    ![](2022-12-28-12-57-01.png)

### Ask Bike to Rent

- I add the following echo and read statement:

    ![](image.png.png)

- I check if the input is not a number using regex and returns to main menu:

    ![](2022-12-28-13-06-52.png)

- Running the script:

    ![](2022-12-28-13-08-46.png)

- I add an else statement wehich checks if user input is not a number, with the following comments:

    ![](2022-12-28-13-12-04.png)


### Get Bike Availability

- I add the following comment below the 'get bike abailabilityu' comment:

    ![](2022-12-28-13-15-39.png)

- Running the script:

![](2022-12-28-13-17-48.png)

### If Bike is Not Available

- Below the 'if not available' comment, I check if the query is empty and call the MAIN_MENU function:

    ![](2022-12-28-13-21-51.png)