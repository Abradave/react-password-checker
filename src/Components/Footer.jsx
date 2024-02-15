import './Footer.css'
import PropTypes from 'prop-types';

function Footer(props) {
    const { name, date } = props;

    return ( <footer className="first-footer"><p>Készítette: {name} - dátum: {date}.</p></footer> );
}

Footer.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.date
    
}

export default Footer;