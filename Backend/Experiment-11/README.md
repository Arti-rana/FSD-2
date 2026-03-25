# Experiment-11

## Aim

To develop a microservice-based backend system using Flask and deploy it on a cloud platform.

---

## Description

In this experiment, two independent microservices were developed using Flask:

- Customer Service
- Order Service

The Customer Service fetches customer details along with their orders by communicating with the Order Service.  
The Order Service manages order data and allows updating of order status.

Both services use in-memory data storage and communicate via REST APIs.  
The APIs were tested using Postman and deployed on Render.

---

## Implementation Details

### 1️⃣ Backend Development

- Flask framework was used to create two microservices.
- Each service runs independently on different ports.
- Customer Service:
  - Fetch customer details
  - Calls Order Service to retrieve orders
- Order Service:
  - Fetch orders by user ID
  - Update order status
- Data stored using in-memory variables.
- Communication between services done using HTTP requests.

---

### 2️⃣ API Testing using Postman

- GET request used to fetch customer orders.
- GET request used to retrieve orders by user.
- PUT request used to update order status.
- JSON format used for request and response.
- Proper status codes verified.

---

### 3️⃣ Deployment on Render

- Both services were pushed to GitHub.
- Separate services created on Render.
- Build and start commands configured.
- Both microservices deployed successfully.
- APIs accessible via public URLs.

---

## Tools & Technologies

- Python
- Flask
- REST API
- JSON
- Postman
- Render (Cloud Deployment)
- Git & GitHub
- VS Code

---

## Learning Outcome

- Understood microservice architecture.
- Learned how multiple services communicate using APIs.
- Gained experience in building independent backend services.
- Learned testing of APIs using Postman.
- Understood deployment of multiple services on Render.
