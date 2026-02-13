# 🚀 Employee Management Backend API

A scalable REST API designed to handle **Employee and Department management** with strong relational mapping, optimized queries (joins), and structured request logging.

---

## 🛠️ Technology Stack

- **Server:** Node.js with Express  
- **Database:** PostgreSQL  
- **ORM:** Sequelize  
- **Hosting:** Render  

---

## 🗂️ Data Model Overview

### 👨‍💼 Employee Entity
- `id` (Primary Key)  
- `first_name`  
- `last_name`  
- `email` (Unique)  
- `department_id` (Foreign Key → Department.id)  
- `manager_id` (Self Reference → Employee.id, nullable)  
- `created_at`  
- `updated_at`  

### 🏢 Department Entity
- `id` (Primary Key)  
- `name` (Unique)  

---

## 🌐 API Endpoints

### Employee APIs
```
POST    /api/employees       → Create employee
GET     /api/employees       → Fetch all employees
GET     /api/employees/:id   → Fetch single employee
PUT     /api/employees/:id   → Update employee
DELETE  /api/employees/:id   → Delete employee
```

### Department APIs
```
POST    /api/departments     → Create department
GET     /api/departments     → Fetch all departments
DELETE  /api/departments/:id → Delete department
```

---

## 🧪 Example Request

### ➕ Create Employee
```json
{
  "first_name": "Midhun",
  "last_name": "Mohandas",
  "email": "midhun@gmail.com",
  "department_id": 1,
  "manager_id": null
}
```

---

## 📈 Logging Middleware

Every request is tracked with:

- HTTP Method  
- API Endpoint  
- Status Code  
- Execution Time  

### Sample Log
```
GET /api/employees 200 - 35ms
```

---

## ⚙️ Key Functional Highlights

- 🔗 Maintains relational integrity using foreign keys  
- 🔍 Supports joined queries for enriched employee data  
- 🧠 Self-referencing manager hierarchy  
- 🚫 Prevents invalid operations (like deleting linked records)  
- 📊 Centralized logging for monitoring API performance  

---

## 📌 Deployment

The API is deployed and accessible via Render platform.

---

## 👨‍💻 Developed By

**Midhun Mohandas**
