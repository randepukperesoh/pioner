import './Hero.css'

export default function Hero (){

    return(
        <div className="hero">
            <div className='heroInfo'>
                <div className='heroLabel'>Российский завод силовых машин</div>
                <div className='heroAbout'>научно-производственное предприятие, занимающееся разработкой и производством силовых машин.</div>
            </div>
            <img className='heroImg' width={1180}  src='./ehud-neuhaus-wW5854gAm1c-unsplash 1.jpg'/>
        </div>
    )
}