import './NewsCard.css'

export default function NewsCard( { id, img, title, date } ) {

    return(
        <div className='newsCard'>
            <img width={380} src={id == 'err' ? img : './news/' + img}/>
            <div className='newsCardLabel'> {title} </div>
            <div className='readMore'> Читать далее</div>
            <div className='date'> {date} </div>
        </div>
    )
}