# Learn SQL by Building a Student Database: Part 2


## **1 Recap**

- In the previous tutorial, I created a students database and a script to insert information about students into it.

<hr style="height:1px">

## **2 Rebuilding Database**

- I logged into postgres:

        ~/project$ psql --username=freecodecamp --dbname=postgres
    
- I rebuilt the database from part 1 into the database:

        ~/project$ psql -U postgres < students.sql

- Connected to the newly created database:

        postgres-> \c students

<hr>

## **3 Creating student_info.sh**

- Creating file and adding permissions:

        ~/project$ touch student_info.sh
        ~/project$ chmod +x student_info.sh 

- I initialised the script:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-09-10-15.png)

    <img sr>

    

- I added the following command to correctly format data from postgres:

        PSQL="psql -X --username=freecodecamp --dbname=students --no-align --tuples-only -c"

- Added the following echo:

        echo "First name, last name, and GPA of students with a 4.0 GPA:"

<hr>

## 4 **SQL Queries**

### **4.1 Displaying students with a GPA of 4.0:**

- In the psql terminal, I executed the following query:

        students=> SELECT first_name, last_name, gpa FROM students WHERE gpa=4.0;

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-09-17-20.png)

- I added this query to the student_info.sh script, with surrounding quotes so it prints on new line:

    ![](2022-12-23-09-20-33.png)

- Running the script:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-09-21-10.png)


<br>

### **4.2 Displaying coursers whose first)letter is before 'D' in the alphabet:**

- I added a new echo in the student_info.sh script:

        echo -e "\nAll course names whose first letter is before 'D' in the alphabet:"

- In the psql terminal, I executed the following commands:


    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-09-30-30.png)


    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-09-31-08.png)

- We can see this excluded Database Administration, Data Science and Computer Programming!

- If we wantg to see majors which start with start with a letter before 'G':

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-09-35-08.png)

- I added the following command into my script to find courses which begin with a letter before: 'D':

        echo "$($PSQL "SELECT course FROM courses WHERE course < 'D'")"

- My script at this point looks like:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-09-41-16.png)

- And running the script:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-09-41-45.png)

<br>

### **4.3 Displaying students whose name begins with 'R' or after and GPA less than 2.0 or greater than 3.8**

- I add the following echo:

    echo -e "\nFirst name, last name, and GPA of students whose last name begins with an 'R' or after and have a GPA greater than 3.8 or less than 2.0:"

- Displaying all data in students table:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-09-45-43.png)

- Here's a query which shows students whose name begins with something before M and have a GPA of 3.9:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-09-51-08.png)

- Adding another OR statement where GPA is < 2.3:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-09-52-02.png)

- The above results include names which do not have last names < 'M' ! In order to get the correct result you need brackets:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-10-06-25.png)

- I echoed the above query into the students_info.sh script:

        echo "$($PSQL "SELECT first_name, last_name, gpa FROM students WHERE last_name >= 'R' AND (gpa > 3.8 OR gpa < 2.0)")"

- My script at this point looks like:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-10-09-39.png)

- And executing the script:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-10-10-27.png)

### **4.4 Displaying students whose last name contains 'sa' or have 'r' as second to last character**

- I echoed the following:

        echo -e "\nLast name of students whose last name contains a case insensitive 'sa' or have an 'r' as the second to last letter:"


- To understand how to achieve the above, I do some practice in psql

- Displaying all courses:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-10-31-41.png)

- We will start pattern matching the courses. We can use the **LIKE** keyword to make comparisons. The underscore character _ is a placeholder for ANY character.

    - For example:

        ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-10-37-26.png)

- The percentage character % is a placeholder for string.

    - For example:

        ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-10-40-20.png)

- Trying to display courses beginning with "Web":

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-10-42-56.png)

- Showing courses that have a second letter of "e":

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-10-45-09.png)

- Showing courses with space in their name:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/image.png)

- We can use the keyword NOT LIKE to get non matches! E.g. courses with no spaces:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-10-47-05.png)

- Courses which contain an 'A':

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-10-49-09.png)

- In order to ignore casing, you can use the **ILIKE** keyword. E.g. courses containing a case-insesitive 'A':

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-10-50-29.png)

- Courses which don't contain cases insensitive 'A':

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-10-52-43.png)

- Combining the above, viewing courses which don't have case-insensitive 'A' or spaces:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-10-59-36.png)

- In order to workout the SQL query to execute for this challenge, I created the following:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-11-04-10.png)

- I added the following  statement to the student_info.sh script:

        echo "$($PSQL "SELECT last_name FROM students WHERE last_name ILIKE '%SA%' OR last_name LIKE '%r_'")"

- The script at this point looks like>=:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-11-08-21.png)

- Running the script:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-11-30-32.png)!


### **4.5 Displaying students who have not selected a major and either their first name begins with 'D' or they have a gpa greater than 3.0:**

- I add the following echo:

        echo -e "\nFirst name, last name, and GPA of students who have not selected a major and either their first name begins with 'D' or they have a GPA greater than 3.0:"

- Displaying all data from students table:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-11-33-44.png)

