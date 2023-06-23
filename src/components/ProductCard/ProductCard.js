import './ProductCard.css'

export default function ProductCard( { title, img } ){
    
    return(
        <div className='productCard'>
            <img className='cardImg' width={200} src={'productsImg/'+img}/>
            <div className='cardLabel'>{title}</div>
            <div className='more'>Подробнее </div>
        </div>
    )
}