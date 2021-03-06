import Footer from "../components/Footer";
import Header from "../components/Header";

function Chap7(){
    return(
        <div className="wrap">
            <Header />
            <div className="chap">
                <h1>боковое соскальзывание</h1>
                <h2>ЦЕЛЬ:</h2>
                <p className="point">
                    Научить смене направления движения и преодолению препятствий.
                </p>
                <h3>СКЛОН:</h3>
                Обработанный, со средним уклоном.
                <h3>БЕЗОПАСНОСТЬ:</h3>
                Выбрать широкий просматриваемый участок трассы, избегать направления движения в скопление людей, пропустить катающихся, не контролирующих свой спуск, и только тогда приступить к выполнению упражнения.
                <div className="motion">
                    <span className="motion-span">Описание движений:</span>
                    <ul>
                        <li>Соскальзываем вниз по склону;</li>
                        <li>Слегка развернув бёдра и плечи направо / налево, переносим вес больше на правую / левую ногу (небольшим сгибанием передней ноги и частичным разгибанием задней, одновременно блокируя вертикальное перемещение центра масс), меняем направление движения и соскальзываем на цель (контролируем скорость, распределение веса в ногах, стойку), смотрим вперёд; </li>
                        <li>Переходим в соскальзывание вниз по склону, развернув плечи и бёдра параллельно сноуборду (небольшим разгибанием передней ноги и частичным сгибанием задней, распределяем ве на обе ноги, одновременно блокируя вертикальное перемещение центра масс); </li>
                        <li>Увеличиваем угол закантовки и давление на сноуборд (небольшим сгибанием ног).</li>
                    </ul>                    
                </div>
                <h3>Упражнения (делать в обе стороны):</h3>
                <ul>
                    <li>Сделать имитацию бокового соскальзывания на месте. </li>
                    <li>Сделать переход в боковое соскальзывание из соскальзывания по линии ската.</li>
                    <li>Сделать то же самое упражнение в другую сторону. </li>
                    <li>Сделать боковое соскальзывание в одну и в другую сторону (связать соскальзыванием вниз по склону).</li>
                    <li>Сделать боковое соскальзывание в одну и другую стороны, меняя цель, изменяя расстояние, увеличивая / уменьшая скорость (связать соскальзыванием вниз по склону).</li>
                    <li>Сделать боковое соскальзывание с элементами из технической программы.</li>
                </ul>
                <p className="warn">
                    <span className="warn-span">Важно:</span>
                    - обучать сначала на заднем канте, затем на переднем.
                </p>
                <h3>Проблемы и их решения:</h3>
                <ul className="problems">
                    <li><u>Перенесли</u> вес, а сноуборд движется в противоположном направлении — необходимо повторить имитацию бокового соскальзывания на месте и переносить вес больше по диагонали, повторить проезд.</li>
                    <li><u>Неконтролируемое</u>  боковое соскальзывание — перераспределить вес более равномерно, одновременно увеличить угол закантовки и давление на сноуборд.</li>
                    <li><u>Верхний</u>  кант слишком сильно зарезается в снег — снизить давление на верхний кант, принять более расслабленную стойку и одновременно уменьшить угол закантовки (расслабить стопы).</li>
                    <li><u>Ученик</u>  во время движения смотрит вниз — остановить, скорректировать стойку и продолжить движение.</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Chap7;