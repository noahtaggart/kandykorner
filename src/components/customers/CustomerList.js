import React, { useEffect, useState } from "react"
import { getCustomers, getPurchases } from "../ApiManager"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    const [purchases, setPurchases] = useState([])
    const [purchasedAmounts, update] = useState([])


    useEffect(
        () => {
            getCustomers()
                .then((data) => {
                    setCustomers(data)
                })
        },
        []
    )

    //get purchases 
    //declare purchases variable
    useEffect(
        () => {
            getPurchases()
                .then((data) => {
                    setPurchases(data)
                })
        },
        []
    )

    //function to set purchase amount for each customer
    useEffect(() => {
        const newCustomerArray = makeNewArray()
            update(newCustomerArray)
        
        }

        
        

    ,[customers, purchases])
    //add to array
    //.sort on that array
    //.sort(customer1, customer2) return customer2 - customer 1


    
    const makeNewArray = () => {
        const newCustomerArray = []
        for (const customer of customers) {
            const newCustomerObject = {}
            const matchedPurchases = purchases.filter(purchase => purchase.customerId === customer.id)
            const amountCustomerPurchased = matchedPurchases.length
            newCustomerObject.id= customer.id
            newCustomerObject.amountPurchased = amountCustomerPurchased
            newCustomerObject.name=customer.name
        
            newCustomerArray.push(newCustomerObject)
        
    }
    return newCustomerArray
}
    const sortedCustomers = purchasedAmounts.sort((customer1, customer2) => customer2.amountPurchased - customer1.amountPurchased)
    
    
    
    
    
    return (
        <>
            <table className="table table-sortable">
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Amount Purchased</th>
                    </tr>
                </thead>
                {sortedCustomers.map(
                    (customer) => {

                        return <tbody key={`customerObject--${customer.id}`}>
                             <tr>
                                <td key={`customer--${ customer.id } `}>{customer.name}</td>
                                <td key={`purchasedAmount--${ customer.id }`}>{customer.amountPurchased}</td>
                            </tr>
                            </tbody>

                    }
                )}
            </table>
        </>
    )


}
