```
--> Flow : 
  --> App.js in the src folder contains some react code to display the data in the form of table and the data is coming by the API requests sent and fetched the data using the axios .

--> As default, the database is created manually so the API is made to the endpoint of showing
all the students data. Backend.js file in the src contains all the backend API requests as well as the database created to test version-1.

 -> databases are :
  o Student database
  o Admin database
  
--> Structure of database for Student:
      {
        name:
        Classname:
        Rollno:
        Description:
        Image:
        Dob
      }
--> Structure of database for Admin :
      {
        name:
        email:
        mobileno:
        password
      }

--> The API requests are :
o Get all students (GET api)
o Add student in database (POST api)
o Get particular student (GET api)
o Delete a student (DELETE api)

--> Packages used :
    1. express (framework for making the REST API'S).
    2. body-parser (To parse the JSON object).
    3. UseState, UseEffects (for react ).
    4. Axios (for connecting react to express).

```
