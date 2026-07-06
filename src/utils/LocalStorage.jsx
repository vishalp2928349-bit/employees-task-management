const employee = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Landing Page",
        taskDescription: "Revamp the homepage hero section.",
        taskDate: "2026-07-06",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve login validation issue.",
        taskDate: "2026-07-03",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Write API Docs",
        taskDescription: "Document authentication endpoints.",
        taskDate: "2026-07-01",
        category: "Documentation"
      }
    ]
  },
  {
    id: 2,
    firstName: "Vivaan",
    email: "employee2@example.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Build admin dashboard UI.",
        taskDate: "2026-07-07",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize Database",
        taskDescription: "Improve query performance.",
        taskDate: "2026-07-08",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team Meeting",
        taskDescription: "Attend weekly sprint planning.",
        taskDate: "2026-07-02",
        category: "Management"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Update",
        taskDescription: "Deploy version 2.1 to production.",
        taskDate: "2026-06-30",
        category: "DevOps"
      }
    ]
  },
  {
    id: 3,
    firstName: "Aditya",
    email: "employee3@example.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Logo",
        taskDescription: "Create a new logo for the product.",
        taskDate: "2026-07-06",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Review PR",
        taskDescription: "Review frontend pull request.",
        taskDate: "2026-07-04",
        category: "Code Review"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Setup Testing",
        taskDescription: "Configure unit testing framework.",
        taskDate: "2026-07-09",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Client Demo",
        taskDescription: "Present application demo.",
        taskDate: "2026-07-01",
        category: "Presentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix CSS Issues",
        taskDescription: "Resolve responsive layout bugs.",
        taskDate: "2026-07-02",
        category: "Frontend"
      }
    ]
  },
  {
    id: 4,
    firstName: "Krishna",
    email: "employee4@example.com",
    password: "123",
    taskNumber: {
      active: 3,
      newTask: 2,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build REST API",
        taskDescription: "Develop user management endpoints.",
        taskDate: "2026-07-08",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update README",
        taskDescription: "Improve project documentation.",
        taskDate: "2026-07-03",
        category: "Documentation"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement Search",
        taskDescription: "Add search functionality.",
        taskDate: "2026-07-10",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Security Audit",
        taskDescription: "Check for common vulnerabilities.",
        taskDate: "2026-06-29",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Refactor Code",
        taskDescription: "Clean up legacy modules.",
        taskDate: "2026-07-01",
        category: "Development"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Increase code coverage.",
        taskDate: "2026-07-11",
        category: "Testing"
      }
    ]
  },
  {
    id: 5,
    firstName: "Rohan",
    email: "employee5@example.com",
    password: "123",
    taskNumber: {
      active: 3,
      newTask: 2,
      completed: 3,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Presentation",
        taskDescription: "Create slides for client meeting.",
        taskDate: "2026-07-06",
        category: "Presentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Resolve mobile navigation issues.",
        taskDate: "2026-07-02",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Integrate Payment Gateway",
        taskDescription: "Connect Stripe payment API.",
        taskDate: "2026-07-12",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Performance Testing",
        taskDescription: "Stress test the application.",
        taskDate: "2026-06-28",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Customer Feedback Review",
        taskDescription: "Analyze recent customer feedback.",
        taskDate: "2026-07-01",
        category: "Support"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Add Notifications",
        taskDescription: "Implement email notifications.",
        taskDate: "2026-07-13",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Take weekly database backup.",
        taskDate: "2026-07-04",
        category: "Database"
      }
    ]
  }
];

const admins = [
  {
    id: 1,
    firstName: "Vishal",
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employee))
    localStorage.setItem('admin',JSON.stringify(admins))
}


export const getLocalStorage = () => {
    // localStorage.getItem('employees')
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
    
}