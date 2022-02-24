import React from "react";
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList";
import { EmployeeList } from "./employees/EmployeesList";
import { HireForm } from "./employees/HireForm";
import { LocationList } from "./LocationList/LocationList"
import { ProductList } from "./products/ProductList";


export const ApplicationViews = () => {
    return (
        <>
            <Route path="/locations">

                <LocationList />
            </Route>

            <Route path="/products">

                <ProductList />
            </Route>
            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/employees/hire">
                <HireForm />
            </Route>
            <Route path="/customers">
                <CustomerList />
            </Route>


        </>
    )
}