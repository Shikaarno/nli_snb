import React from 'react';
import { Link } from "react-router-dom";

import logoNLI from '../imgs/nli_logo.png';


import './Main.css';


function Main(){
    return(
		<div className="main_wrap">            
			<img className="logo-nli" src={logoNLI} alt="NLI logo"/>            
					
			<h1>Национальная Лига Инструкторов</h1>

			<div className="test"></div>
			
			<div className="greed_bot">				
				<h4>сноуборд</h4>
				<span>краткое</span>
				<span>методическое</span>
				<span>пособие</span>
			<div className="btns">
				<Link className="btn" to="/registration" style={{marginRight: "20px"}}>Регистрация</Link>
				<Link className="btn" to="/contents">Вход</Link>
			</div>							
			</div>
		</div>  
    )
}

export default Main;