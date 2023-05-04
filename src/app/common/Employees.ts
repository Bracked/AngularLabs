interface Employee {
  id: number,
  name: string,
  lastname: string,
  dateOfBirth: Date,
  salary: number,
  workingHours: number,
}


const employees : Employee[] = 
  [
{
    "id": 1,
    "name": "Ava",
    "lastname": "Garcia",
    "dateOfBirth": new Date("1995-08-12"),
    "salary": 56420,
    "workingHours": 235
  },
  {
    "id": 2,
    "name": "Ethan",
    "lastname": "Chen",
    "dateOfBirth": new Date("1988-06-22"),
    "salary": 67500,
    "workingHours": 385
  },
  {
    "id": 3,
    "name": "Nora",
    "lastname": "Singh",
    "dateOfBirth": new Date("1991-04-30"),
    "salary": 43210,
    "workingHours": 480
  },
  {
    "id": 4,
    "name": "Leo",
    "lastname": "Kim",
    "dateOfBirth": new Date("1998-02-15"),
    "salary": 58700,
    "workingHours": 288
  },
  {
    "id": 5,
    "name": "Maya",
    "lastname": "Wong",
    "dateOfBirth": new Date("1994-11-05"),
    "salary": 46780,
    "workingHours": 435
  },
  {
    "id": 6,
    "name": "Max",
    "lastname": "Hernandez",
    "dateOfBirth": new Date("1985-07-18"),
    "salary": 73200,
    "workingHours": 325
  },
  {
    "id": 7,
    "name": "Lila",
    "lastname": "Gupta",
    "dateOfBirth": new Date("1992-09-08"),
    "salary": 52100,
    "workingHours": 402
  },
  {
    "id": 8,
    "name": "Owen",
    "lastname": "Lee",
    "dateOfBirth": new Date("1989-01-20"),
    "salary": 62100,
    "workingHours": 356
  }
]


export { Employee, employees }