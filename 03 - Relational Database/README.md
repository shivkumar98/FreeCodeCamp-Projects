# Relational Database Certification

## 1: Learn Bash By Building a Boilerplate

### 1.1: Bash Commands
- cd: change directory
- ls: list files
    - we can add a -l flag to list contents in long list format: 'ls -l'
    - we can add -a flag to list all files: 'ls -a'
- more: looks inside a file
- clear: clears terminal
- pwd: print working directory
- mkdir: makes directory
    - you can make a directory in a sub folder by writing the current directory
    - e.g. mkdir current/child makes a child folder in current folder
- echo: prints to console
    - you can print to a file also
    - e.g. echo hello world! &gt;&gt; README.md
- touch: makes a file, e.g. 'touch index.html'
    - you can touch files in other directories too
    - e.g. touch client/asset/font/bold.font
- cp: copies files/directories
    - cp &lt;file&gt; &lt;desitnation&gt;
    - You can copy a folder recursively using -R flag
    - e.g. cp -R website-boilerplate shivs-website
- mv: moves files/directories
    - can also be used to rename a file, e.g. 'mv index.js index.html'
- rm: removes files
    - rm &lt;fileName&gt;
    - -r flag removes directories and contents recursively, this is useful if you want to delete a directory with content inside
    - e.g. rm -r fonts
- rmdir: removes directory
- find: lists all files of a folder in a tree view
    - -name flag lets you search for a file/directory
    - e.g. find -name index.html
- '--help' is a flag which gives help for a command
    - e.g. 'ls --help'
- exit: exits terminal

<hr>

## 2: Learn Relational Databases by Building a Mario Database

### 2.1: PostgreSQL

- PostgreSQL is an open-source object relational database management system (ORDBMS)
- MySQL is the most popular DBMS, it lacks the object relational functions such as table inheritance and function overloading of PostgreSQL.

<hr>


### 2.2: PostgreSQL Commands:

* ***psql --usernam=user --dbname=name*** - connects to database
* ***\l;*** - lists databases
* ***CREATE DATABASE databasename;***
* ***\c databasename*** - connects to a database
* ***\d*** - displays database tables
    - ***\d tablename*** - displays column info of a specified table
*  ***CREATE TABLE tablename()** *
* ***ALTER TABLE table_name ADD COLUMN column_name DATATYPE;*** - adds a column to table
* ***ALTER TABLE tablename DROP COLUMN <columnname>;*** - drops a column
* ***ALTER TABLE <tablename> RENAME COLUMN <columnname> TO <newname>;*** - rename column
* ***INSERT INTO tablename(col1, col2) VALUES (val1,val2);***
* ***SELECT columns FROM tablename***
* ***DELETE FROM tablename WHERE condition***

<hr>

### 2.3: Building a Mario Database:

- I have PostgreSQL installed on my VM
- I will use the terminal application
- I logged in:
    - **psql --usernam=freecodecamp --dbname=postgres**

- **\l** lists databases:

        +-----------+----------+----------+---------+---------+-----------------------+
        |   Name    |  Owner   | Encoding | Collate |  Ctype  |   Access privileges   |
        +-----------+----------+----------+---------+---------+-----------------------+
        | postgres  | postgres | UTF8     | C.UTF-8 | C.UTF-8 |                       |
        | template0 | postgres | UTF8     | C.UTF-8 | C.UTF-8 | =c/postgres          +|
        |           |          |          |         |         | postgres=CTc/postgres |
        | template1 | postgres | UTF8     | C.UTF-8 | C.UTF-8 | =c/postgres          +|
        |           |          |          |         |         | postgres=CTc/postgres |
        +-----------+----------+----------+---------+---------+-----------------------+

- I created 2 databases using:
    - **CREATE DATABASE first_database;**
    - **CREATE DATABASE second_database;**

- I connected to the second database:
    - **\c second_database**

- Displayed tables:
    - **\d**

        +--------+-------------+-------+--------------+
        | Schema |    Name     | Type  |    Owner     |
        +--------+-------------+-------+--------------+
        | public | first_table | table | freecodecamp |
        +--------+-------------+-------+--------------+
        (1 row)

- Displayed details of second table:
    - **\d second_table**

        Table "public.second_table"
        +--------+------+-----------+----------+---------+
        | Column | Type | Collation | Nullable | Default |
        +--------+------+-----------+----------+---------+
        +--------+------+-----------+----------+---------+

- I added two columns to second table using:
    - **ALTER TABLE second_table ADD COLUMN first_column INT;**
    - **ALTER TABLE second_table ADD COLUMN id INT;**

- Displaying the second table:

        Table "public.second_table"
        +--------------+---------+-----------+----------+---------+
        |    Column    |  Type   | Collation | Nullable | Default |
        +--------------+---------+-----------+----------+---------+
        | first_column | integer |           |          |         |
        | id           | integer |           |          |         |
        +--------------+---------+-----------+----------+---------+

- I dropped the first_column:
    - **ALTER TABLE second_table DROP COLUMN first_column;**

- VARCHAR is used to declare a type of string with a max length specified

- I added a new column called name:
    - ALTER TABLE second_table ADD COLUMN name VARCHAR(30);

- I displayed the table:
        
        Table "public.second_table"
        +--------+-----------------------+-----------+----------+---------+
        | Column |         Type          | Collation | Nullable | Default |
        +--------+-----------------------+-----------+----------+---------+
        | id     | integer               |           |          |         |
        | name   | character varying(30) |           |          |         |
        +--------+-----------------------+-----------+----------+---------+

- The column name was renamed:
    - **ALTER TABLE second_table RENAME COLUMN name TO username;**

- Inserted row into second table:
    - **INSERT INTO second_table(id,username) VALUES (1,'Samus');**

- Selected all columns from table:
    - **SELECT * FROM second_table;**

        +----+----------+
        | id | username |
        +----+----------+
        |  1 | Samus    |
        +----+----------+

- Inserted more rows:
    - INSERT INTO second_table(id, username) VALUES (2, 'Mario');
    - INSERT INTO second_table(id, username) VALUES (3, 'Luigi');

- Deleted all rows:
    - DELETE FROM second_table WHERE username = 'Luigi';
    - DELETE FROM second_table WHERE username = 'Mario';
    - DELETE FROM second_table WHERE username = 'Samus';
    - NOTE: double quotations (") can not be used.

- Dropped all columns:
    - ALTER TABLE second_table DROP COLUMN username;
    - ALTER TABLE second_table DROP COLUMN id;