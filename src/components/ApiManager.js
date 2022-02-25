export const getCustomers = () => {
    return fetch("http://localhost:8088/customers")
    .then(res => res.json())
}
export const getEmployees = () => {
    return fetch("http://localhost:8088/employees")
    .then(res => res.json())
}

export const getLocations = () => {
    return fetch("http://localhost:8088/locations")
    .then(response => response.json())
}

export const getPurchases = () => {
    return fetch("http://localhost:8088/purchases")
    .then(response => response.json())
}