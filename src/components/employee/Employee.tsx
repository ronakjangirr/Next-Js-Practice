import React from 'react'

function Employee() {
     const employees = [
  { id: 1, name: "Ramesh" },
  { id: 2, name: "Suresh" },
  { id: 3, name: "Mukesh" },
];

  return (
    <div>
    <h1>All Employee</h1>
      <ul>
       {employees.map((employee) => (
          <li key={employee.id}>
            <a href={`/employee/${employee.id}`}>
              {employee.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Employee