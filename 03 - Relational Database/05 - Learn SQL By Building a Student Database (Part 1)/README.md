# Learn SQL by Building a Student Database: Part 1

In this tutorial, I defined an SQL database to store information about students, their courses and majors. I created a Bash Script (insert_data.sh) which looped through all rows of the students.csv and courses.csv files and populated the database tables. My script would check if the course/major already existed before inserting a row. Additionally, a junction table (majors_courses) would be populated after a course and major was inserted. 

## Table of Contents:

[1 Logging In and Creating database](#1-logging-in-and-creating-database)

[2 Setting Up Tables](#2-setting-up-tables)
+ [2.1 Creating tables](#21-creating-tables)
+ [2.2 Adding columns to students table](#22-adding-columns-to-students-table)
+ [2.3 Adding columns to majors table](#22-adding-columns-to-majors-table-)
+ [2.4 Adding foreign key for students table for major_id](#23-adding-columns-to-majors-table)
+ [2.5 Adding columns to courses table](#24-adding-foreign-key-for-students-table-for-major_id)
+ [2.6 Adding columns to majors_courses](#26-adding-columns-to-majors_courses)
+ [2.7 Displaying all tables](#27-displaying-all-tables)

[3 Adding Data to Tables](#3-adding-data-to-tables)
+ [3.1 Adding data to tables:](#31-adding-data-to-tables-)

[4 Creating Script](#4-creating-script)
+ [4.1 Creating file](#41-creating-file)
+ [4.2 Printing from a file](#42-printing-from-a-file)
+ [4.3 Pipe command](#43-pipe-command)

[5 Inserting Data For Majors Table](#5-inserting-data-for-majors-table-)
+ [5.1 connecting to database](#51-connecting-to-database-)
+ [5.2 Populating courses Table](#52-populating-courses-table-)
+ [5.3 Inserting row into majors table if not already present](#53-inserting-row-into-majors-table-if-not-already-present-)
+ [5.4 Deleting Table Data](#54-deleting-table-data-)
+ [5.5 Ignoring first line from CSV](#55-ignoring-first-line-from-csv-)
+ [5.6 Getting major_id](#56-getting-major_id)
+ [5.7 Populating courses Table](#57-populating-courses-table)
+ [5.8 Deleting Table Data From Script](#58-deleting-table-data-from-script-)
+ [5.9 Updating majors_courses table after majors and courses are updated](#59-updating-majors_courses-table-after-majors-and-courses-are-updated)
+ [5.10 Data in DB after executing script](#510-data-in-db-after-executing-script)

[6 Inserting Data for Students Table](#6-inserting-data-for-students-table)
+ [6.1 Making test data](#61-making-test-data-)
+ [6.2 Dealing with Students with no Major or Course](#62-dealing-with-students-with-no-major-or-course-)
+ [6.3 Using original data files](#63-using-original-data-files-)

[7 Displaying Rows From All Tables](#7-displaying-rows-from-all-tables)

[8 Dumping SQL database](#8-dumping-sql-database)



<hr>

## **1 Logging In and Creating database**

- Logged into psql interactive terminal:

        ~/project$ psql --username=freecodecamp --dbname=postgres

- I list existing databases:

        postgres=> \l
        postgres=>                                List of databases
        +-----------+----------+----------+---------+---------+-----------------------+
        |   Name    |  Owner   | Encoding | Collate |  Ctype  |   Access privileges   |
        +-----------+----------+----------+---------+---------+-----------------------+
        | postgres  | postgres | UTF8     | C.UTF-8 | C.UTF-8 |                       |
        | template0 | postgres | UTF8     | C.UTF-8 | C.UTF-8 | =c/postgres          +|
        |           |          |          |         |         | postgres=CTc/postgres |
        | template1 | postgres | UTF8     | C.UTF-8 | C.UTF-8 | =c/postgres          +|
        |           |          |          |         |         | postgres=CTc/postgres |
        +-----------+----------+----------+---------+---------+-----------------------+

- All the info from the CSV files will go into a single database. Create a new database named students

        postgres=> CREATE DATABASE students;

- Connecting to database:

        postgres=> \c students 
            You are now connected to database "students" as user "freecodecamp".

<hr>

## **2 Setting Up Tables**

### **2.1 Creating tables:**

- The CSV files have a bunch of students with info about them, and some courses and majors. You will have four tables. One for the students and their info, one for each major, another for each course, and a final one for showing what courses are included in each major.

- Creating the students table:

        students=> CREATE TABLE students();

- The second table will be for each unique major that appears in the data. Create a table named majors:

        students=> CREATE TABLE majors();

- The third table is for each unique course in the data. Create another table named courses

        students=> CREATE TABLE courses();

- The final table will be a junction table for the majors and courses. Create it with the name majors_courses

        students=> CREATE TABLE majors_courses();

- Displaying tables:

        students=> \d
                            List of relations
            +--------+----------------+-------+--------------+
            | Schema |      Name      | Type  |    Owner     |
            +--------+----------------+-------+--------------+
            | public | courses        | table | freecodecamp |
            | public | majors         | table | freecodecamp |
            | public | majors_courses | table | freecodecamp |
            | public | students       | table | freecodecamp |
            +--------+----------------+-------+--------------+

### **2.2 Adding columns to students table:**

-  The students.csv file has four fields, you will make a column for each of those as well as an ID column.

- Add a column to your students table named student_id. Give it a type of SERIAL so it automatically increments and make it a PRIMARY KEY:

        students=> ALTER TABLE students ADD COLUMN student_id SERIAL PRIMARY KEY;
            ALTER TABLE

- The first column in students.csv is first_name. Add a column to the students table with that name. Make it a type of VARCHAR(50) and give it the NOT NULL constraint.

        students=> ALTER TABLE students ADD COLUMN first_name VARCHAR(50) NOT NULL;
        students=> ALTER TABLE


- The next column in the data is last_name. Add it to the students table. Give it the same data type and max-length as first_name and make sure it has the NOT NULL constraint:

        students=> ALTER TABLE students ADD COLUMN last_name VARCHAR(50) NOT NULL;
        students=> ALTER TABLE

- The next column is for the major. The major column will be a foreign key referencing the majors table. Create major_id column type INT for now:

        students=> ALTER TABLE students ADD COLUMN major_id INT;

- Adding final column for gpa which will be a decimal with length of 2 and 1 number right of decimal point:

        students=> ALTER TABLE students ADD COLUMN gpa NUMERIC(2,1);

### **2.3 Adding columns to majors table:**

- Creating major_id column:

        students=> ALTER TABLE majors ADD COLUMN major_id SERIAL PRIMARY KEY;
        ALTER TABLE

- Adding major column:

        students=> ALTER TABLE majors ADD COLUMN major VARCHAR(50) NOT NULL;
        students=> ALTER TABLE

- Displaying table:

        students=> \d majors
        Table "public.majors"
        +----------+-----------------------+-----------+----------+------------------------------------------+
        |  Column  |         Type          | Collation | Nullable |                 Default                  |
        +----------+-----------------------+-----------+----------+------------------------------------------+
        | major_id | integer               |           | not null | nextval('majors_major_id_seq'::regclass) |
        | major    | character varying(50) |           | not null |                                          |
        +----------+-----------------------+-----------+----------+------------------------------------------+
        Indexes:
        "majors_pkey" PRIMARY KEY, btree (major_id)

### **2.4 Adding foreign key for students table for major_id:**

- Executed following command:

        students=> ALTER TABLE students ADD FOREIGN KEY(major_id) REFERENCES majors(major_id);
        ALTER TABLE

### **2.5 Adding columns to courses table:**

- Adding course_id column:

        students=> ALTER TABLE courses ADD COLUMN course_id SERIAL PRIMARY KEY; 

- Adding course column:

        students=> ALTER TABLE courses ADD COLUMN course VARCHAR(100) NOT NULL;

- Displaying the table:

        students=> \d courses
        Table "public.courses"
        +-----------+------------------------+-----------+----------+--------------------------------------------+
        |  Column   |          Type          | Collation | Nullable |                  Default                   |
        +-----------+------------------------+-----------+----------+--------------------------------------------+
        | course_id | integer                |           | not null | nextval('courses_course_id_seq'::regclass) |
        | course    | character varying(100) |           | not null |                                            |
        +-----------+------------------------+-----------+----------+--------------------------------------------+
        Indexes:
        "courses_pkey" PRIMARY KEY, btree (course_id)

### **2.6 Adding columns to majors_courses:**

- Adding major_id column:

        students=> ALTER TABLE majors_courses ADD COLUMN major_id INT;
        ALTER TABLE

- Setting major_id column to reference majors table:

        students=> ALTER TABLE majors_courses ADD FOREIGN KEY(major_id) REFERENCES majors(major_id);
        ALTER TABLE

- Adding course_id column:

        students=> ALTER TABLE majors_courses ADD COLUMN course_id INT;
        ALTER TABLE

- Setting course_id column to reference courses table:

        students=> ALTER TABLE majors_courses ADD FOREIGN KEY(COURSE_id) REFERENCES courses(course_id);
        ALTER TABLE


- The table does not have a primary key! I will create a composite key so only unique courses and majors can exits:

        students=> ALTER TABLE majors_courses ADD PRIMARY KEY (course_id, major_id);
        ALTER TABLE

- Displaying the table:

        students=> \d majors_courses 
        Table "public.majors_courses"
        +-----------+---------+-----------+----------+---------+
        |  Column   |  Type   | Collation | Nullable | Default |
        +-----------+---------+-----------+----------+---------+
        | major_id  | integer |           | not null |         |
        | course_id | integer |           | not null |         |
        +-----------+---------+-----------+----------+---------+
        Indexes:
        "majors_courses_pkey" PRIMARY KEY, btree (course_id, major_id)
        Foreign-key constraints:
        "majors_courses_course_id_fkey" FOREIGN KEY (course_id) REFERENCES courses(course_id)
        "majors_courses_major_id_fkey" FOREIGN KEY (major_id) REFERENCES majors(major_id)

### **2.7 Displaying all tables:**

- Displaying tables:

        students=> \d
        students=>                       List of relations
        +--------+-------------------------+----------+--------------+
        | Schema |          Name           |   Type   |    Owner     |
        +--------+-------------------------+----------+--------------+
        | public | courses                 | table    | freecodecamp |
        | public | courses_course_id_seq   | sequence | freecodecamp |
        | public | majors                  | table    | freecodecamp |
        | public | majors_courses          | table    | freecodecamp |
        | public | majors_major_id_seq     | sequence | freecodecamp |
        | public | students                | table    | freecodecamp |
        | public | students_student_id_seq | sequence | freecodecamp |
        +--------+-------------------------+----------+--------------+
        (7 rows)

<hr>

## 3 Adding Data to Tables

### **3.1 Adding data to tables:**

- Using the first row from course.csv, I inserted the major:

        students=> INSERT INTO majors(major) VALUES ('Database Administration');
        INSERT 0 1

- Inserted first course:

        students=> INSERT INTO courses(course) VALUES ('Data Structures and Algorithms');
        students=> INSERT 0 1


- Inserting row into majors_course:

        students=> INSERT INTO majors_courses VALUES (2,1);

- Inserting first row from students.csv to students table:

        students=> INSERT INTO students(first_name, last_name, major_id, gpa) VALUES ('Rhea', 'Kellems', 2, 2.5);
        INSERT 0 1

<hr>

## 4 Creating Script

### **4.1 Creating file:**

- I split the terminal to access the project folder, and create a script:

        ~/project$ touch insert_data.sh
        ~/project$ chmod +x insert_data.sh

- Initialised script:

        #!/bin/bash
        # Script to insert data from courses.csv and students.csv into students database

### **4.2 Printing from a file:**

- I need to get the information from the csv file, using the cat command you can print contents of a file:

        cat courses.csv

### **4.3 Pipe command:**

- We can loop through the content using the pipe command:

        cat courses.csv | while read MAJOR COURSE
        do
                echo $MAJOR
        done

- Running the script:

        ~/project$ ./insert_data.sh 
                major,course
                Database
                Web
                Database
                Data
                Network
                Database
                Data
                Network
                Computer
                Database
                Game
                Data
                Computer
                System
                Game
                Web
                Data
                Web
                Game
                System
                Game
                System
                System
                Computer
                Computer
                Network
                Web
                Network

- This is only printing the first word of the major 😰

- Bash has an IFS (Internal Field Seperator) variable:

        ~/project$ declare -p IFSdeclare -- IFS=" 
        "

- We need to change this to a comma!

        cat courses.csv | while IFS="," read MAJOR COURSE
        do
                echo $MAJOR
        done

- Running the script now displays the correct result:

        ~/project$ ./insert_data.sh 
                major
                Database Administration
                Web Development
                Database Administration
                Data Science
                Network Engineering
                Database Administration
                Data Science
                Network Engineering
                Computer Programming
                Database Administration
                Game Design
                Data Science
                Computer Programming
                System Administration
                Game Design
                Web Development
                Data Science
                Web Development
                Game Design
                System Administration
                Game Design
                System Administration
                System Administration
                Computer Programming
                Computer Programming
                Network Engineering
                Web Development
                Network Engineering


- Updating the script to print the course too:

        cat courses.csv | while IFS="," read MAJOR COURSE
        do
                echo $MAJOR $COURSE
        done

- Running the script:

        ~/project$ ./insert_data.sh 
        major course
        Database Administration Data Structures and Algorithms
        Web Development Web Programming
        Database Administration Database Systems
        Data Science Data Structures and Algorithms
        Network Engineering Computer Networks
        Database Administration SQL
        Data Science Machine Learning
        Network Engineering Computer Systems
        Computer Programming Computer Networks
        Database Administration Web Applications
        Game Design Artificial Intelligence
        Data Science Python
        Computer Programming Object-Oriented Programming
        System Administration Computer Systems
        Game Design Calculus
        Web Development Data Structures and Algorithms
        Data Science Calculus
        Web Development Object-Oriented Programming
        Game Design Game Architecture
        System Administration Computer Networks
        Game Design Algorithms
        System Administration UNIX
        System Administration Server Administration
        Computer Programming Computer Systems
        Computer Programming Python
        Network Engineering Network Security
        Web Development Web Applications
        Network Engineering Algorithms

## **5 Inserting Data For Majors Table**

### **5.1 connecting to database:**

- I want to add the majors and courses from the CSV file into the database if it does not exist.

- I added the psql command to connect to database:

        PSQL="psql -X --username=freecodecamp --dbname=students --no-align --tuples-only -c"

        - The -c flag allows for single command and exiting, the other flags are for formatting.

### **5.2 Populating courses Table:**

- I added SQL query and assigned it to MAJOR_ID and echoed it:

        # get major_id
        MAJOR_ID=$($PSQL "SELECT major_id FROM majors WHERE major='$MAJOR'")
        echo $MAJOR_ID

- Running the script:

        ~/project$ ./insert_data.sh 

        1

        1


        1



        1






        ~/project$

### **5.3 Inserting row into majors table if not already present:**

- We will check if the major_id is not found, hence the major does not exist:

        # if not found
        if [[ -z $MAJOR_ID ]]
        then
                # insert major
                INSERT_MAJOR_RESULT=$($PSQL "INSERT INTO majors(major) VALUES('$MAJOR')")
                echo $INSERT_MAJOR_RESULT
                # get new major_id
        fi

- I copied the courses.csv file so I can enter dummy data into it:

        ~/project$ cp courses.csv courses_test.csv

- I kept only first 5 lines of the test file:

        major,course
        Database Administration,Data Structures and Algorithms
        Web Development,Web Programming
        Database Administration,Database Systems
        Data Science,Data Structures and Algorithms
        Network Engineering,Computer Networks

- Running the script on courses_test.csv inserts 3 rows into the table

- Displaying the majors table:

        students=> SELECT * FROM majors;
        +----------+-------------------------+
        | major_id |          major          |
        +----------+-------------------------+
        |        1 | Database Administration |
        |        2 | major                   |
        |        3 | Web Development         |
        |        4 | Data Science            |
        +----------+-------------------------+
        (4 rows)

### **5.4 Deleting Table Data:**

- I deleted all content from the table using truncate command:

students=> TRUNCATE majors;
ERROR:  cannot truncate a table referenced in a foreign key constraint
DETAIL:  Table "majors_courses" references "majors".
HINT:  Truncate table "majors_courses" at the same time, or use TRUNCATE ... CASCADE.

- Due to a foreign key constraint I cannot delete the data! But I will truncate all data from the tables:

        students=> TRUNCATE majors, students, majors_courses, courses;
        TRUNCATE TABLE

- Running the script:

        ~/project$ ./insert_data.sh 
        INSERT 0 1
        INSERT 0 1
        INSERT 0 1
        INSERT 0 1

- Displaying the table:

        students=> SELECT * FROM majors;
        +----------+-------------------------+
        | major_id |          major          |
        +----------+-------------------------+
        |        5 | major                   |
        |        6 | Database Administration |
        |        7 | Web Development         |
        |        8 | Data Science            |
        +----------+-------------------------+

### **5.5 Ignoring first line from CSV:**

- I do not want to add the data from the first line :

        if [[ $MAJOR != major ]]
        then
                # get major_id
                MAJOR_ID=$($PSQL "SELECT major_id FROM majors WHERE major='$MAJOR'")
                # if not found
                if [[ -z $MAJOR_ID ]]
                then
                        # insert major
                        INSERT_MAJOR_RESULT=$($PSQL "INSERT INTO majors(major) VALUES('$MAJOR')")
                        echo $INSERT_MAJOR_RESULT
                        # get new major_id
                fi
        fi

- Truncated all the data:

        students=> TRUNCATE majors, students, majors_courses;
        TRUNCATE TABLE

- Running the script:

        ~/project$ ./insert_data.sh 
        INSERT 0 1
        INSERT 0 1
        INSERT 0 1

- The majors table contains expected results:

        students=> select * from majors;
        +----------+-------------------------+
        | major_id |          major          |
        +----------+-------------------------+
        |        9 | Database Administration |
        |       10 | Web Development         |
        |       11 | Data Science            |
        +----------+-------------------------+

- In order to get useful information of what is printed, I check if the result of the query is "INSERT 0 1" and echo the major:

        # insert major
        INSERT_MAJOR_RESULT=$($PSQL "INSERT INTO majors(major) VALUES('$MAJOR')")
        if [[ $INSERT_MAJOR_RESULT == "INSERT 0 1" ]]
        then
                echo "Inserted into majors, $MAJOR"
        fi

- I truncated the majors table again:

        students=> TRUNCATE majors, students, majors_courses;
        TRUNCATE TABLE

- Running the script again:

        ~/project$ ./insert_data.sh 
        Inserted into majors, Database Administration
        Inserted into majors, Web Development
        Inserted into majors, Data Science

### **5.6 Getting major_id:**

- I now get the new major_id of the inserted table:

      $MAJOR_ID=$($PSQL "SELECT major_id FROM majors WHERE  major='$MAJOR'")

### **5.7 Populating courses Table:**

- Getting course_id from database:

        # get course_id
        COURSE_ID=$($PSQL "SELECT course_id FROM courses WHERE course='$COURSE'")
        

- Inserting the course if the course_id is empty:

        # insert course
        INSERT_COURSE_RESULT=$($PSQL "INSERT INTO courses(course) VALUES('$COURSE')")
        if [[ $INSERT_COURSE_RESULT == "INSERT 0 1" ]]
        then
                echo Inserted into courses, $COURSE
        fi

- Again, deleting all data:

        students=> TRUNCATE majors, students, majors_courses;
        TRUNCATE TABLE

- Running the script again:

        ~/project$ ./insert_data.sh 
        Inserted into majors, Database Administration
        Inserted into courses, Data Structures and Algorithms
        Inserted into majors, Web Development
        Inserted into courses, Web Programming
        Inserted into courses, Database Systems
        Inserted into majors, Data Science

- Displaying the data:
        
        students=> select * from courses;
        students=>                        
        +-----------+--------------------------------+
        | course_id |             course             |
        +-----------+--------------------------------+
        |         2 | Data Structures and Algorithms |
        |         3 | Web Programming                |
        |         4 | Database Systems               |
        +-----------+--------------------------------+

### **5.8 Deleting Table Data From Script:**

- Truncating the tables within the script:

        # clearing tables:
        echo $($PSQL "TRUNCATE students, majors, courses, majors_courses")

- Getting the course_id of inserted course:

        # get new course_id
        COURSE_ID=$($PSQL "SELECT course_id FROM courses WHERE course='$COURSE'")

### **5.9 Updating majors_courses table after majors and courses are updated:**

- Inserting into the majors_courses table:

        # insert into majors_courses
        INSERT_MAJORS_COURSES_RESULT=$($PSQL "INSERT INTO majors_courses(major_id, course_id) VALUES ($MAJOR_ID,$COURSE_ID)")

- Added a print statement:

        # insert into majors_courses
        INSERT_MAJORS_COURSES_RESULT=$($PSQL "INSERT INTO majors_courses(major_id, course_id) VALUES ($MAJOR_ID,$COURSE_ID)")
        if [[ $INSERT_MAJORS_COURSES_RESULT == "INSERT 0 1" ]]
        then
                echo Inserted into majors_courses, $MAJOR : $COURSE
        fi

- Then executing the script:

        ~/project$ ./insert_data.sh 
        TRUNCATE TABLE
        Inserted into majors, Database Administration
        Inserted into courses, Data Structures and Algorithms
        Inserted into majors_courses, Database Administration : Data Structures and Algorithms
        Inserted into majors, Web Development
        Inserted into courses, Web Programming
        Inserted into majors_courses, Web Development : Web Programming
        Inserted into courses, Database Systems
        Inserted into majors_courses, Database Administration : Database Systems
        Inserted into majors, Data Science
        Inserted into majors_courses, Data Science : Data Structures and Algorithms

### **5.10 Data in DB after executing script:**

- Displaying the tables:

                       
        +----------+-------------------------+
        | major_id |          major          |
        +----------+-------------------------+
        |       21 | Database Administration |
        |       22 | Web Development         |
        |       23 | Data Science            |
        +----------+-------------------------+

        +-----------+--------------------------------+
        | course_id |             course             |
        +-----------+--------------------------------+
        |         8 | Data Structures and Algorithms |
        |         9 | Web Programming                |
        |        10 | Database Systems               |
        +-----------+--------------------------------+
                
        +----------+-----------+
        | major_id | course_id |
        +----------+-----------+
        |       21 |         8 |
        |       22 |         9 |
        |       21 |        10 |
        |       23 |         8 |
        +----------+-----------+

<hr>

## **6 Inserting Data for Students Table**

### **6.1 Making test data:**

- I make a copy of the students.csv file:

        ~/project$ cp students.csv students_test.csv

- I removed all but 5 lines, including a line break on line 6 for students_test.csv:

        first_name,last_name,major,gpa
        Rhea,Kellems,Database Administration,2.5
        Emma,Gilbert,null,null
        Kimberly,Whitley,Web Development,3.8
        Jimmy,Felipe,Database Administration,3.7


- Below the loop of the courses.csv, I add the following command:

        cat students_test.csv | while IFS="," read FIRST LAST MAJOR GPA
        do
                echo $FIRST
        done

- I check if the first column is not "first_name":

        if [[ $FIRST != "first_name" ]]
        then
                # get major_id
                # if not found
                # set to null
                # insert student
        fi

- I will add all columns from the CSV except the major_id which will reference the majors table, if not found we can insert NULL:

        # get major_id
        MAJOR_ID=$($PSQL "SELECT MAJOR_ID FROM majors WHERE major='$MAJOR'")
        echo $MAJOR_ID

### **6.2 Dealing with Students with no Major or Course:**

- Some of the students do not have a major or course:

         # if not found
        if [[ -z $MAJOR_ID ]]
        then
                # set to null
                MAJOR_ID=null
        fi

- Inserting student row:

        # insert student
        INSERT_STUDENT_RESULT=$($PSQL "INSERT INTO students(first_name,last_name,major_id,gpa) VALUES ('$FIRST', '$LAST', $MAJOR_ID, $GPA)")
        if [[ $INSERT_STUDENT_RESULT == "INSERT 0 1" ]]
        then
                echo "Inserted into students, $FIRST $LAST"
        fi

- Executing the script:

        ~/project$ ./insert_data.sh 
        TRUNCATE TABLE
        Inserted into majors, Database Administration
        Inserted into courses, Data Structures and Algorithms
        Inserted into majors_courses, Database Administration : Data Structures and Algorithms
        Inserted into majors, Web Development
        Inserted into courses, Web Programming
        Inserted into majors_courses, Web Development : Web Programming
        Inserted into courses, Database Systems
        Inserted into majors_courses, Database Administration : Database Systems
        Inserted into majors, Data Science
        Inserted into majors_courses, Data Science : Data Structures and Algorithms
        Inserted into students, Rhea Kellems
        Inserted into students, Emma Gilbert
        Inserted into students, Kimberly Whitley
        Inserted into students, Jimmy Felipe

- Displaying the data from the students table:

        +------------+------------+-----------+----------+-----+
        | student_id | first_name | last_name | major_id | gpa |
        +------------+------------+-----------+----------+-----+
        |          2 | Rhea       | Kellems   |       36 | 2.5 |
        |          3 | Emma       | Gilbert   |          |     |
        |          4 | Kimberly   | Whitley   |       37 | 3.8 |
        |          5 | Jimmy      | Felipe    |       36 | 3.7 |
        +------------+------------+-----------+----------+-----+
        (31 rows)

### **6.3 Using original data files:**

- I updated the script to use the original csv files.

## **7 Displaying Rows From All Tables**

- Displaying the students table:

        +------------+------------+--------------+----------+-----+
        | student_id | first_name |  last_name   | major_id | gpa |
        +------------+------------+--------------+----------+-----+
        |          6 | Rhea       | Kellems      |       39 | 2.5 |
        |          7 | Emma       | Gilbert      |          |     |
        |          8 | Kimberly   | Whitley      |       40 | 3.8 |
        |          9 | Jimmy      | Felipe       |       39 | 3.7 |
        |         10 | Kyle       | Stimson      |          | 2.8 |
        |         11 | Casares    | Hijo         |       44 | 4.0 |
        |         12 | Noe        | Savage       |          | 3.6 |
        |         13 | Sterling   | Boss         |       44 | 3.9 |
        |         14 | Brian      | Davis        |          | 2.3 |
        |         15 | Kaija      | Uronen       |       44 | 3.7 |
        |         16 | Faye       | Conn         |       44 | 2.1 |
        |         17 | Efren      | Reilly       |       40 | 3.9 |
        |         18 | Danh       | Nhung        |          | 2.4 |
        |         19 | Maxine     | Hagenes      |       39 | 2.9 |
        |         20 | Larry      | Saunders     |       41 | 2.2 |
        |         21 | Karl       | Kuhar        |       40 |     |
        |         22 | Lieke      | Hazenveld    |       44 | 3.5 |
        |         23 | Obie       | Hilpert      |       40 |     |
        |         24 | Peter      | Booysen      |          | 2.9 |
        |         25 | Nathan     | Turner       |       39 | 3.3 |
        |         26 | Gerald     | Osiki        |       41 | 2.2 |
        |         27 | Vanya      | Hassanah     |       44 | 4.0 |
        |         28 | Roxelana   | Florescu     |       39 | 3.2 |
        |         29 | Helene     | Parker       |       41 | 3.4 |
        |         30 | Mariana    | Russel       |       40 | 1.8 |
        |         31 | Ajit       | Dhungel      |          | 3.0 |
        |         32 | Mehdi      | Vandenberghe |       39 | 1.9 |
        |         33 | Dejon      | Howell       |       40 | 4.0 |
        |         34 | Aliya      | Gulgowski    |       45 | 2.6 |
        |         35 | Ana        | Tupajic      |       41 | 3.1 |
        |         36 | Hugo       | Duran        |          | 3.8 |
        +------------+------------+--------------+----------+-----+
        (7 rows)

- Displaying the majors table:

        +----------+-------------------------+
        | major_id |          major          |
        +----------+-------------------------+
        |       39 | Database Administration |
        |       40 | Web Development         |
        |       41 | Data Science            |
        |       42 | Network Engineering     |
        |       43 | Computer Programming    |
        |       44 | Game Design             |
        |       45 | System Administration   |
        +----------+-------------------------+

- Displaying the courses:

        +-----------+--------------------------------+
        | course_id |             course             |
        +-----------+--------------------------------+
        |        26 | Data Structures and Algorithms |
        |        27 | Web Programming                |
        |        28 | Database Systems               |
        |        29 | Computer Networks              |
        |        30 | SQL                            |
        |        31 | Machine Learning               |
        |        32 | Computer Systems               |
        |        33 | Web Applications               |
        |        34 | Artificial Intelligence        |
        |        35 | Python                         |
        |        36 | Object-Oriented Programming    |
        |        37 | Calculus                       |
        |        38 | Game Architecture              |
        |        39 | Algorithms                     |
        |        40 | UNIX                           |
        |        41 | Server Administration          |
        |        42 | Network Security               |
        +-----------+--------------------------------+
        (17 rows)


- Displaying the majors_courses:

        +----------+-----------+
        | major_id | course_id |
        +----------+-----------+
        |       39 |        26 |
        |       40 |        27 |
        |       39 |        28 |
        |       41 |        26 |
        |       42 |        29 |
        |       39 |        30 |
        |       41 |        31 |
        |       42 |        32 |
        |       43 |        29 |
        |       39 |        33 |
        |       44 |        34 |
        |       41 |        35 |
        |       43 |        36 |
        |       45 |        32 |
        |       44 |        37 |
        |       40 |        26 |
        |       41 |        37 |
        |       40 |        36 |
        |       44 |        38 |
        |       45 |        29 |
        |       44 |        39 |
        |       45 |        40 |
        |       45 |        41 |
        |       43 |        32 |
        |       43 |        35 |
        |       42 |        42 |
        |       40 |        33 |
        |       42 |        39 |
        +----------+-----------+
        (28 rows)

- To finish I deleted the test CSV files:

        ~/project$ rm students_test.csv 
        ~/project$ rm courses_test.csv 

## **8 Dumping SQL database**

- I dumped the SQL database:

        ~/project$ pg_dump --clean --create --inserts  --username=freecodecamp students > students.sql
