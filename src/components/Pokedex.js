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
                    <div className="screenElements">
                        <div className="topLights">
                            <div className="smallRedLight"></div>
                            <div className="smallRedLight"></div>
                        </div>
                        <div className="mainScreen"></div>
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
                            <div className="thinButtonRed"></div>
                            <div className="thinButtonBlue"></div>
                        </div>
                        <div className="greenScreen"></div>
                    </div>
                    <div className="arrows">
                        <div className="horizontal">
                            <div className="leftArrow"></div>
                            <div className="rightArrow"></div>
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
                    <div className="secondaryScreen"></div>
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
                        <div className="smallScreen"></div>
                        <div className="smallScreen"></div>
                    </div>
                </div>
            </div>
            <div className="cuts">
                <div className="cutDrop"></div>
                <div className="cutStraight"></div>
            </div>
        </div>
    )
}

export default Pokedex;