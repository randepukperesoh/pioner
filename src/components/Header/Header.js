import './Header.css'

export default function Header(){

    return(
        <div className="header">
            
            <div className='headerUpper'>
                <img width={180} height={38} src='./logo.svg'/>
                <div className='email'>
                    По вопросам и предложениям <span className='accent'>pionerrr@sila.ru</span>
                </div>
                <div className='phone'>
                    Для консультаций <wbr/><div className='accent'>+7-495-456-24-21</div> 
                </div>
            </div>
            <div className='headerDown'> 
                <div className='navBar'>
                    <div className='navElement'> Главная</div>
                    <div className='navElement'> О предприятии</div>
                    <div className='navElement'> Новости</div>
                    <div className='navElement'> Продукция</div>
                    <div className='navElement'> Услуги</div>
                    <div className='navElement'> Поддержка</div>
                    <div className='navElement'> География поставок</div>
                    <div className='navElement'> Контакты</div>
                </div>
                <div className='call'> <img width={16} height={16} src='./Vector.svg'/> ПЕРЕЗВОНИТЕ МНЕ</div>
            </div>
            
        </div>
    )
}