import './ProductCard.css'

export default function ProductCard( { id, title, img } ){
    
    return(
        <div className='productCard'>
            <img className='cardImg' width={200} src={ id == 'err' ? img : 'productsImg/'+img}/>
            <div className='cardLabel'>{title}</div>
            <div className='more'>Подробнее </div>
        </div>
    )
}