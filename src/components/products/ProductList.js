import React, {useEffect, useState} from "react"
import { useHistory, useParams } from "react-router-dom"

export const ProductList = () => {
    const [products, setProducts] = useState([])
    const history = useHistory()
    const [purchase, update] = useState(
        {
            customerId:  null,
            productId: null,
        }
    )  // State variable for array of purchases
    const { purchaseId } = useParams  // Variable storing the route parameter
    
    //fetches the products
    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId")
            .then(res => res.json())
            .then((data) => {
                setProducts(data)
            })
        },
        []
    )


    const purchaseProduct = (purchaseObject) => {
        const purchase ={
            customerId:  parseInt(localStorage.getItem("kandy_customer")),
            productId: purchaseObject.id
        }


        // Perform the PUT HTTP request to replace the resource
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(purchase)
        }
        return fetch(`http://localhost:8088/purchases`, fetchOption)
            .then(() => {
                history.push("/purchases")
            })
    }


    return (
        <>
        {products.map(
            (product) => {
                return <p key={`product--${product.id}`}>A {product.productType.type} called {product.name} sold for {product.price}
                <button onClick={ () =>                    
                        purchaseProduct(product)}>
                        Purchase</button></p>
            }
        )}
        </>
    )
}