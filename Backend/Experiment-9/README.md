# Experiment-9

## Aim
To implement authentication using token-based security in a backend application.

---

## Description
In this experiment, token-based authentication was implemented using Flask.  
Users are required to log in to receive an authentication token. This token must be included in protected API requests to access secured resources.

JSON Web Tokens (JWT) were used to ensure secure communication between client and server.

---

## Implementation Details

### 1️⃣ User Authentication System
- Implemented user login functionality.
- User credentials are verified before generating a token.
- On successful login, a JWT token is generated.

### 2️⃣ Token Generation
- Token created using a secret key.
- Token contains encoded user information.
- Token has expiration time for security.

### 3️⃣ Protected Routes
- Certain API routes are protected.
- Token must be included in request headers:
  - Authorization: Bearer <token>
- Server verifies token before allowing access.

### 4️⃣ API Testing using Postman
- POST request used for login.
- Token copied from login response.
- Token added in Authorization header.
- Protected routes tested successfully.
- Invalid or expired tokens return appropriate error responses (401 Unauthorized).

---

## Tools & Technologies

- Python
- Flask
- JSON Web Token (JWT)
- REST API
- Postman
- Git & GitHub
- VS Code

---

## Learning Outcome

- Understood token-based authentication mechanism.
- Learned how JWT works in backend applications.
- Implemented login and protected routes.
- Gained experience in handling secure API requests.
- Understood importance of authentication in REST APIs.