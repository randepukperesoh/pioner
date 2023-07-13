import './Products.css'
import ProductCard from '../ProductCard/ProductCard'
import { useEffect, useState } from 'react'

export default function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/products')
        .then(data => data.json())
        .then(res => setProducts(res))
        .catch(err => setProducts([{
            id: 'err',
            title: "что-то пошло не так",
            img: 'https://http.cat/images/404.jpg',
            date: Date.now()
        }]))
    },[])

    let arrProducts =[]
    arrProducts = products.map((product)=> {
        return <ProductCard id={product.id} key={'product' + product.id} img={product.img} title={product.title}/>
    })
    
    return(
        <div className='products'>
            <div className='productsLabel'>Продукция</div>
            <div className='productsRow'>
            {arrProducts}
                
            </div>
        </div>
    )
}