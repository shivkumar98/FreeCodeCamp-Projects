# Learn SQL by Building a Student Database: Part 1

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

-  The students.csv file has four fields, you will make a column for each of those as well as an ID column.

- Add a column to your students table named student_id. Give it a type of SERIAL so it automatically increments and make it a PRIMARY KEY:

        students=> ALTER TABLE students ADD COLUMN student_id SERIAL PRIMARY KEY;
            ALTER TABLE

- The first column in students.csv is first_name. Add a column to the students table with that name. Make it a type of VARCHAR(50) and give it the NOT NULL constraint.

        students=> ALTER TABLE students ADD COLUMN first_name VARCHAR(50) NOT NULL;
            ALTER TABLE