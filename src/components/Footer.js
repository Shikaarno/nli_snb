import { useHistory } from "react-router-dom";

function Footer(){
    let history = useHistory();
    
    function goBack(){
        history.goBack();
    }
    
    return(
        <div>
            <button onClick={goBack}>назад</button>
        </div>
    )
}

export default Footer;