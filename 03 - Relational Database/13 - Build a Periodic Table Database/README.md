# 13 Build a Periodic Table Database

# Introduction

This is a certification project in which I will create a Bash script to get information about chemical elements from a periodic table database.

# Instructions

- I will connect to a pre-existing database called periodic_table.

- This project is only completed once the below user story tests all pass!

- This project Consists of 3 parts:

- **Part 1 - Fix the datbase:**

- There are mistakes in the database which must be fixed

- **Part 2 - Create a git repository:**

- I will be making a bash program which is version controlled by git

- **Part 3 - Create a Script**

- I will create a script which accepts an argument in the form of atomic number, symbol, or name of an element and outputs some information about the given element.

## User Stories

### Part 1 - Fix the datbase


1) You should rename the weight column to atomic_mass

2) You should rename the melting_point column to melting_point_celsius and the boiling_point column to boiling_point_celsius

3)Your melting_point_celsius and boiling_point_celsius columns should not accept null values

4) You should add the UNIQUE constraint to the symbol and name columns from the elements table

5) Your symbol and name columns should have the NOT NULL constraint

6) You should set the atomic_number column from the properties table as a foreign key that references the column of the same name in the elements table

7) You should create a types table that will store the three types of elements

8) Your types table should have a type_id column that is an integer and the primary key

9) Your types table should have a type column that's a VARCHAR and cannot be null. It will store the different types from the type column in the properties table

10) You should add three rows to your types table whose values are the three different types from the properties table

11) Your properties table should have a type_id foreign key column that references the type_id column from the types table. It should be an INT with the NOT NULL constraint

12) Each row in your properties table should have a type_id value that links to the correct type from the types table

13) You should capitalize the first letter of all the symbol values in the elements table. Be careful to only capitalize the letter and not change any others

14) You should remove all the trailing zeros after the decimals from each row of the atomic_mass column. You may need to adjust a data type to DECIMAL for this. The final values they should be are in the atomic_mass.txt file

15) You should add the element with atomic number 9 to your database. Its name is Fluorine, symbol is F, mass is 18.998, melting point is -220, boiling point is -188.1, and it's a nonmetal

16) You should add the element with atomic number 10 to your database. Its name is Neon, symbol is Ne, mass is 20.18, melting point is -248.6, boiling point is -246.1, and it's a nonmetal

17) You should delete the non existent element, whose atomic_number is 1000, from the two tables

18) Your properties table should not have a type column

### Part 2 - Create a git repository

1) You should create a periodic_table folder in the project folder and turn it into a git repository with git init

2) Your repository should have a main branch with all your commits

3) Your periodic_table repo should have at least five commits

4) The message for the first commit in your repo should be Initial commit

5) The rest of the commit messages should start with fix:, feat:, refactor:, chore:, or test:

6) You should finish your project while on the main branch. Your working tree should be clean and you should not have any uncommitted changes

### Part 3 - Create a Script

1) 
You should create an element.sh file in your repo folder for the program I want you to make

2) 
Your script (.sh) file should have executable permissions

3) If you run ./element.sh, it should output only Please provide an element as an argument. and finish running.

4) If you run ./element.sh 1, ./element.sh H, or ./element.sh Hydrogen, it should output only The element with atomic number 1 is Hydrogen (H). It's a nonmetal, with a mass of 1.008 amu. Hydrogen has a melting point of -259.1 celsius and a boiling point of -252.9 celsius.

5) If you run ./element.sh script with another element as input, you should get the same output but with information associated with the given element.

6) If the argument input to your element.sh script doesn't exist as an atomic_number, symbol, or name in the database, the only output should be I could not find that element in the database.

# Project Commentary:

## Part 1 - Fixing the Database:

### Logging in and Connecting to Database

- I log into PSQL in terminal:

        ~/project$ psql --username=freecodecamp --dbname=periodic_table

- I display all tables using:

        periodic_table=> \d

- This dislays two tables:

    ![](2022-12-30-14-53-25.png)

- Displaying properties of elements table:

    ![](2022-12-30-14-54-22.png)

- Displaying properties of properties:

    ![](2022-12-30-14-54-55.png)

- I start renaming columns:

        periodic_table=> ALTER TABLE properties RENAME COLUMN weight TO atomic_mass;
        ALTER TABLE
        periodic_table=> ALTER TABLE properties RENAME COLUMN melting_point TO melting_point_celsius;
        ALTER TABLE
        periodic_table=> ALTER TABLE properties RENAME COLUMN boiling_point TO boiling_point_celsius;
        ALTER TABLE

