
import { Link } from "react-router-dom";
import logo from './assets/react.svg';

function Header () {
    return (
        <>
            <div className="headerbar">
                <img src={logo} alt="logo" />
                <h1>Game 2</h1>
            </div>
        </>
    )
}

export default Header;