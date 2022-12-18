# 3: Build a Celestial Bodies Database [Certification Project]

## 1 - Instructions:

* For this project, you need to log in to PostgreSQL with psql to create your database. Do that by entering psql --username=freecodecamp --dbname=postgres in the terminal. Make all the tests below pass to complete the project. Be sure to get creative, and have fun!

* Don't forget to connect to your database after you create it 😄

* Here's some ideas for other column and table names: description, has_life, is_spherical, age_in_millions_of_years, planet_types, galaxy_types, distance_from_earth.

* Notes:
    If you leave your virtual machine, your database may not be saved. You can make a dump of it by entering pg_dump -cC --inserts -U freecodecamp universe > universe.sql in a bash terminal (not the psql one). It will save the commands to rebuild your database in universe.sql. The file will be located where the command was entered. If it's anything inside the project folder, the file will be saved in the VM. You can rebuild the database by entering psql -U postgres < universe.sql in a terminal where the .sql file is.

* If you are saving your progress on freeCodeCamp.org, after getting all the tests to pass, follow the instructions above to save a dump of your database. Save the universe.sql file in a public repository and submit the URL to it on freeCodeCamp.org.

### **Complete the tasks below:**

1. You should create a database named universe

1. Be sure to connect to your database with \c universe. Then, you should add tables named galaxy, star, planet, and moon

1. Each table should have a primary key

1. Each primary key should automatically increment

1. Each table should have a name column

1. You should use the INT data type for at least two columns that are not a primary or foreign key

1. You should use the NUMERIC data type at least once

1. You should use the TEXT data type at least once

1. You should use the BOOLEAN data type on at least two columns

1. Each "star" should have a foreign key that references one of the rows in galaxy

1. Each "planet" should have a foreign key that references one of the rows in star

1. Each "moon" should have a foreign key that references one of the rows in planet

1. Your database should have at least five tables

1. Each table should have at least three rows

1. The galaxy and star tables should each have at least six rows

1. The planet table should have at least 12 rows

1. The moon table should have at least 20 rows

1. Each table should have at least three columns

1. The galaxy, star, planet, and moon tables should each have at least five columns

1. At least two columns per table should not accept NULL values

1. At least one column from each table should be required to be UNIQUE

1. All columns named name should be of type VARCHAR

1. Each primary key column should follow the naming convention table_name_id. For example, the moon table should have a primary key column named moon_id

1. Each foreign key column should have the same name as the column it is referencing


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

ALTER TABLE planet ADD COLUMN star_id INT UNIQUE NOT NULL REFERENCES star(star_id);

INSERT INTO planet(name, radius_in_km, number_of_moons, distance_from_earth_in_km, is_habitable, star_id) VALUES ('Earth', 6378, 1, 0, TRUE, 1);

- I shall assume a moon can orbit a single planet, and planets can have multiple moons#

ALTER TABLE moon ADD COLUMN planet_id INT UNIQUE REFERENCES planet(planet_id);
INSERT INTO moon(name, is_dwarf_moon, planet_id) VALUES ('The Moon', FALSE, 1);

- The 11th test now passes: Each "moon" should have a foreign key that references one of the rows in planet!

CREATE TABLE planet_type(planet_type_id SERIAL NOT NULL, descriptrion TEXT NOT NULL);

- A planet will have a unique description, so a one-to-one relationship.

ALTER TABLE planet_type ADD COLUMN planet_id INT UNIQUE NOT NULL REFERENCES planet(planet_id);

- Attempting to insert another description for Earth leads to error:

INSERT INTO planet_type(description, planet_id) VALUES ('Rocky planet', 1);ERROR:  duplicate key value violates unique constraint "planet_type_planet_id_key"
DETAIL:  Key (planet_id)=(1) already exists.

- I realised I made a mistake implementing the one-to-many relationships😰


- Inserted 5 more galaxies and stars:

        INSERT INTO galaxy(name) VALUES ('Andromeda'), ('Messier 63'), ('Sembrero'),('Whirlpool'), ('Messier 81');
        
- I realised not all the tests were passing (primary key and name column) due to planet_type table

ALTER TABLE planet_type ADD COLUMN name TEXT;
 ALTER TABLE planet_type ADD PRIMARY KEY(planet_type_id);

 - NOW ll of first 12 tests pass

 - I tried adding a Proxima star for Milky Way galaxy but my constraint won't allow it:

        universe=> INSERT INTO star(name, galaxy_id) VALUES ('Proxima',1);
        ERROR:  duplicate key value violates unique constraint "star_galaxy_id_key"
        DETAIL:  Key (galaxy_id)=(1) already exists.

- Mistakenly dropper unique constraint for planet_type:

        ALTER TABLE planet_type DROP CONSTRAINT planet_type_planet_id_key;
        ALTER TABLE planet_type ADD CONSTRAINT planet_type_planet_id_key UNIQUE(planet_type_id);

- Dropping uniqueness constraint:

        ALTER TABLE star DROP CONSTRAINT star_galaxy_id_key ;

- Successfully inserted more rows without issue:

        INSERT INTO star(name, galaxy_id) VALUES ('Proxima',1);
        INSERT INTO star(name, galaxy_id) VALUES ('Mirach',2),('Adhil',2)
        INSERT INTO star(name, galaxy_id) VALUES ('Nero',3),('Sunflower',3);
         INSERT INTO star(name, galaxy_id) VALUES ('Zenus',4),('Mario',4);

- The 15th test passes!

- Attempting to add another planet:

        universe=> INSERT INTO planet (name, radius_in_km, number_of_moons, distance_from_earth_in_km, is_habitable, star_id) VALUES ('Jupiter', 69991, 80, 71000000, FALSE, 1);
        ERROR:  duplicate key value violates unique constraint "planet_star_id_key"
        DETAIL:  Key (star_id)=(1) already exists.

- I dropped the uniqueness constraint:

        ALTER TABLE planet DROP CONSTRAINT planet_star_id_key;

- Inserted:

        INSERT INTO planet (name, radius_in_km, number_of_moons, distance_from_earth_in_km, is_habitable, star_id) VALUES ('Jupiter', 69991, 80, 71000000, FALSE, 1);
        INSERT INTO planet (name, radius_in_km, number_of_moons, distance_from_earth_in_km, is_habitable, star_id) VALUES ('Proxima B', 6589,7 , 99999999, TRUE, 6);

- Creating more moons:

         INSERT INTO moon(name, is_dwarf_moon,planet_id) VALUES ('Europa', FALSE, 3);


- Attempting to add another moon for Jupiter yhields an error:

        universe=> INSERT INTO moon(name, is_dwarf_moon,planet_id) VALUES ('Callisto', FALSE, 3);
        ERROR:  duplicate key value violates unique constraint "moon_planet_id_key"
        DETAIL:  Key (planet_id)=(3) already exists.

- Dropped constraint:

        ALTER TABLE moon DROP CONSTRAINT moon_planet_id_key;

- Successfully added row:

        INSERT INTO moon(name, is_dwarf_moon,planet_id) VALUES ('Callisto', FALSE, 3);

- Deleted rows from planet_type:

        DELETE FROM planet_type;

Inserting 3 rows:

        INSERT INTO planet_type(name, description, planet_id) VALUES ('Earth description', 'Rocky planet with super conditions',1);

        INSERT INTO planet_type(name, description, planet_id) VALUES ('Jupter description', 'Gas giant planet',3);

        INSERT INTO planet_type(name, description, planet_id) VALUES ('Proxima description', 'Rocky planet with conditions similar to earth',4);

- First 15 Tests now pass!