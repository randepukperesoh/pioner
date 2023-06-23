import './Foother.css'

export default function Foother(){

    return(
        <div className="foother">
            <img className='whiteLogo' src='./whiteLogo.svg'/>
            <div className='navBarFoother first'>
                <div> Главная</div>
                <div> О предприятии</div>
                <div> Новости</div>
                <div> Продукция</div>
                <div> Услуги</div>
            </div>
            <div className='navBarFoother second'>
                <div> Поддержка</div>
                <div> География поставок</div>
                <div> Контакты</div>
            </div>
            <div className='navBarFoother thirst'>
                <div> Файлы</div>
                <div> Поддержка</div>
                <div> Политика конфеденциальности</div>
            </div>
            <div className='yearCompany'>1994 — 2020 ООО «ПИОНЕР»</div>
        </div>
    )
}