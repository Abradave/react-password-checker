import PropTypes from "prop-types";
import "./PasswordChecker.css";

const difficulties = [
    {
        className: "weak-password",
        display: "gyenge"
    },
    {
        className: "medium-password",
        display: "közepes"
    },
    {
        className: "strong-password",
        display: "erős"
    }
    
]

function PasswordChecker(props) {
    const {password} = props;
    let difficulty = 0;
    if(password.length < 8){
        difficulty= 0;
    }else if(/^[a-zA-Z]+$/.test(password)){
        difficulty = 1;
    }else{
        difficulty = 2;
    }
    return ( <p>
    A jelszó erőssége: <span className={difficulties[difficulty].className}>{difficulties[difficulty].display}</span>
    </p> );
}

PasswordChecker.propTypes = {
    password: PropTypes.string.isRequired
}
export default PasswordChecker;