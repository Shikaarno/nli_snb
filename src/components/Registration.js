import Footer from "./Footer";
import Header from "./Header";

import './Registration.css'; 

function Registration(){
    return(
        <div className="wrap">
            <Header />
            <form action="">                
                <input type="text" placeholder="Фамилия"/> <br />
                <input type="text" placeholder="Имя"/> <br />
                <input type="text" placeholder="Ник"/> <br />
                <input type="password" placeholder="Пароль"/> <br />
                <button onClick={(evt) => evt.preventDefault()}>Регистрация</button>
            </form>
            <Footer />
        </div>
    )
}

export default Registration;