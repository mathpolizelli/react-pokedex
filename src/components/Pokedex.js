import { useEffect, useState } from 'react';
import '../styles/Pokedex.scss';

function Pokedex() {
    const [pokeData, setPokeData] = useState({
        pokemon: '',
        id: '',
        sprite: '',
        shiny: '',
        weight: 0,
        height: 0,
        previous: '',
        next: ''
    })
    const [flavorText, setFlavorText] = useState([
        {flavor_text: "Loading", language: {name: "en"}}
    ])
    const [pokeNum, setPokeNum] = useState(1)
    const [isShiny, setIsShiny] = useState(false)
    const [search, setSearch] = useState('')
    let num = 0
    let isFtxtEng = false

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`).then((res) => res.json())
            
            const prev = data.id != 1 ? await fetch(`https://pokeapi.co/api/v2/pokemon/${data.id - 1}`).then((res) => res.json()) : ''
            
            const next = data.id != 905 ? await fetch(`https://pokeapi.co/api/v2/pokemon/${data.id + 1}`).then((res) => res.json()) : ''

            const flavorTxt = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${data.id}/`).then((res) => res.json())
            
            setPokeData({
                pokemon: data.name,
                id: data.id,
                sprite: data.sprites.other["official-artwork"].front_default,
                shiny: data.sprites.other["official-artwork"].front_shiny,
                weight: data.weight,
                height: data.height,
                previous: prev.name,
                next: next.name
            })
            setFlavorText(flavorTxt.flavor_text_entries)
        }
        fetchData();
    }, [pokeNum])

    while (isFtxtEng === false) {
        if (flavorText[num].language.name === "en") {
            isFtxtEng = true
        } else {
            num ++
        }
    }

    let addNum = () => {
        if (pokeNum <= 904) {
            setPokeNum(pokeNum + 1)
        } else {
            setPokeNum(1)
        }
    }

    let subNum = () => {
        if (pokeNum >= 2) {
            setPokeNum(pokeNum - 1)
        } else {
            setPokeNum(905)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        async function fetchData() {
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`).then((res) => res.json()) 
            setPokeNum(data.id) 
        }
        fetchData()
    }

    return(
        <div id="container">
            <form onSubmit={handleSubmit}>
                <input
                    className="searchBar" 
                    type={'search'} 
                    placeholder="Bulbasaur"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <div>
                <div className="leftSide">
                    <div className="topButtons">
                        <div className="blueButton">
                            <div className="lighterBlue"></div>
                            <div className="highlightBlue"></div>
                        </div>
                        <div className="redButton">
                            <div className="lighterRed"></div>
                            <div className="highlightRed"></div>
                        </div>
                        <div className="yellowButton">
                            <div className="lighterYellow"></div>
                            <div className="highlightYellow"></div>
                        </div>
                        <div className="greenButton">
                            <div className="lighterGreen"></div>
                            <div className="highlightGreen"></div>
                        </div>
                    </div>
                    <div className="hinge">
                        <div className="shadow"></div>
                        <div className="cut1"></div>
                        <div className="cut2"></div>
                    </div>
                    <div className="topLine"></div>
                    <div className="midLine"></div>
                    <div className="bottomLine"></div>
                    <div className="whiteFrame">
                        <div className="frameCut"></div>
                        <div className="screenElements">
                            <div className="topLights">
                                <div className="smallRedLight"></div>
                                <div className="smallRedLight"></div>
                            </div>
                            <div className="mainScreen">
                                <img src={isShiny == false ? pokeData.sprite : pokeData.shiny}></img>
                                <div>
                                    <a href={"https://www.pokemon.com/us/pokedex/" + pokeData.pokemon} target="_blank">{pokeData.pokemon} #{pokeData.id}</a>
                                </div>
                            </div>
                            <div className="bottomStuff">
                                <div className="bigRedLight"></div>
                                <div className="speaker"></div>
                            </div>
                        </div>
                    </div>
                    <div className="leftSideBottom">
                        <div className="joystick"></div>
                        <div className="leftSideBottomCenter">
                            <div className="thinButtons">
                                <div className="thinButtonRed" onClick={() => setIsShiny(false)}></div>
                                <div className="thinButtonBlue" onClick={() => setIsShiny(true)}></div>
                            </div>
                            <div className="greenScreen">
                                <p>Height: {pokeData.height / 10}m</p>
                                <p>Weight: {pokeData.weight / 10}kg</p>
                            </div>
                        </div>
                        <div className="arrows">
                            <div className="horizontal">
                                <div className="leftArrow" onClick={subNum}></div>
                                <div className="rightArrow" onClick={addNum}></div>
                            </div>
                            <div className="vertical">
                                <div className="topArrow"></div>
                                <div className="bottomArrow"></div>
                            </div>
                            <div className="center">
                                <div className="centerCircle"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="dropLine"></div>
                    <div className="straightLine"></div>
                    <div className="rightSideElements">
                        <div className="secondaryScreen">
                            <p>{flavorText[num].flavor_text.replace('\u000C', ' ')}</p>
                        </div>
                        <div className="blueButtons">
                            <div className="blueButton"></div>
                            <div className="blueButton"></div>
                            <div className="blueButton"></div>
                            <div className="blueButton"></div>
                            <div className="blueButton"></div>
                            <div className="blueButton"></div>
                            <div className="blueButton"></div>
                            <div className="blueButton"></div>
                            <div className="blueButton"></div>
                            <div className="blueButton"></div>
                        </div>
                        <div className="thinBlackButtons">
                            <div className="thinBlackButton"></div>
                            <div className="thinBlackButton"></div>
                        </div>
                        <div className="whiteButtons">
                            <div className="leftButton"></div>
                            <div className="rightButton"></div>
                        </div>
                        <div className="bigYellowButton">
                            <div className="lighterYellow"></div>
                            <div className="highlightYellow"></div>
                        </div>
                        <div className="smallScreens">
                            <div className="smallScreen">
                                <p className="smallScreenText">{pokeData.previous}</p>
                                <p className="smallScreenText">#{pokeData.id - 1}</p>
                            </div>
                            <div className="smallScreen">
                                <p className="smallScreenText">{pokeData.next}</p>
                                <p className="smallScreenText">#{pokeData.id + 1}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cuts">
                    <div className="cutDrop"></div>
                    <div className="cutStraight"></div>
                </div>
                <form></form>
            </div>
        </div>
    )
}

export default Pokedex;