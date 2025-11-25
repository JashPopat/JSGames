import gameImage from './assets/game.png';
import { Link } from "react-router-dom";

function Header () {
    return (
        <>
            <div className="w-full header align-center">
                <img src={gameImage} alt="Hello" className="headerImg"></img>
                <span className='headerBigText'>
                    <h1> <Link to="/">Home </Link></h1> |
                    <h1> <Link to="/blanko">Blanko </Link></h1> |
                    <h1> <Link to="/slido">Slido </Link></h1> |
                    <h1> <Link to="/tetro">Tetro </Link></h1>
                </span>
                <span className='headerSmallText'>
                    <h1> <Link to="/">H </Link></h1> |
                    <h1> <Link to="/blanko">B </Link></h1> |
                    <h1> <Link to="/slido">S </Link></h1> |
                    <h1> <Link to="/tetro">T </Link></h1>
                </span>
            </div>
            <div className="headerUnder">
            </div>
        </>
    )
}

export default Header;