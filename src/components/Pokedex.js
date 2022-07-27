import '../styles/Pokedex.scss';

function Pokedex() {
    return(
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
                </div>
            </div>
            <div className="rightSide">
                <div className="dropLine"></div>
                <div className="straightLine"></div>
            </div>
            <div className="cuts">
                <div className="cutDrop"></div>
                <div className="cutStraight"></div>
            </div>
        </div>
    )
}

export default Pokedex;