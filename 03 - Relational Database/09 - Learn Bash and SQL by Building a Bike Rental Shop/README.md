# Learn Bash and SQL by Building a Bike Rental Shop

## Table of Contents:

[**1 Creating Tables and Populating Data**](#--1-creating-tables-and-populating-data--)
+ [Logging In and Connecting to Database](#--logging-in-and-connecting-to-database--)
+ [Creating Bikes Table](#--creating-bikes-table--)
+ [Creating Customers table](#--creating-customers-table--)
+ [Creating Rentals Table](#--creating-rentals-table--)
+ [Adding bikes to inventory](#--adding-bikes-to-inventory--)

[**2 Creating Bike Shop Script**](#--2-creating-bike-shop-script--)
+ [Script at This Point](#--script-at-this-point--)

[**3 Implementing Rent Menu Function**](#--3-implementing-rent-menu-function--)
+ [Get Available Bikes](#--get-available-bikes--)
+ [If No Bikes are Available](#--if-no-bikes-are-available--)
+ [Script at This Point](#--script-at-this-point---1)
+ [Displaying Available Bikes](#displaying-available-bikes)
+ [Ask Bike to Rent](#--ask-bike-to-rent--)
+ [Get Bike Availability](#--get-bike-availability--)
+ [If Bike is Not Available](#--if-bike-is-not-available--)
+ [Script Up To This Point](#--script-up-to-this-point--)
+ [Bike is Available](#--bike-is-available--)
+ [Get Customer Information](#--get-customer-information--)
+ [If Customer Doesn't Exist](#--if-customer-doesn-t-exist--)
+ [Getting New Customer Name](#--getting-new-customer-name--)
+ [Insert New Customer](#--insert-new-customer--)
+ [Script Up To This Point](#--script-up-to-this-point---1)
+ [Inserting data into rentals table](#--inserting-data-into-rentals-table--)
+ [Getting Customer ID](#--getting-customer-id--)
+ [Insert Bike Rental](#--insert-bike-rental--)
+ [Set Bike Availability to False](#--set-bike-availability-to-false--)
+ [Script up to this point](#--script-up-to-this-point--)
+ [Get Bike Information](#--get-bike-information--)
+ [Script up to this point](#--script-up-to-this-point---1)

[**4 Implementing Return Menu**](#--4-implementing-return-menu--)
+ [Get Customer Information](#--get-customer-information---1)
+ [If Customer is Not Found](#--if-customer-is-not-found--)
+ [Get Customer's Rentals](#--get-customer-s-rentals--)
+ [Return Menu Function At This Point](#--return-menu-function-at-this-point--)
+ [If The Customer Has No Rentals](#--if-the-customer-has-no-rentals--)
+ [If Customer Does Have Rentals](#--if-customer-does-have-rentals--)
+ [Display Rented Bikes](#--display-rented-bikes--)
+ [Ask bike for return](#--ask-bike-for-return--)
+ [If Input is not a Number](#--if-input-is-not-a-number--)
+ [Check If Input ID is Rented](#--check-if-input-id-is-rented--)
+ [If Input ID is not Rented](#--if-input-id-is-not-rented--)
+ [RETURN_MENU At This Point](#--return-menu-at-this-point---)
+ [Update Date Returned Column](#--update-date-returned-column--)
+ [Set Bike Availability to True](#--set-bike-availability-to-true--)
+ [Send to Main Menu](#--send-to-main-menu--)



## **1 Creating Tables and Populating Data**

### **Logging In and Connecting to Database**

- I logged into postgres:

        ~/project$ psql --username=freecodecamp --dbname=postgres

- Created a database:

        postgres=> CREATE DATABASE bikes;
        CREATE DATABASE

- Connected to bikes database:

        postgres=> \c bikes
        You are now connected to database "bikes" as user "freecodecamp".



### **Creating Bikes Table**

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

### **Creating Customers table**

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

### **Creating Rentals Table**

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

### **Adding bikes to inventory**

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

<br>
<hr>

## **2 Creating Bike Shop Script**

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

### **Script at This Point**

- The entire script at this point looks like:

    ![](2022-12-28-12-20-56.png)

<br><hr>

## **3 Implementing Rent Menu Function**

- I delete the placeholder and add the following comments:

    ![](2022-12-28-12-22-35.png)

- I add a postgreSQL command to the top of my script to format the results of queries:

        PSQL="psql -X --username=freecodecamp --dbname=bikes --tuples-only -c"

### **Get Available Bikes**

- Below the get available bikes commend, I initialise the AVAILABLE_BIKES variable with a query. I print it on next line:


    ![](2022-12-28-12-26-32.png)

- I execute the script:

    ![](2022-12-28-12-28-30.png)

- For testing purposes, I set all bikes to unavailable in PSQL prompt:

        bikes=> UPDATE bikes SET available=false;
        UPDATE 9

- Running the script shows no available bikes in the rent menu

### **If No Bikes are Available**

- Below the 'if no bikes available' comment, I add check if the query is empty and call MAIN_MENU function:

    ![](2022-12-28-12-34-01.png)

- I add an else statement, with the following comments:

    ![](2022-12-28-12-37-59.png)

### **Script at This Point**

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

### **Ask Bike to Rent**

- I add the following echo and read statement:

    ![](image.png.png)

- I check if the input is not a number using regex and returns to main menu:

    ![](2022-12-28-13-06-52.png)

- Running the script:

    ![](2022-12-28-13-08-46.png)

- I add an else statement wehich checks if user input is not a number, with the following comments:

    ![](2022-12-28-13-12-04.png)


### **Get Bike Availability**

- I add the following comment below the 'get bike abailabilityu' comment:

    ![](2022-12-28-13-15-39.png)

- Running the script:

![](2022-12-28-13-17-48.png)

### **If Bike is Not Available**

- Below the 'if not available' comment, I check if the query is empty and call the MAIN_MENU function:

    ![](2022-12-28-13-21-51.png)


### **Script Up To This Point**

- The entire script looks like:

    ![](2022-12-28-13-29-51.png)
    ![](2022-12-28-13-30-17.png)

- Executing the script:

    ![](2022-12-28-13-33-31.png)


### **Bike is Available**

- I set all bikes availability to true:

        bikes=> UPDATE bikes SET available=true;
        UPDATE 9

- I add an else statement to the check if the BIKE_AVAILABILITY variable is empty and I added some comments:

    ![](2022-12-28-13-37-51.png)


### **Get Customer Information**

- Below the 'get customer info' comment, I add the following:

    ![](2022-12-28-13-42-58.png)

- Since the phone number is unique, we can use it to see if the customer is already in the database!


### **If Customer Doesn't Exist**

- Below the 'if customer doesn't exist' comment, I check if the CUSTOMER_NAME variable is empty:

![](2022-12-28-13-45-31.png)

### **Getting New Customer Name**

- I get the customer's name:

    ![](2022-12-28-13-47-29.png)

### **Insert New Customer**

- I add the following statement:

    ![](2022-12-28-13-51-40.png)


### **Script Up To This Point**

- The RENT_MENU function at this point is defined as:

    ![](2022-12-28-13-53-53.png)

- Running the script:

    ![](2022-12-28-14-00-47.png)

- Displaying the customers and rentals tables:

    ![](2022-12-28-14-01-49.png) 

- The rentals is still empty!

### **Inserting data into rentals table**

- Below the if statementg for inserting the customer details, I add the following comments:

    ![](2022-12-28-14-06-52.png)


### **Getting Customer ID**

- I get the customer ID usiong the phone number:

    ![](2022-12-28-14-09-25.png)

### **Insert Bike Rental**

- I inserted the customer ID and bike ID into the rentals table:

    ![](2022-12-28-14-13-37.png)

### **Set Bike Availability to False**

- Updated bikes table and set available to false:

    ![](2022-12-28-14-16-54.png)

### **Script up to this point**

- The RENT_MENU() function at this point looks like:

![](2022-12-28-14-23-13.png)
![](2022-12-28-14-23-42.png)

- Running the script:

    ![](2022-12-28-14-24-35.png)

- As we can see, the name of the customer was not asked!

- Displaying the rentals table, shows a row was added:

    ![](2022-12-28-14-25-55.png)

- The bikes table also has the availability to false:

![](2022-12-28-14-27-27.png)

### **Get Bike Information**

- Below the 'get bike info' comment, I create the following variable:

    ![](2022-12-28-14-31-14.png)

- Running the script shows the following:

    ![](2022-12-28-14-31-46.png)

- I will use the sed command so it will print: I have put you down for the 28" Mountain Bike, Me.

- Using sed, I printed "29" Mountain" to the terminal:

    ![](2022-12-28-14-36-59.png)

- I used a sub-shell to place the above in a variable:

    ![](2022-12-28-14-38-43.png)

- I use the above to print a message when returning to main menu:

    ![](2022-12-28-14-41-38.png)


- When executing the script there is an extra space before the name! We can fix this by using regex in a sub shell:

    ![](2022-12-28-14-56-11.png)

### **Script up to this point**

- The RENT_MENU() function up to this point is defined as:

    ![](2022-12-28-15-05-11.png)


## **4 Implementing Return Menu**

- I add the following comments to the Return Menu function

    ![](2022-12-28-15-06-31.png)

### **Get Customer Information**

- Below the 'get customer info' comment, I add the following:

    ![](2022-12-28-15-17-24.png)

### **If Customer is Not Found**

- Below the 'if no found' comment, I wrote:

    ![](2022-12-28-15-20-41.png)

- I add an else statement to the condition which checks if the CUSTOMER_ID variable is empty:

    ![](2022-12-28-15-26-00.png)

### **Get Customer's Rentals**

- I want to find what rentals are booked for a customer using their phone number.

- I use an INNER JOIN on the bikes and rentals table:

    ![](2022-12-28-15-31-24.png)

- I then do another INNER JOIN on the customers table:

    ![](2022-12-28-15-33-13.png)

- I narrow the above results based on phone number and date_returned:

    ![](2022-12-28-15-35-00.png)

- Now I need to display bike information:

    ![](2022-12-28-15-37-48.png)

- I add the following query to my script:

   ![](2022-12-28-15-45-10.png)

### **Return Menu Function At This Point**

- The entire RETURN_MENU function is defined as:

    ![](2022-12-28-15-48-09.png)

- Executing this script:

    ![](2022-12-28-15-49-11.png)

### **If The Customer Has No Rentals**

- Below the 'if no rentals' comment, I add the following check:

    ![](2022-12-28-15-51-51.png)

### **If Customer Does Have Rentals**

- I add an else statement to the check for customer rentals:

    ![](2022-12-28-15-53-40.png)

### **Display Rented Bikes**

- I add the following below the 'display rented bikes' comment:

    ![](2022-12-28-15-58-39.png)

- Executing the script displays:

    ![](2022-12-28-15-59-09.png)


### **Ask bike for return**

- I read the input for the bike to be returned below:

    ![](2022-12-28-16-01-37.png)

### **If Input is not a Number**

- Just like before, I first check if the input is a number:

    ![](2022-12-28-16-03-59.png)

- I create an else statement:

    ![](2022-12-28-16-05-09.png)

### **Check If Input ID is Rented**

- In order to see if the bike is rented, I need to JOIN the rentals and customers table:

    ![](2022-12-28-16-11-37.png)

- We can narrow it to just the rental_id and I add the following to my script:

    ![](2022-12-28-16-17-04.png)

### **If Input ID is not Rented**

- I added the following check to see if the RENTAL_ID is empty and to call the MAIN_MENU function:

    ![](2022-12-28-16-30-49.png)

- I add an else statement:

    ![](2022-12-28-16-32-21.png)

### **RETURN_MENU At This Point:**

- The definition of the RETURN_MENU function entirely is:

    ![](2022-12-28-16-35-26.png)

- Executing the script:

    ![](2022-12-28-16-36-48.png)

- I delete the echo in the else statement and replace them with 3 comments:

    ![](2022-12-28-16-39-01.png)

### **Update Date Returned Column**

- I update the rentals table for the returned bike:

    ![](2022-12-28-16-42-37.png)

### **Set Bike Availability to True**

- I updated the bikes table:

    ![](2022-12-28-16-46-06.png)

### **Send to Main Menu**

- I call the MAIN_MENU function:

    ![](2022-12-28-16-47-13.png)

- The RETURN_MENU function is now finished!

- Executing the script:

    ![](2022-12-28-16-49-23.png)