- In order to find students with blank fields, we use the keywords **ISN NULL**. E.g.:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-11-35-13.png)

- Alternatively, we can use **IS NOT NULL** to find non-null fields.

- Viewing students who haven't chosen a major:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-11-36-53.png)

- I come up a with a query to answer the above question:

        SELECT first_name, last_name FROM students WHERE major_id IS NULL AND (first_name LIKE 'D%' OR gpa > 3.0);
                    
- I echo this in my script, and at this point my script looks like:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-11-46-32.png)

- Running the script:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-11-47-29.png)


### **4.6 Course name of first 5 course, in reverse alphabetical order, that have an 'e' as second letter or end with an 's':**

- I added an echo statement:

        echo -e "\nCourse name of the first five courses, in reverse alphabetical order, that have an 'e' as the second letter or end with an 's':"

- We can order the results using the **ORDER BY** keywords. E.g. ordering the students by GPA:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-11-55-19.png)

- By default, ORDER BY has the ASC option on. You can reverse the ordering using DESC option:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-13-10-58.png)

- We can have multiple ordering criteria by adding commas.

- Viewing students with highhest GPA and in alphabetical order of first_name.

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-13-32-11.png)


- Now if students have the same GPA, they will be sorted by first name.

- We can limit the number of rows using the **LIMIT** keyword.

- E.g. showing the top 10 rows of the previous query:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-13-33-39.png)

- The ordering of keywords is important! WHERE must be before ORDER BY. LIMIT must be at the end!

- The query which answers the question of this section is:


- I added the following statement to the students_info.sh script:

        echo "$($PSQL "SELECT course FROM courses WHERE course LIKE '_e%' OR course LIKE '%s' ORDER BY course DESC LIMIT 5")"

- The script up to this point looks like:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-13-43-26.png)

- Running the script:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-13-44-56.png)

### **4.7 Average GPA of all students roundedf to 2 decimal places:**

- I added the following echo to the script:

        echo -e "\nAverage GPA of all students rounded to two decimal places:"

- There a number of mathematical functions within SQL, one is **MIN** which returns the smallesdt value from a column:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-13-48-17.png)

- Another is **MAX**, which returns the largest value of a column:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-13-49-16.png)

- The **SUM** function gives accumulative sum:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-13-50-33.png)

- The **AVG** function returns mean value:

     ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-13-51-59.png)

- We have **CEIL** and **FLOOR** functions:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-13-55-36.png)

- The **ROUND** function, rounds to closest integer:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-13-59-52.png)

- The ROUND function can overloaded to round to specific number of digits:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-14-01-12.png)
    
- The query which answers the above question is:

        SELECT ROUND(AVG(gpa),2) FROM students;

- I added the above query to my script:

        echo "$($PSQL "SELECT ROUND(AVG(gpa),2) FROM students")"

- The script up to this point is:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-14-04-20.png)

- Running the script:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-14-05-20.png)


### **4.8 Displaying total number of students, average GPA for each major_id with more than 1 student:**

- I added the following echo to my script:

        echo -e "\nMajor ID, total number of students in a column named 'number_of_students', and average GPA rounded to two decimal places in a column name 'average_gpa', for each major ID in the students table having a student count greater than 1:"

- The **COUNT** function is used to count number of entries in the table for a column. We can use COUNT(*) instead of specifying the column:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-14-11-47.png)

- Counting number of students:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-14-12-24.png)

- If we want to count non-null entries of a specific column, we can specify the column name in the COUNT function:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-14-14-23.png)

- The **DISTINCT** keyword is used to filter the distinct entries within a table:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-14-16-25.png)

- We can group data by distinct entries using the **GROUP BY** keywords:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-14-19-24.png)

- Displaying major_id and number of students in each major:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-14-21-51.png)

- When using GROUP BY, any columns in the in the selection must be in the GROUP BY.

- Viewing the unique major_id with the lowest GPA scores:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-14-25-59.png)

- Additionally, displaying highest GPAs:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-14-27-20.png)

- An additonal option of GROUP BY is **HAVING**. The HAVING condition must be an aggregate function.

- E.g., displaying rows from previous query where max GPA is 4.0:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-14-30-19.png)

- Attempting to use a non-aggregate function results in an error:

- We can use **aliases** to display user-friendly columns with the **AS** keyword:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-14-37-09.png)    

- Displaying number of students of each major:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-14-39-17.png)

- Showing rows which have less than 8 students:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-14-40-56.png)

- The SQL query which answers the above question is:

        SELECT major_id, COUNT(*) as number_of_students, ROUND(AVG(gpa),2) AS average_gpa FROM students GROUP BY major_id HAVING COUNT(*)>1;

- This produces the following results:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-14-46-50.png)

- I added the query to my bash script:

        echo "$($PSQL "SELECT major_id, COUNT(*) as number_of_students, ROUND(AVG(gpa),2) AS average_gpa FROM students GROUP BY major_id HAVING COUNT(*)>1")"

- The script up to this point looks like:

    ![](/03%20-%20Relational%20Database/06%20-%20Learn%20SQL%20By%20Building%20a%20Student%20Database%20(Part%202)/screenshots/2022-12-23-14-48-12.png)

