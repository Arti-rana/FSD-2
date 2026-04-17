# Testing Suite
## Structure

- `experiment-6/`: Frontend testing with React and Vitest
- `experiment-8/`: Backend testing with Flask and pytest

## Backend Tests (experiment-8)

- **Framework**: Flask
- **Testing**: pytest
- **Routes Tested**: Student CRUD operations (create, read, update, get all, get one)
- **Local Run**:
  ```bash
  cd experiment-8
  python -m venv venv
  source venv/bin/activate
  pip install -r requirements.txt
  pytest
  ```

## Frontend Tests (experiment-6)

- **Framework**: React with Vite
- **Testing**: Vitest
- **Local Run**:
  ```bash
  cd experiment-6
  npm install
  npm run test
  ```

## CI/CD

GitHub Actions workflow (`.github/workflows/ci.yml`) runs backend tests automatically on:

- Push to `main` branch
- Pull requests

Frontend tests are prepared but commented out in the CI config. Uncomment the `frontend-test` job in `ci.yml` to enable them.

## What We Did

1. Set up Flask backend with student management API
2. Wrote pytest tests for backend endpoints
3. Configured GitHub Actions for automated testing
4. Prepared React frontend with Vitest setup
5. Ensured dependencies are properly managed

The CI ensures code quality by running tests on every change.
<img width="1906" height="1019" alt="Screenshot 2026-04-17 125311" src="https://github.com/user-attachments/assets/8eb3f6f1-c7a5-490b-93a5-6cef69c20b24" />
<img width="1904" height="819" alt="Screenshot 2026-04-17 125443" src="https://github.com/user-attachments/assets/c0c75060-6205-4188-b7a3-579e2410ca9d" />
<img width="1919" height="1016" alt="Screenshot 2026-04-17 134519" src="https://github.com/user-attachments/assets/aedbc996-65f9-4632-b2ca-c24b169513c9" />
<img width="927" height="817" alt="Screenshot 2026-04-17 215215" src="https://github.com/user-attachments/assets/472441bf-50ac-47c4-a7da-586f0c80c067" />



