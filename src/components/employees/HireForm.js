import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";


export const HireForm = () => {

    //creates employee object in state
    const [employee, update] = useState({
        name:"",
        locationId:null,
        manager:false,
        fullTime:false,
        hourlyRate: null

    })

    //fetches locations and stores in state
    const [locations, updateLocations] = useState([])
    useEffect(() => {
        fetch("http://localhost:8088/locations")
            .then(response => response.json())
            .then(
                (location) => {
                    updateLocations(location)
                }
            )
    }, [])
    
    
    //ask about
    const history = useHistory()

    const submitEmployee = (evt) => {
        //prevents from 
        evt.preventDefault()
        
        const newEmployee = {
            name: employee.name,
            location: parseInt(employee.locationId),
            manager: employee.manager,
            fullTime: employee.fullTime,
            hourlyRate: parseInt(employee.hourlyRate)
        }
        const fetchOption = {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }
        return fetch("http://localhost:8088/employees", fetchOption)
            .then(() => {
                history.push("/employees")
            })

        }
        return (
            <form className="employeeForm">
                <h2 className="employeeForm_name">New Employee</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Employee Name:</label>
                        <input
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                            onChange={
                                (evt) => {
                                    const copy = { ...employee }
                                    copy.name = evt.target.value
                                    update(copy)
                                }
                            }/>
                    </div>
                </fieldset>
                <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <select  name="location" type="select" defaultValue=""
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.locationId = evt.target.value
                                update(copy)
                            }
                        }>
                            <option  key="" value="" disabled  hidden>Choose a location...</option>
                            {locations.map(location => <option key={location.id} value={location.id}>{location.name}</option>)}
                    
                        
                    </select>

                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="managerStatus">Manager?</label>
                    <input type="checkbox"
                    onChange={
                        (evt) => {
                            const copy = {...employee}
                            copy.manager= evt.target.checked
                            update(copy)
                        }
                    }
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullTimeStatus">Full Time?</label>
                    <input type="checkbox"
                    onChange={
                        (evt) => {
                            const copy = {...employee}
                            copy.fullTime= evt.target.checked
                            update(copy)
                        }
                    }
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourlyRate">Hourly Rate</label>
                    <input type="number" step={1} min={0}
                    onChange={
                        (evt) => {
                            const copy = {...employee}
                            copy.hourlyRate = evt.target.value
                            update(copy)
                        }
                    }
                        />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={submitEmployee}>
                Submit employee
            </button>
            </form>
        )




}