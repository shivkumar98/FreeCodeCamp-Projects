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
*  ***CREATE TABLE tablename()***
* ***CREATE TABLE tablename(columnname DATATYPE CONSTRAINTS);***
* ***ALTER TABLE table_name ADD COLUMN column_name DATATYPE;*** 
* ***ALTER TABLE tablename DROP COLUMN <columnname>;***
* ***ALTER TABLE <tablename> RENAME COLUMN <columnname> TO <newname>;***
* ***INSERT INTO tablename(col1, col2) VALUES (val1,val2);***
* ***SELECT columns FROM tablename***
* ***DELETE FROM tablename WHERE condition***
* ***DROP TABLE tablename***
* ***DROP DATABASE databasename***
* **UPDATE TABLE tablename SET col1 = val1, SET col2 = val2 .... WHERE condition;**
*  ***ALTER TABLE tablename ADD PRIMARY KEY(columnname);***
*  ***ALTER TABLE tablename DROP CONSTANT constraintname;***
*  ***ALTER TABLE tablename ADD COLUMN columnname DATATYPE REFERENCES referenced_tablename(referenced_columnname);***
* ***ALTER TABLE tablename ADD UNIQUE(columnname);***
* ***ALTER TABLE tablename ALTER COLUMN columnname SET NOT NULL;***

<hr>

### 2.3: Building a Mario Database:

- Using terminal I logged in:
    
        psql --usernam=freecodecamp --dbname=postgres

- Display databases:

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

        CREATE DATABASE first_database;
        CREATE DATABASE second_database;

- I connected to the second database:
    
        \c second_database;

- Displayed tables:

        +--------+-------------+-------+--------------+
        | Schema |    Name     | Type  |    Owner     |
        +--------+-------------+-------+--------------+
        | public | first_table | table | freecodecamp |
        +--------+-------------+-------+--------------+
       

- Displayed details of second table:

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

        ALTER TABLE second_table DROP COLUMN first_column;

- VARCHAR is used to declare a type of string with a max length specified

- I added a new column called name:

        ALTER TABLE second_table ADD COLUMN name VARCHAR(30);

- I displayed the table:
        
        Table "public.second_table"
        +--------+-----------------------+-----------+----------+---------+
        | Column |         Type          | Collation | Nullable | Default |
        +--------+-----------------------+-----------+----------+---------+
        | id     | integer               |           |          |         |
        | name   | character varying(30) |           |          |         |
        +--------+-----------------------+-----------+----------+---------+

- The column name was renamed:

       ALTER TABLE second_table RENAME COLUMN name TO username;

- Inserted row into second table:#

        INSERT INTO second_table(id,username) VALUES (1,'Samus');

- Selected all columns from table:
    - **SELECT * FROM second_table;**

            +----+----------+
            | id | username |
            +----+----------+
            |  1 | Samus    |
            +----+----------+

- Inserted more rows:
     
        INSERT INTO second_table(id, username) VALUES (2, 'Mario');
        INSERT INTO second_table(id, username) VALUES (3, 'Luigi');

