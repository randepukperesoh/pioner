import './News.css'
import NewsCard from '../NewsCard/NewsCard'
import { useEffect, useState } from 'react'

export default function News() {

    const [news, setNews] = useState([])

    useEffect(()=> {
       fetch('http://localhost:3001/news')
       .then(data => data.json())
       .then(res => setNews(res))
    },[])

    let arrNews = []

    arrNews = news.map( n => {
        return <NewsCard key={'news' + n.id} img={n.img} title={n.title} date={n.date}/>
    }) 
    return(
        <div className='news'>
            <div className='newsLabel'>Новости</div>
            <div className='newsRow'>
                {arrNews}
            </div>
        </div>
    )
}