- The first two tests now pass:

    ![](2022-12-30-14-58-30.png)

- I add the NOT NULL constraint to the boiling and melting point columns:

        periodic_table=> ALTER TABLE properties ALTER COLUMN melting_point_celsius SET NOT NULL;
        ALTER TABLE
        periodic_table=> ALTER TABLE properties ALTER COLUMN boiling_point_celsius SET NOT NULL;
        ALTER TABLE

- The 3rd test passes:

    ![](2022-12-30-15-00-56.png)

- Adding UNIQUE constrain to cymbol and name columns in elements table:

        periodic_table=> ALTER TABLE elements ADD UNIQUE(symbol);
        ALTER TABLE
        periodic_table=> ALTER TABLE elements ADD UNIQUE(name);
        ALTER TABLE

- The 4th test now passes:

    ![](2022-12-30-15-03-15.png)

- Adding NOT NULL constraint to symbol and name columns:

        periodic_table=> ALTER TABLE elements ALTER COLUMN symbol SET NOT NULL;
        ALTER TABLE
        periodic_table=> ALTER TABLE elements ALTER COLUMN name SET NOT NULL;
        ALTER TABLE

- The 5th test now passes:

    ![](2022-12-30-15-05-00.png)

- Adding foreign key column (atomic_number) from properties table to reference column from elements table:

periodic_table=> ALTER TABLE properties ADD FOREIGN KEY(atomic_number) REFERENCES elements(atomic_number);
ALTER TABLE

- The 6th test now passes:

    ![](2022-12-30-15-36-16.png)

- Creating types table with type_id column as primary key:

        periodic_table=> CREATE TABLE types(type_id SERIAL PRIMARY KEY);
        CREATE TABLE

- The 7th and 8th tests now pass:

    ![](2022-12-30-15-38-44.png)

- Adding type column:

        periodic_table=> ALTER TABLE types ADD COLUMN type VARCHAR NOT NULL;
        ALTER TABLE

- The 9th test now passes:

    ![](2022-12-30-15-40-08.png)

- Adding 3 types to the types table:

        periodic_table=> INSERT INTO types(type) VALUES ('nonmetal'),('metal'),('metalloid');
        INSERT 0 3

- The 10th test now passes:
    
    ![](2022-12-30-15-42-43.png)

- Adding type_id foreign key column to properties table:

    periodic_table=> ALTER TABLE properties ADD COLUMN type_id INT;
    ALTER TABLE

- Displaying the types from types table:

    ![](2022-12-30-15-46-13.png)

- Updating the type_id in properties table:

        periodic_table=> UPDATE properties SET type_id=1 WHERE type='nonmetal';
        UPDATE 5
        periodic_table=> UPDATE properties SET type_id=2 WHERE type='metal';
        UPDATE 2
        periodic_table=> UPDATE properties SET type_id=3 WHERE type='metalloid';
        UPDATE 2

- Adding NOT NULL constraint to type_id on properties table:

        periodic_table=> ALTER TABLE properties ALTER COLUMN type_id SET NOT NULL;
        ALTER TABLE

- Adding foreign key constraint:

        periodic_table=> ALTER TABLE properties ADD CONSTRAINT fk_properties_types FOREIGN KEY(type_id) REFERENCES types(type_id);
        ALTER TABLE

- The 11th and 12th tests now pass:

![](2022-12-30-15-55-34.png)

- For the 13th test I need to ensure the captilization of the elements table is correct

- Looking at the elements table:

    ![](2022-12-30-15-58-50.png)

- I update the symbols:

        periodic_table=> UPDATE elements SET symbol='Mt' WHERE atomic_number=1000;
        UPDATE 1
        periodic_table=> UPDATE elements SET symbol='Li' WHERE atomic_number=3;UPDATE 1
        periodic_table=> UPDATE elements SET symbol='He' WHERE atomic_number=2;UPDATE 1

- The 14th test now passes:

    ![](2022-12-30-16-02-10.png)

- I need to update the properties table for the 15th test.

- Displaying all rows of properties:

    ![](2022-12-30-16-03-30.png)

- I change the type of the atomic_mass column:

        periodic_table=> ALTER TABLE properties 
        periodic_table-> ALTER COLUMN atomic_mass TYPE decimal(4,0);
        ALTER TABLE

- The 15th test now passes:

