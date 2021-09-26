import { useHistory } from "react-router-dom";
import './Footer.css';

function Footer(){
    let history = useHistory();
    
    function goBack(){
        history.goBack();
    }
    
    return(
        <div className="footer">
            <button onClick={goBack}>назад</button>
        </div>
    )
}

export default Footer;