

## Running SQL in Terminal

MySQL Shell is an advanced client and code editor for MySQL located right in our terminal. Let's open the MySQL Shell. 

  * To start, we navigate to the root directory of our project and then type the following command into the terminal to confirm that the MySQL server is up and running. If successful, `mysql` and a version number will appear. 

    ```sh
    mysql 
    ```

  * Next, we open the MySQL Shell that connects the terminal to the MySQL instance. In the terminal, at the root directory of the project, enter the following command:

    ```sh
    mysql -u root -p
    ```

  * This command tells the MySQL Shell that we want to log in with the root user (-u). The -p stands for "password.". Once we enter this command, we are prompted to enter the password we created when we installed `MySQL`.

  * We write our commands after the prompt. Don't forget, all commands must end with a semi-colon! 

    ```sh
    mysql> CREATE DATABASE demo_db;
    ```
    
  * We can also execute a file that contains a list of commands using `source`

    ```sh
    source schema.sql
    ```

  * To exit the Shell, we type `quit`.

    ```sh
    quit
    ```
    * If the `mysql --version` command returned an error, refer to the  [MySQL Docs Installing MySQL Shell](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-install.html) for installing MySQL on your Mac, Windows on Linux machine.

 ## Working with a Database  

 ### Creating a Database 
<!-- Checks to see if Database with same name already exists.  If so, it drops that database and replaces it with the new database named after CREATE -->
DROP DATABASE IF EXISTS mountains_db;
CREATE DATABASE mountains_db;

[MySQL documentation on creating and selecting a database](https://dev.mysql.com/doc/refman/8.0/en/creating-database.html)

[MySQL documentation on DROP DATABASE](https://dev.mysql.com/doc/refman/8.0/en/drop-database.html)


<!-- The USE statement tells MySQL to use the named database as the default (current) database for subsequent statements. This statement requires some privilege for the database or some object within it.

The named database remains the default until the end of the session or another USE statement is issued: -->

USE books_db;

<!-- -- Creates the table "produce" within inventory_db -- -->
CREATE TABLE produce (
  <!-- -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows -- -->
  id INT NOT NULL,
  <!-- -- Makes a string column called "name" which cannot contain null -- -->
  name VARCHAR(100) NOT NULL
);

The following image demonstrates the web application's appearance and functionality:

![A table called "biographies" contains fields for "id" and "name".](./assets/image_1.png)

###  Working with a Database

