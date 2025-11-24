import gameImage from './assets/game.png';

function header () {
    return (
        <>
            <div className="w-full header align-center">
                <img src={gameImage} alt="Hello" className="headerImg"></img>
                <span className='headerBigText'>
                    <h1>Home</h1> |
                    <h1>Blanko</h1> |
                    <h1>Slido</h1> |
                    <h1>Tetro</h1>
                </span>
                <span className='headerSmallText'>
                    <h1>H</h1> |
                    <h1>B</h1> |
                    <h1>S</h1> |
                    <h1>T</h1>
                </span>
            </div>
            <div className="headerUnder">
            </div>
        </>
    )
}

export default header;