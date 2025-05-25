## 💡 Approach & Brief Explanation

This project was built to simulate a simplified land record search system. My approach focused on clean architecture, modular code, and maintainability. Below is a breakdown of how I structured and solved the assignment:

### 1. Project Structure

The code is organized into clearly separated components:

- `app.js` — Main entry point that sets up Express server and routes
- `routes/search.js` — Contains the `/search` POST API logic
- `db/connection.js` — Handles MySQL database connection
- `pdf/generatePdf.js` — Utility for generating PDF files using PDFKit
- `db/land_records.sql` — SQL script to initialize and seed the MySQL database

---

### 2. Database Layer

I used **MySQL** as a substitute for Apache Doris. The database stores mock land records with fields like `parcel_id`, `plot_number`, `owner_name`, and `location`. I included a SQL script to simplify setup for reviewers.

---

### 3. API Logic

The API exposes a single endpoint:

- **POST /search**:
  - Accepts a JSON input like `{ "query": "Amit Singh" }`
  - Searches the database by parcel ID, plot number, or owner name using SQL `LIKE` query
  - If a match is found, it generates a PDF with the details and returns it as a downloadable response

---

### 4. PDF Generation

To generate the land record summary PDF, I used **PDFKit**, a robust and fast Node.js library. It dynamically adds:

- Owner Name
- Plot Number
- Parcel ID
- Location

The result is streamed back to the client for immediate download.

---

### 5. Error Handling & Feedback

- Handles cases where no results are found with a 404 response
- Logs errors to the console and avoids server crashes
- Clean and minimal response messages

---

### 6. Testing

I tested the application using **Postman** to simulate client requests and download the returned PDFs.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MySQL (using MySQL Workbench)
- PDFKit (for PDF generation)
- Postman (for testing)

---

### ✅ Highlights

- 📄 Generates downloadable PDF output
- 🔍 Supports fuzzy search on 3 fields
- 🔗 MySQL connected with Express API
- 🧪 Fully testable via Postman
- 📦 Clean structure, easy to extend (e.g., user auth, UI frontend)
