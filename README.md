# Employee Management System (EMS)

A modern Employee Management System built with **React.js**, **Context API**, **Tailwind CSS**, and **Local Storage**. The application provides separate dashboards for Admin and Employees, allowing task assignment and task tracking through a clean and responsive user interface.

---

## 📌 Project Overview

The Employee Management System (EMS) is a frontend web application designed to simplify task management between administrators and employees.

The application provides secure login functionality for different user roles, displays personalized dashboards, and manages employee tasks using Local Storage as the data source.

This project demonstrates React fundamentals including Context API, component-based architecture, state management, conditional rendering, and Local Storage integration.

---

## 🚀 Features

### Admin

- Login as Administrator
- View Admin Dashboard
- Create and assign new tasks
- View all employees
- Monitor task statistics of every employee
- Persistent login using Local Storage

### Employee

- Login as Employee
- View personalized dashboard
- View assigned tasks
- View task details
- View task statistics
- Persistent login after page refresh

---

## 🛠 Technologies Used

- React.js
- JavaScript (ES6+)
- Context API
- Tailwind CSS
- HTML5
- CSS3
- Local Storage

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── Auth/
│   ├── Dashboard/
│   ├── TaskList/
│   └── others/
│
├── context/
│   └── AuthProvider.jsx
│
├── utils/
│   └── LocalStorage.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🔑 User Roles

### Admin

- Login Authentication
- Create Tasks
- View Employee Task Report
- Assign Tasks

### Employee

- Login Authentication
- View Assigned Tasks
- View Task Status
- Dashboard Statistics

---

## 📊 Task Status

Each employee task belongs to one of the following categories:

- New Task
- Active Task
- Completed Task
- Failed Task

The dashboard displays the count of each task category.

---

## 🔐 Authentication

The application implements a simple authentication system using Local Storage.

After successful login:

- User information is stored in Local Storage.
- User remains logged in after page refresh.
- Logout removes the stored session.

---

## 💾 Data Storage

The project uses browser Local Storage to store:

- Admin Information
- Employee Information
- Employee Tasks
- Login Session

No external database is required.

---

## ▶️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/employee-management-system.git
```

Move into the project directory

```bash
cd employee-management-system
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Open your browser

```
http://localhost:5173
```

---

## 📌 Default Login Credentials

### Admin

Email

```
admin@example.com
```

Password

```
123
```

### Employee

Example Employee

Email

```
employee1@example.com
```

Password

```
123
```

Other employee accounts are available inside `LocalStorage.jsx`.

---

## 🎯 Learning Objectives

This project demonstrates:

- React Component Architecture
- React Hooks
- useState
- useEffect
- useContext
- Context API
- Conditional Rendering
- Local Storage
- State Management
- Tailwind CSS
- Reusable Components

---

## 🔮 Future Improvements

- Backend Integration
- JWT Authentication
- MongoDB Database
- Node.js & Express API
- Task Editing
- Task Deletion
- Employee CRUD
- Search and Filter
- Charts and Analytics
- Notifications
- Responsive Mobile UI

---

## 👨‍💻 Author

**Vishal Parmar**

Computer Engineering Student

---

## 📄 License

This project is developed for learning purposes and personal portfolio use.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
