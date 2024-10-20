const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Description for task 1",
        date: "2024-10-21",
        category: "Development",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Description for task 2",
        date: "2024-10-22",
        category: "Testing",
        active: false,
        new_task: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Description for task 3",
        date: "2024-10-23",
        category: "Design",
        active: true,
        new_task: true,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Description for task 1",
        date: "2024-10-24",
        category: "Development",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Description for task 2",
        date: "2024-10-25",
        category: "Testing",
        active: true,
        new_task: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Description for task 3",
        date: "2024-10-26",
        category: "Design",
        active: false,
        new_task: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Description for task 1",
        date: "2024-10-27",
        category: "Development",
        active: false,
        new_task: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Description for task 2",
        date: "2024-10-28",
        category: "Testing",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Description for task 3",
        date: "2024-10-29",
        category: "Design",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Description for task 1",
        date: "2024-10-30",
        category: "Development",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Description for task 2",
        date: "2024-10-31",
        category: "Testing",
        active: true,
        new_task: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Description for task 1",
        date: "2024-11-01",
        category: "Development",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Description for task 2",
        date: "2024-11-02",
        category: "Testing",
        active: true,
        new_task: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Description for task 3",
        date: "2024-11-03",
        category: "Design",
        active: false,
        new_task: false,
        completed: true,
        failed: false,
      },
    ],
  },
];
const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("emoloyees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
setLocalStorage();
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("emoloyees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
