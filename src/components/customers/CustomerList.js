import React, {useEffect, useState} from "react"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
            .then(res => res.json())
            .then((data) => {
                setCustomers(data)
            })
        },
        []
    )
    return (
        <>
        {customers.map(
            (customer) => {
                return <p key={`customer--${customer.id}`}>{customer.name}</p>
            }
        )}
        </>
    )


}