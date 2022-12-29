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