- Deleted all rows:

        DELETE FROM second_table WHERE username = 'Luigi';
        DELETE FROM second_table WHERE username = 'Mario';
        DELETE FROM second_table WHERE username = 'Samus';
    
    - NOTE: double quotations (") can not be used.

- Dropped all columns:
    - ALTER TABLE second_table DROP COLUMN username;
    - ALTER TABLE second_table DROP COLUMN id;

- Displaying tables:

        +--------+--------------+-------+--------------+
        | Schema |     Name     | Type  |    Owner     |
        +--------+--------------+-------+--------------+
        | public | first_table  | table | freecodecamp |
        | public | second_table | table | freecodecamp |
        +--------+--------------+-------+--------------+

- Dropped all tables from second_datbase:
    - **DROP TABLE second_table;**
    - **DROP TABLE first_table;**

- Listed all databases:

        +-----------------+--------------+----------+---------+---------+-----------------------+
        |      Name       |    Owner     | Encoding | Collate |  Ctype  |   Access privileges   |
        +-----------------+--------------+----------+---------+---------+-----------------------+
        | first_database  | freecodecamp | UTF8     | C.UTF-8 | C.UTF-8 |                       |
        | postgres        | postgres     | UTF8     | C.UTF-8 | C.UTF-8 |                       |
        | second_database | freecodecamp | UTF8     | C.UTF-8 | C.UTF-8 |                       |
        | template0       | postgres     | UTF8     | C.UTF-8 | C.UTF-8 | =c/postgres          +|
        |                 |              |          |         |         | postgres=CTc/postgres |
        | template1       | postgres     | UTF8     | C.UTF-8 | C.UTF-8 | =c/postgres          +|
        |                 |              |          |         |         | postgres=CTc/postgres |
        +-----------------+--------------+----------+---------+---------+-----------------------+

- ALTER DATABASE first_database RENAME TO mario_database;

        +-----------------+--------------+----------+---------+---------+-----------------------+
        |      Name       |    Owner     | Encoding | Collate |  Ctype  |   Access privileges   |
        +-----------------+--------------+----------+---------+---------+-----------------------+
        | mario_database  | freecodecamp | UTF8     | C.UTF-8 | C.UTF-8 |                       |
        | postgres        | postgres     | UTF8     | C.UTF-8 | C.UTF-8 |                       |
        | second_database | freecodecamp | UTF8     | C.UTF-8 | C.UTF-8 |                       |
        | template0       | postgres     | UTF8     | C.UTF-8 | C.UTF-8 | =c/postgres          +|
        |                 |              |          |         |         | postgres=CTc/postgres |
        | template1       | postgres     | UTF8     | C.UTF-8 | C.UTF-8 | =c/postgres          +|
        |                 |              |          |         |         | postgres=CTc/postgres |
        +-----------------+--------------+----------+---------+---------+-----------------------+

- **\c mario_database**

- **DROP DATABASE second_database;**

- Creating a new table:
        
        CREATE TABLE characters();

- Added a character_id column in table:
        
    - The SERIAL type will only accept non-null ints;

            ALTER TABLE characters ADD COLUMN character_id SERIAL;
    

- Displaying table:

        Table "public.characters"
        +--------------+---------+-----------+----------+--------------------------------------------------+
        |    Column    |  Type   | Collation | Nullable |                     Default                      |
        +--------------+---------+-----------+----------+--------------------------------------------------+
        | character_id | integer |           | not null | nextval('characters_character_id_seq'::regclass) |
        +--------------+---------+-----------+----------+--------------------------------------------------+

- Added non-null column:

         ALTER TABLE characters ADD COLUMN name VARCHAR(30) NOT NULL;

- Added homeland column:
    
        ALTER TABLE characters ADD COLUMN homeland VARCHAR(60);

- Added favorite_color column:
        
        ALTER TABLE characters ADD COLUMN favorite_color VARCHAR(30);

- Displaying table:

        +----------------+-----------------------+-----------+----------+--------------------------------------------------+
        |     Column     |         Type          | Collation | Nullable |                     Default                      |
        +----------------+-----------------------+-----------+----------+--------------------------------------------------+
        | character_id   | integer               |           | not null | nextval('characters_character_id_seq'::regclass) |
        | name           | character varying(30) |           | not null |                                                  |
        | homeland       | character varying(60) |           |          |                                                  |
        | favorite_color | character varying(30) |           |          |                                                  |
        +----------------+-----------------------+-----------+----------+--------------------------------------------------+

- Added Mario:

        INSERT INTO characters( name, homeland, favorite_color) VALUES ('Mario', 'Mushroom Kingdom', 'Red');

- Inserted Luigi:
        
        INSERT INTO characters (name, homeland, favorite_color) VALUES ('Luigi', 'Mushroom Kingdom', 'Green');

- Displaying all columns:
    
        +--------------+-------+------------------+----------------+
        | character_id | name  |     homeland     | favorite_color |
        +--------------+-------+------------------+----------------+
        |            1 | Mario | Mushroom Kingdom | Red            |
        |            2 | Luigi | Mushroom Kingdom | Green          |
        +--------------+-------+------------------+----------------+

- Inserting more characters:
        
        INSERT INTO characters (name, homeland, favorite_color) VALUES ('Peach', 'Mushroom Kingdom', 'Pink');
        INSERT INTO characters (name, homeland, favorite_color) VALUES ('Toadstool', 'Mushroom Kingdom', 'Red'), ('Bowser', 'Mushroom Kingdom', 'Green');
        INSERT INTO characters (name, homeland, favorite_color) VALUES ('Daisy', 'Sarasaland', 'Yellow'), ('Yoshi', 'Dinosaur Land', 'Green');

- Displaying all columns:

        +--------------+-----------+------------------+----------------+
        | character_id |   name    |     homeland     | favorite_color |
        +--------------+-----------+------------------+----------------+
        |            1 | Mario     | Mushroom Kingdom | Red            |
        |            2 | Luigi     | Mushroom Kingdom | Green          |
        |            3 | Peach     | Mushroom Kingdom | Pink           |
        |            5 | Bowser    | Mushroom Kingdom | Green          |
        |            4 | Toadstool | Mushroom Kingdom | Red            |
        |            6 | Daisy     | Sarasaland       | Yellow         |
        |            7 | Yoshi     | Dinosaur Land    | Green          |
        +--------------+-----------+------------------+----------------+



- Updated favourite color:

        UPDATE characters SET favorite_color = 'Orange' WHERE name='Daisy';

- Displayed table:

        +--------------+-----------+------------------+----------------+
        | character_id |   name    |     homeland     | favorite_color |
        +--------------+-----------+------------------+----------------+
        |            1 | Mario     | Mushroom Kingdom | Red            |
        |            2 | Luigi     | Mushroom Kingdom | Green          |
        |            3 | Peach     | Mushroom Kingdom | Pink           |
        |            5 | Bowser    | Mushroom Kingdom | Green          |
        |            4 | Toadstool | Mushroom Kingdom | Red            |
        |            7 | Yoshi     | Dinosaur Land    | Green          |
        |            6 | Daisy     | Sarasaland       | Orange         |
        +--------------+-----------+------------------+----------------+

- UPDATE characters SET name='Toad' WHERE favorite_color='Red';
    - Two rows were modified:

            +--------------+--------+------------------+----------------+
            | character_id |  name  |     homeland     | favorite_color |
            +--------------+--------+------------------+----------------+
            |            2 | Luigi  | Mushroom Kingdom | Green          |
            |            3 | Peach  | Mushroom Kingdom | Pink           |
            |            5 | Bowser | Mushroom Kingdom | Green          |
            |            7 | Yoshi  | Dinosaur Land    | Green          |
            |            6 | Daisy  | Sarasaland       | Orange         |
            |            1 | Toad   | Mushroom Kingdom | Red            |
            |            4 | Toad   | Mushroom Kingdom | Red            |
            +--------------+--------+------------------+----------------+

- Corrected Mario row:

        UPDATE characters SET name='Mario' WHERE character_id=1;

- Corrected Toad row:

        UPDATE characters SET favorite_color='Blue' WHERE character_id=4;

- Updated Bowser row:

        UPDATE characters SET favorite_color='Yellow' WHERE character_id=5;
        UPDATE characters SET homeland='Koopa Kingdom' WHERE character_id=5;

- Displaying data by character_id:

        SELECT * FROM characters ORDER BY character_id;

- Added primary key using name column:

        ALTER TABLE characters ADD PRIMARY KEY(name);

- Showing characters table information:

        +----------------+-----------------------+-----------+----------+--------------------------------------------------+
        |     Column     |         Type          | Collation | Nullable |                     Default                      |
        +----------------+-----------------------+-----------+----------+--------------------------------------------------+
        | character_id   | integer               |           | not null | nextval('characters_character_id_seq'::regclass) |
        | name           | character varying(30) |           | not null |                                                  |
        | homeland       | character varying(60) |           |          |                                                  |
        | favorite_color | character varying(30) |           |          |                                                  |
        +----------------+-----------------------+-----------+----------+--------------------------------------------------+
        Indexes:
            "characters_pkey" PRIMARY KEY, btree (name)

- Dropped the constraint which was created:

        ALTER TABLE characters DROP CONSTRAINT characters_pkey;

- Using character_id as primary key:

        ALTER TABLE characters ADD PRIMARY KEY(character_id);

- Displaying characters table information:

        +----------------+-----------------------+-----------+----------+--------------------------------------------------+
        |     Column     |         Type          | Collation | Nullable |                     Default                      |
        +----------------+-----------------------+-----------+----------+--------------------------------------------------+
        | character_id   | integer               |           | not null | nextval('characters_character_id_seq'::regclass) |
        | name           | character varying(30) |           | not null |                                                  |
        | homeland       | character varying(60) |           |          |                                                  |
        | favorite_color | character varying(30) |           |          |                                                  |
        +----------------+-----------------------+-----------+----------+--------------------------------------------------+

- Created more_info table:

        CREATE TABLE more_info();

- Displaying characters table, we can see the default value for character_id:

        +----------------+-----------------------+-----------+----------+--------------------------------------------------+
        |     Column     |         Type          | Collation | Nullable |                     Default                      |
        +----------------+-----------------------+-----------+----------+--------------------------------------------------+
        | character_id   | integer               |           | not null | nextval('characters_character_id_seq'::regclass) |
        | name           | character varying(30) |           | not null |                                                  |
        | homeland       | character varying(60) |           |          |                                                  |
        | favorite_color | character varying(30) |           |          |                                                  |
        +----------------+-----------------------+-----------+----------+--------------------------------------------------+
        Indexes:
            "characters_pkey" PRIMARY KEY, btree (character_id)

- Added a column to the more_info table:

        ALTER TABLE more_info ADD COLUMN more_info_id  SERIAL;

- Added primary key:

        ALTER TABLE more_info ADD PRIMARY KEY(more_info_id);

- Displaying tables:

        +--------+-----------------------------+----------+--------------+
        | Schema |            Name             |   Type   |    Owner     |
        +--------+-----------------------------+----------+--------------+
        | public | characters                  | table    | freecodecamp |
        | public | characters_character_id_seq | sequence | freecodecamp |
        | public | more_info                   | table    | freecodecamp |
        | public | more_info_more_info_id_seq  | sequence | freecodecamp |
        +--------+-----------------------------+----------+--------------+

- Added birthday and height column:

        ALTER TABLE more_info ADD COLUMN birthday DATE;
        ALTER TABLE more_info ADD COLUMN height INT;

- Added weight column with type numeric(4,1) which is a 4 digit value and 1 digit after decimal.

    ALTER TABLE more_info ADD COLUMN height INT;

         ALTER TABLE more_info ADD COLUMN weight numeric(4,1);

- Displaying more_info table:

        +--------------+--------------+-----------+----------+-------------------------------------------------+
        |    Column    |     Type     | Collation | Nullable |                     Default                     |
        +--------------+--------------+-----------+----------+-------------------------------------------------+
        | more_info_id | integer      |           | not null | nextval('more_info_more_info_id_seq'::regclass) |
        | birthday     | date         |           |          |                                                 |
        | height       | integer      |           |          |                                                 |
        | weight       | numeric(4,1) |           |          |                                                 |
        +--------------+--------------+-----------+----------+-------------------------------------------------+
        Indexes:
            "more_info_pkey" PRIMARY KEY, btree (more_info_id)


- To create a relationship with the characters table, we need to set a foreign key. I will add a character_id column to the more_info table which references the primary key of the characters table:

        ALTER TABLE more_info ADD COLUMN character_id INT REFERENCES characters(character_id);

- These tables now have a one-to-one relationship. One row in characters will correspond with one row in more_info.
    - We can enforce that each character_id in more_info will be unique:

            ALTER TABLE more_info ADD UNIQUE(character_id);

    - We can also ensure the value is not null:

            ALTER TABLE more_info ALTER COLUMN character_id SET NOT NULL;

- Displaying more_info table:

        +--------------+--------------+-----------+----------+-------------------------------------------------+
        |    Column    |     Type     | Collation | Nullable |                     Default                     |
        +--------------+--------------+-----------+----------+-------------------------------------------------+
        | more_info_id | integer      |           | not null | nextval('more_info_more_info_id_seq'::regclass) |
        | birthday     | date         |           |          |                                                 |
        | height       | integer      |           |          |                                                 |
        | weight       | numeric(4,1) |           |          |                                                 |
        | character_id | integer      |           | not null |                                                 |
        +--------------+--------------+-----------+----------+-------------------------------------------------+
        Indexes:
            "more_info_pkey" PRIMARY KEY, btree (more_info_id)
            "more_info_character_id_key" UNIQUE CONSTRAINT, btree (character_id)
        Foreign-key constraints:
            "more_info_character_id_fkey" FOREIGN KEY (character_id) REFERENCES characters(character_id)

#### Adding rows to more_info table:

- Displaying character_id from characters:

        +--------------+--------+
        | character_id |  name  |
        +--------------+--------+
        |            2 | Luigi  |
        |            3 | Peach  |
        |            7 | Yoshi  |
        |            6 | Daisy  |
        |            1 | Mario  |
        |            4 | Toad   |
        |            5 | Bowser |
        +--------------+--------+

- I will now add information for Mario:

        INSERT INTO more_info(birthday, height, weight, character_id) VALUES ('1981-07-09', 155, 64.5, 1);

        INSERT INTO more_info(birthday, height, weight, character_id) VALUES ('1983-07-14', 175, 48.8, 2);

        INSERT INTO more_info(birthday, height, weight, character_id) VALUES ('1985-10-18', 173, 52.2, 3);

        INSERT INTO more_info(birthday, height, weight, character_id) VALUES ('1950-01-10',66,35.6, 4); 

        INSERT INTO more_info(birthday , height, weight, character_id) VALUES ('1990-10-29', 258, 300, 5);

        INSERT INTO more_info(birthday, height, weight, character_id) VALUES ('1989,07-31', NULL, NULL, 6);

        INSERT INTO more_info(birthday, height, weight, character_id) VALUES ('1990,04-13',162,59.1, 7);

- Result:

        +--------------+------------+--------+--------+--------------+
        | more_info_id |  birthday  | height | weight | character_id |
        +--------------+------------+--------+--------+--------------+
        |            1 | 1981-07-09 |    155 |   64.5 |            1 |
        |            2 | 1983-07-14 |    175 |   48.8 |            2 |
        |            3 | 1985-10-18 |    173 |   52.2 |            3 |
        |            4 | 1950-01-10 |     66 |   35.6 |            4 |
        |            5 | 1990-10-29 |    258 |  300.0 |            5 |
        |            6 | 1989-07-31 |        |        |            6 |
        |            7 | 1990-04-13 |    162 |   59.1 |            7 |
        +--------------+------------+--------+--------+--------------+

  - I renamed columns:

        ALTER TABLE more_info RENAME COLUMN height TO height_in_cm;


#### Creating sound table:

- Created new table for sounds:

                 CREATE TABLE sounds(sound_id SERIAL PRIMARY KEY);

                +--------+-----------------------------+----------+--------------+
                | Schema |            Name             |   Type   |    Owner     |
                +--------+-----------------------------+----------+--------------+
                | public | characters                  | table    | freecodecamp |
                | public | characters_character_id_seq | sequence | freecodecamp |
                | public | more_info                   | table    | freecodecamp |
                | public | more_info_more_info_id_seq  | sequence | freecodecamp |
                | public | sounds                      | table    | freecodecamp |
                | public | sounds_sound_id_seq         | sequence | freecodecamp |
                +--------+-----------------------------+----------+--------------+


ALTER TABLE sounds ADD COLUMN filename VARCHAR(40) UNIQUE NOT NULL;

- Created a foreign key constraint so each character can have multiple sounds but a sound can not correspond to multiple characters:

                ALTER TABLE sounds ADD COLUMN character_id INT NOT NULL REFERENCES characters(character_id);

                +--------------+-----------------------+-----------+----------+------------------------------------------+
                |    Column    |         Type          | Collation | Nullable |                 Default                  |
                +--------------+-----------------------+-----------+----------+------------------------------------------+
                | sound_id     | integer               |           | not null | nextval('sounds_sound_id_seq'::regclass) |
                | filename     | character varying(40) |           | not null |                                          |
                | character_id | integer               |           | not null |                                          |
                +--------------+-----------------------+-----------+----------+------------------------------------------+
                Indexes:
                "sounds_pkey" PRIMARY KEY, btree (sound_id)
                "sounds_filename_key" UNIQUE CONSTRAINT, btree (filename)
                Foreign-key constraints:
                "sounds_character_id_fkey" FOREIGN KEY (character_id) REFERENCES characters(character_id)


INSERT INTO sounds(filename, character_id) VALUES ('its-a-me.wav', 1);

INSERT INTO sounds(filename, character_id) VALUES ('yippee.wav', 1);

INSERT INTO sounds(filename, character_id) VALUES ('ha-ha.wav', 2);

INSERT INTO sounds(filename, character_id) VALUES ('oh-yeah.wav', 2);

INSERT INTO sounds(filename, character_id) VALUES ('yay.wav', 3),('woo-hoo.wav',3);