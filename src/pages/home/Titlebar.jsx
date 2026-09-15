import { useState } from "react"
import { Link } from "react-router-dom"
// import { navigationClassRefContext } from "../../misc/misc"
import { navigationClassRef } from "../../misc/misc"
export const Titlebar = ({activateInstance, musicID, csID, headerID}) => {


    // const navigationClassRef = useContext(navigationClassRefContext)

    const classDecider = (className) => {
        return navigationClassRef.current == className ? "current" : navigationClassRef.source == className ? "source" : "idle"
    }

    const [musicClass, setMusicClass] = useState(classDecider("music"))
    const [headerClass, setHeaderClass] = useState(classDecider("header"))
    const [csClass, setCsClass] = useState(classDecider("cs"))

    const swapClassRef = (targetPage) => {
        if(musicClass == "source") {
            setMusicClass("idle")
        } else if (headerClass == "source") {
            setHeaderClass("idle")
        } else if (csClass == "source") {
            setCsClass("idle")
        }

        switch (targetPage) {
            case "music": 
                setMusicClass("target")
                break
            case "header": 
                setHeaderClass("target")
                break
            case "cs": 
                setCsClass("target")
                break        
        }

        if(musicClass == "current") {
            setMusicClass("source")
            navigationClassRef.updateSource("music")
        } else if (headerClass == "current") {
            setHeaderClass("source")
            navigationClassRef.updateSource("header")
        } else if (csClass == "current") {
            setCsClass("source")
            navigationClassRef.updateSource("cs")
        } else {
            throw new Error("No currently active class")
        }
    }

    return (
        <>
        <div id="titlebar">
            <div id="navigation-items">
                <Link id={musicID} 
                    onMouseEnter={() => activateInstance(1)}
                    onMouseLeave={() => activateInstance(2)}
                    to="/music"
                    className={musicClass}
                    onClick={() => swapClassRef("music")}
                    viewTransition>
                    MUSIC
                </Link>

                <Link id={headerID} 
                    to="/" 
                    className={headerClass}
                    onClick={() => swapClassRef("header")}
                    viewTransition>
                ELIAS WREN
                </Link>
                
                <Link id={csID}
                    onMouseEnter={() => activateInstance(3)}
                    onMouseLeave={() => activateInstance(2)}
                    to="/computer-science"
                    className={csClass}
                    onClick={() => swapClassRef("cs")}
                    viewTransition>
                    COMPUTER SCIENCE
                </Link>
            </div>
        </div>
        </>
    )
}