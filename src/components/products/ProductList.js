import React, {useEffect, useState} from "react"

export const ProductList = () => {
    const [products, setProducts] = useState([])

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

    return (
        <>
        {products.map(
            (product) => {
                return <p key={`product--${product.id}`}>A {product.productType.type} called {product.name} sold for {product.price}
                </p>
            }
        )}
        </>
    )
}