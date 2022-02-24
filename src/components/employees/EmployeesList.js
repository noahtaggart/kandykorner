import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])

    const history = useHistory()

    const deleteEmployee = (id) => {
        fetch(`http://localhost:8088/employees/${id}`, {
            method: "DELETE"
        })
        //makes a copy of employees with id's that do NOT 
        //equal the id being passed through the function
        const copy = employees.filter(employee => {
            return employee.id != id
        })
        changeEmployee(copy)
    }
    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((data) => {
                    changeEmployee(data)
                })
        },
        []
    )

    return (
        <>
        <button onClick={() => history.push("/employees/hire")}>Hire Employee</button>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name}
                        <button onClick={() => {
                                deleteEmployee(employee.id)
                            }}>Fire Employee</button></p>
                    }
                )
            }
        </>
    )




}