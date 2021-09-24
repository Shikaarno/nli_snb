import Header from "./Header";
import Footer from "./Footer";
import './Contents.css';

import { Link } from "react-router-dom";

function Contents(){

    let chapters = ["Введение (Знакомство, проверка снаряжения, разминка", "Привыкание к снаряжению", "Основная стойка и упражнения на баланс", "Обучение технике падения, вставания, переворота", "Обучение пользованию подъемником", "Соскальзывание вниз по склону", "Боковое соскальзывание", "Поворот с переносом веса", "Поворот с разгрузкой вверх", "Поворот с разгрузкой вниз", "Техническа программа", "Флэт-фристайл"];

    
    return(
        <div className="wrap">
            <Header />
            <div className="content">
                <h3>Оглавление:</h3>
                <ul>
                    {
                        chapters.map((chapter, index) => (<li key={index}>{chapter} <Link className="link" to={`/chap${index + 1}`}>+</Link></li>))
                    }
                </ul>
            </div>
            <Footer />                   
        </div>
    )
}

export default Contents;