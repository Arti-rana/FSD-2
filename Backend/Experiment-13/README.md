Experiment No. 13 – README

Aim
To develop a backend system using Flask, connect it with a cloud MySQL database (Aiven), perform CRUD operations, and deploy it on a cloud platform.

Description
In this experiment, a backend application was developed using Flask to perform CRUD (Create, Read, Update, Delete) operations on student data.
The backend is connected to a cloud-based MySQL database provided by Aiven.
The application allows managing student records including adding, viewing, updating, and deleting data.
The APIs were tested using Postman and the application was deployed on Render.

Implementation Details

1️⃣ Backend Development
Flask framework was used to build the backend application.
A Student model was created with fields: id, uid, name, and age.
SQLAlchemy ORM was used to interact with the MySQL database.
Marshmallow was used for input validation.

CRUD operations implemented:
Create new student records
Retrieve all and single student data
Update existing student details
Delete student records

Database connection was established using Aiven cloud MySQL with SSL configuration.
Environment variables were used to securely manage database credentials.

2️⃣ API Testing using Postman
POST request used to create student records.
GET request used to fetch all and individual student data.
PUT request used to update student details.
DELETE request used to remove student records.

JSON format was used for request and response.
Proper HTTP status codes were verified.

3️⃣ Deployment on Render
The project was pushed to GitHub repository.
A web service was created on Render.
Environment variables were configured on Render.
Build and start commands were set.
Application was successfully deployed and APIs were accessible via public URL.

Tools & Technologies
Python
Flask
Flask-SQLAlchemy
Marshmallow
MySQL (Aiven Cloud)
REST API
JSON
Postman
Render (Cloud Deployment)
Git & GitHub
VS Code

Learning Outcome
Understood backend development using Flask.
Learned how to connect applications with cloud databases.
Gained experience in implementing CRUD operations using REST APIs.
Learned API testing using Postman.
Understood deployment of backend applications on cloud platforms like Render.
