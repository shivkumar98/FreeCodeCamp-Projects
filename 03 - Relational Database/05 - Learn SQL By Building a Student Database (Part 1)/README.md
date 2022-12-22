# Learn SQL by Building a Student Database: Part 1

## 1 Logging in and creating database

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

## 2 Setting up tables:

### 2.1 Creating tables:

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

### 2.2 Adding columns to students table:

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

### 2.2 Adding columns to majors table:

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

### 2.3 Adding foreign key for students table for major_id

- Executed following command:

        students=> ALTER TABLE students ADD FOREIGN KEY(major_id) REFERENCES majors(major_id);
        ALTER TABLE

### 2.4 Adding columns to courses table:

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

### 2.5 Adding columns to majors_courses:

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

### 2.6 Displaying all tables:

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

### 3.1 Adding data to tables:

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

## 4: Creating Script

- I split the terminal to access the project folder, and create a script:

        ~/project$ touch insert_data.sh
        ~/project$ chmod +x insert_data.sh

- Initialised script:

        #!/bin/bash
        # Script to insert data from courses.csv and students.csv into students database

- I need to get the information from the csv file, using the cat command you can print contents of a file:

        cat courses.csv

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