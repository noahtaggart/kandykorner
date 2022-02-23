import React from "react"
import { Route, Redirect } from "react-router-dom";
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import { LocationList } from "./LocationList/LocationList";

export const KandyKorner = () => (
    <>

        <NavBar />
        <h1>Kandy Korner</h1>
        <ApplicationViews /> 
    </>

)
