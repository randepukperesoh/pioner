import './NewsCard.css'

export default function NewsCard( { img, title, date } ) {

    return(
        <div className='newsCard'>
            <img src={'./news/' + img}/>
            <div className='newsCardLabel'> {title} </div>
            <div className='readMore'> Читать далее</div>
            <div className='date'> {date} </div>
        </div>
    )
}