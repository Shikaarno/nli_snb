import Footer from "../components/Footer";
import Header from "../components/Header";

function Chap3(){
    return(
        <div  className="wrap">
            <Header />
            <div className="chap">
                <h1>основная стойка и упражнения на баланс</h1>
                <h2>ЦЕЛЬ:</h2>
                <p className="point">
                    Обучение основной стойке с упражнениями на баланс
                </p>
                <h3>СКЛОН:</h3>
                Пологий, подготовленный, с контруклоном на выкате.

                <h3>БЕЗОПАСНОСТЬ:</h3>
                Выбрать место с небольшим количеством катающихся, избегать направления движения в скопление людей, пропустить катающихся, не контролирующих свой спуск, и только тогда приступить к выполнению упражнения.

                <h3>Объяснить основную стойку, показать её разновидности, скорректировать её у ученика.</h3>
                <b>Основная стойка на сноуборде (описание):</b>
                <ul>
                    <li>- расслабленная и прямая;</li>
                    <li>- тазобедренные, голеностопные и коленные суставы слегка согнуты;</li>
                    <li>- вес распределен равномерно на обе ноги;</li>
                    <li>- руки немного впереди и встороны от корпуса (слегка согнуты в локтях);</li>
                    <li>- бедра и плечи слегка развернуты в направлении движения;</li>
                    <li>- смотреть вперёд.</li>
                </ul>

                <h3>Сделать упражнения на баланс в спуске прямо с одной пристегнутой ногой (наличие длинного выката или выката с контруклоном обязательно):</h3>
                <ul>
                    <li>Сделать спуск в основной стойке.</li>
                    <li>
                        Сделать спуск, сгибая / разгибая ноги:
                        <ul>
                            <li>- в коленных и голеностопных суставах;</li>
                            <li>- касаясь переднего и заднего ботинка;</li>
                            <li>- касаясь рукой носа / хвоста сноуборда.</li>
                        </ul>
                    </li>
                    <li>Сделать спуск, поднимая / опуская заднюю ногу.</li>
                    <li>Сделать спуск с остановкой j-stop на выкате с выставлением ноги вперед.</li>
                    <li>Сделать полповорота на выкате без выставления ноги (в обе стороны).</li>
                    <li>Сделать спуск с упражнением на отвлечение внимания (подбрасывая перед собой перчатку или снежок).</li>
                </ul>
                <p className="warn">
                    <span className="warn-span">Важно:</span>
                    - принимая основную стойку, быть раскованным, все перечисленные упражнения делать из основной стойки; <br />
                    - если в ГЛЦ все склоны без выката, выбрать наименьший уклон, останавливать обучаемого после выполнения упражнения двумя руками (за бедро и плечо) или удерживать его с момента начала движения (сопровождая ученика) до полной остановки. Адекватно оценивайте свои возможности;<br />
                    - учитывать, что ученики со слабыми координационным спобосбностями нуждаются в большем количестве времени для обучения и неоднократном повторении упражнений;<br />
                    - сделать каждое упражнение сначала на месте, а потом в движении (это затягивает процесс обучения, зато снижает травматизм на групповых занятиях).
                    
                </p>            
            </div>
            <Footer />
        </div>
    )
}

export default Chap3;