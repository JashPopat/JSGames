import {useState, useEffect, react} from "react"

function Dashboard () {
    const [gamesWon, setGamesWon] = useState(0)
    
    // Fetch initial score from API
    useEffect(() => {
        const fetchInitialScore = async () => {
            try {
                const response = await fetch('https://cgi.cse.unsw.edu.au/~cs6080/raw/data/info.json')
                const data = await response.json()
                console.log(data)
                
                // Check if localStorage is empty
                if (!localStorage.getItem('gamesWon')) {
                    setGamesWon(data.score)
                    localStorage.setItem('gamesWon', data.score)
                } else {
                    // Load from localStorage if it exists
                    setGamesWon(localStorage.getItem('gamesWon'))
                }
            } catch (error) {
                console.error('Error fetching initial score:', error)
                // Fallback: use localStorage or 0 if fetch fails
                const stored = localStorage.getItem('gamesWon')
                setGamesWon(stored ? parseInt(stored) : 0)
            }
        }
        
        fetchInitialScore()
    }, [])
    
    const resetWon = () => {
        localStorage.setItem('gamesWon', '0')
        setGamesWon(0)
        
    }

    return (
        <div className="mainDiv">
            <h1 className = 'dashboardText'>Please choose an option from the navbar</h1>
            <div className="gamesSpan">
                <h1 className = ''>Games won: {gamesWon}</h1>
                <button className = 'resetbtn hover:cursor-pointer' onClick={resetWon}>(Reset)</button>
            </div>
        </div>
    )
        
}

export default Dashboard;