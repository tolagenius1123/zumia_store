import axios from 'axios'
import React, { useEffect, useState } from 'react'
import  polo from '../assets/images/polo.jpg'
import Card from './Card'

const Products = () => {
    const [title, setTitle] = useState("Polo Shirt")
    const [image, setImage] = useState("https://render.fineartamerica.com/images/rendered/default/t-shirt/23/22/images-medium-5/superman-action-shield-brand-a-transparent.png?targetx=0&targety=0&imagewidth=430&imageheight=324&modelwidth=430&modelheight=575")
    const [description, setDescription] = useState("Blue polo shirt")
    const [price, setPrice] = useState("10")
    const [productList, setProductList] = useState([])
    const API_URL = "https://fakestoreapi.com/products"

    console.log(productList);

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        const response = await axios.get(API_URL)
            // .then((response) => {
                // console.log(response.data);
            //     setProductList(response.data)
            //     console.log(productList);
            // })
            .catch((error) => {
                console.log(error.message);
            })
            setProductList(response.data)
    }



    

    return (
        <div className='products'>
            <div className="product-list">
                {productList.map(product => {
                    return (
                        <Card 
                            key={product.id}
                            title={product.title}
                            image={product.image}
                            description={product.description}
                            price={product.price}
                        />
                    )
                })}

            </div>
        </div>
    )
}

export default Products