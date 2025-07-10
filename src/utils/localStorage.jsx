// localStorage.clear();

const employees = [
  {
    id: 0,
    firstname: "Aarav",
    email: "a@e.com",
    password: "123",
    taskCounts: { active: 2, newtask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: false,
        newtask: true,
        completed: false,
        failed: false,
        tasktitle: "Create User Guides",
        taskdescription: "Write step-by-step guides for key features",
        taskdate: "2025-05-08",
        category: "Documentation",
      },
      {
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        tasktitle: "Design Homepage",
        taskdescription: "Create homepage mockups using Figma",
        taskdate: "2025-05-10",
        category: "Design",
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        tasktitle: "User Persona Research",
        taskdescription: "Define target user groups",
        taskdate: "2025-04-20",
        category: "Research",
      },
      {
        active: false,
        newtask: false,
        completed: false,
        failed: true,
        tasktitle: "Create Style Guide",
        taskdescription: "Document color palettes, typography, and components",
        taskdate: "2025-05-15",
        category: "Design",
      },
    ],
  },
  {
    id: 1,
    firstname: "Vikram",
    email: "v@e.com",
    password: "123",
    taskCounts: { active: 2, newtask: 1, completed: 0, failed: 1 },
    tasks: [
      {
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        tasktitle: "Fix Login Bug",
        taskdescription: "Debug authentication error on staging server",
        taskdate: "2025-05-05",
        category: "Development",
      },
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        tasktitle: "Implement Password Reset",
        taskdescription: "Develop the password reset feature flow",
        taskdate: "2025-05-12",
        category: "Development",
      },
      {
        active: false,
        newtask: false,
        completed: false,
        failed: true,
        tasktitle: "Integrate Payment Gateway",
        taskdescription: "Connect Stripe API for payments (Blocked)",
        taskdate: "2025-04-28",
        category: "Development",
      },
    ],
  },
  {
    id: 2,
    firstname: "Priya",
    email: "p@e.com",
    password: "123",
    taskCounts: { active: 1, newtask: 0, completed: 1, failed: 0 },
    tasks: [
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        tasktitle: "Write API Docs",
        taskdescription: "Document all public API endpoints",
        taskdate: "2025-04-25",
        category: "Documentation",
      },
      {
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        tasktitle: "Create User Guides",
        taskdescription: "Write step-by-step guides for key features",
        taskdate: "2025-05-08",
        category: "Documentation",
      },
    ],
  },
  {
    id: 3,
    firstname: "Rohan",
    email: "r@e.com",
    password: "123",
    taskCounts: { active: 2, newtask: 1, completed: 0, failed: 0 },
    tasks: [
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        tasktitle: "Setup CI/CD Pipeline",
        taskdescription:
          "Configure Jenkins for automated builds and deployments",
        taskdate: "2025-05-18",
        category: "DevOps",
      },
      {
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        tasktitle: "Monitor Server Performance",
        taskdescription: "Track CPU, memory, and network usage",
        taskdate: "2025-05-01",
        category: "DevOps",
      },
    ],
  },
  {
    id: 4,
    firstname: "Sneha",
    email: "s@e.com",
    password: "123",
    taskCounts: { active: 2, newtask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        tasktitle: "Develop Marketing Campaign",
        taskdescription: "Plan social media and email marketing strategy",
        taskdate: "2025-05-20",
        category: "Marketing",
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        tasktitle: "Analyze Competitors",
        taskdescription: "Research competitor products and pricing",
        taskdate: "2025-04-15",
        category: "Marketing",
      },
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        tasktitle: "Create Blog Content",
        taskdescription: "Write blog posts about industry trends",
        taskdate: "2025-05-05",
        category: "Marketing",
      },
    ],
  },
  {
    id: 5,
    firstname: "Arjun",
    email: "a1@e.com",
    password: "123",
    taskCounts: { active: 1, newtask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newtask: true,
        completed: false,
        failed: false,
        tasktitle: "Refactor Database Schema",
        taskdescription: "Optimize database tables for better performance",
        taskdate: "2025-05-25",
        category: "Development",
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        tasktitle: "Code Review: Login Module",
        taskdescription: "Review Vikram's code for the login feature",
        taskdate: "2025-05-06",
        category: "Development",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123 ",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
