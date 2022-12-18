# 3: Build a Celestial Bodies Database [Certification Project]

## 1 - Instructions:

* For this project, you need to log in to PostgreSQL with psql to create your database. Do that by entering psql --username=freecodecamp --dbname=postgres in the terminal. Make all the tests below pass to complete the project. Be sure to get creative, and have fun!

* Don't forget to connect to your database after you create it 😄

* Here's some ideas for other column and table names: description, has_life, is_spherical, age_in_millions_of_years, planet_types, galaxy_types, distance_from_earth.

* Notes:
    If you leave your virtual machine, your database may not be saved. You can make a dump of it by entering pg_dump -cC --inserts -U freecodecamp universe > universe.sql in a bash terminal (not the psql one). It will save the commands to rebuild your database in universe.sql. The file will be located where the command was entered. If it's anything inside the project folder, the file will be saved in the VM. You can rebuild the database by entering psql -U postgres < universe.sql in a terminal where the .sql file is.

* If you are saving your progress on freeCodeCamp.org, after getting all the tests to pass, follow the instructions above to save a dump of your database. Save the universe.sql file in a public repository and submit the URL to it on freeCodeCamp.org.

### **Complete the tasks below:**

- You should create a database named universe

- Be sure to connect to your database with \c universe. Then, you should add tables named galaxy, star, planet, and moon

- Each table should have a primary key

- Each primary key should automatically increment

- Each table should have a name column

- You should use the INT data type for at least two columns that are not a primary or foreign key

- You should use the NUMERIC data type at least once

- You should use the TEXT data type at least once

- You should use the BOOLEAN data type on at least two columns

- Each "star" should have a foreign key that references one of the rows in galaxy

- Each "planet" should have a foreign key that references one of the rows in star

- Each "moon" should have a foreign key that references one of the rows in planet

- Your database should have at least five tables

- Each table should have at least three rows

- The galaxy and star tables should each have at least six rows

- The planet table should have at least 12 rows

- The moon table should have at least 20 rows

- Each table should have at least three columns

- The galaxy, star, planet, and moon tables should each have at least five columns

- At least two columns per table should not accept NULL values

- At least one column from each table should be required to be UNIQUE

- All columns named name should be of type VARCHAR

- Each primary key column should follow the naming convention table_name_id. For example, the moon table should have a primary key column named moon_id

- Each foreign key column should have the same name as the column it is referencing


## 2 - Project Commentary

- Connected to server:

        psql --username=freecodecamp --dbname=postgres

        CREATE DATABASE universe;

        \c universe
You are now connected to database "universe" as user "freecodecamp".

        CREATE TABLE galaxy();
        CREATE TABLE star();
        CREATE TABLE planet();
        CREATE TABLE moon();


ALTER TABLE galaxy ADD COLUMN galaxy_id SERIAL PRIMARY KEY;
ALTER TABLE star ADD COLUMN star_id SERIAL PRIMARY KEY;
ALTER TABLE planet ADD COLUMN planet_id SERIAL PRIMARY KEY;
ALTER TABLE moon ADD COLUMN moon_id SERIAL PRIMARY KEY;

- This passes first 4 tests!

ALTER TABLE galaxy ADD COLUMN name TEXT;
ALTER TABLE star ADD COLUMN name TEXT;
ALTER TABLE moon ADD COLUMN name TEXT;
ALTER TABLE planet ADD COLUMN name TEXT;

- The fifth test passes! (Each table has a name column) The 8th test passes too (Using TEXT atleast once)

ALTER TABLE planet ADD COLUMN radius_in_km numeric (10,0);
ALTER TABLE planet ADD COLUMN number_of_moons INT;
ALTER TABLE planet ADD COLUMN distance_from_earth_in_km INT;

- First 8 tests all pass!

- Details of all tables:

                                                    Table "public.planet"
        +---------------------------+---------------+-----------+----------+-------------------------------------------+
        |          Column           |     Type      | Collation | Nullable |                  Default                  |
        +---------------------------+---------------+-----------+----------+-------------------------------------------+
        | planet_id                 | integer       |           | not null | nextval('planet_planet_id_seq'::regclass) |
        | name                      | text          |           |          |                                           |
        | radius_in_km              | numeric(10,0) |           |          |                                           |
        | number_of_moons           | integer       |           |          |                                           |
        | distance_from_earth_in_km | integer       |           |          |                                           |
        +---------------------------+---------------+-----------+----------+-------------------------------------------+
        Indexes:
            "planet_pkey" PRIMARY KEY, btree (planet_id)

                                        Table "public.moon"
        +---------+---------+-----------+----------+---------------------------------------+
        | Column  |  Type   | Collation | Nullable |                Default                |
        +---------+---------+-----------+----------+---------------------------------------+
        | moon_id | integer |           | not null | nextval('moon_moon_id_seq'::regclass) |
        | name    | text    |           |          |                                       |
        +---------+---------+-----------+----------+---------------------------------------+
        Indexes:
            "moon_pkey" PRIMARY KEY, btree (moon_id)

                                        Table "public.galaxy"
        +-----------+---------+-----------+----------+-------------------------------------------+
        |  Column   |  Type   | Collation | Nullable |                  Default                  |
        +-----------+---------+-----------+----------+-------------------------------------------+
        | galaxy_id | integer |           | not null | nextval('galaxy_galaxy_id_seq'::regclass) |
        | name      | text    |           |          |                                           |
        +-----------+---------+-----------+----------+-------------------------------------------+
        Indexes:
            "galaxy_pkey" PRIMARY KEY, btree (galaxy_id)


                                        Table "public.star"
        +---------+---------+-----------+----------+---------------------------------------+
        | Column  |  Type   | Collation | Nullable |                Default                |
        +---------+---------+-----------+----------+---------------------------------------+
        | star_id | integer |           | not null | nextval('star_star_id_seq'::regclass) |
        | name    | text    |           |          |                                       |
        +---------+---------+-----------+----------+---------------------------------------+
        Indexes:
            "star_pkey" PRIMARY KEY, btree (star_id)


ALTER TABLE planet ADD COLUMN is_habitable BOOLEAN;
ALTER TABLE moon ADD COLUMN is_dwarf_moon BOOLEAN;

- First 9 tests pass - including use of BOOLEAN in at least two columns.

ALTER TABLE galaxy ALTER COLUMN galaxy_id SET NOT NULL;

- A Galaxy can have multiple stars but a single star cabbit be part of multiple. So I shall implement a one-to-many relationships.

ALTER TABLE star ADD COLUMN galaxy_id INT UNIQUE NOT NULL REFERENCES galaxy(galaxy_id);
INSERT INTO galaxy(name) VALUES ('Mily Way');
INSERT INTO star(name, galaxy_id) VALUES ('The Sun',1);


- The 10th test now passes: Each "star" should have a foreign key that references one of the rows in galaxy

- I shall assume that a planet can orbit only a single star even though exoplanets exists!

