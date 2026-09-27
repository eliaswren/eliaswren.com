import { useState, useEffect, useRef } from "react"
import "../../global-styles/SongSelection.css"


/* 

TO DO: 
    - Correct initial behavior ("select a song" prompt or something)
    - fix player styling in CSS
*/
export const SongSelection = ({setCurrentTrackPath, setCurrentTrackName, currentTrackName}) => {
    const [currentSelection, setCurrentSelection] = useState(null)
    useEffect(() => {
        if(currentSelection) {
            currentSelection.style.marginLeft = "6vw"
            currentSelection.style.letterSpacing = "0.175em"
            currentSelection.style.textDecorationColor = "rgba(85, 85, 85, 0.53)"
        }
    }, [currentSelection])

    const [previousSelection, setPreviousSelection] = useState(null)
    useEffect(() => {
        if (previousSelection) {
            previousSelection.style.marginLeft = "0px"
            previousSelection.style.letterSpacing = "0"
            previousSelection.style.textDecorationColor = "rgba(0, 0, 0, 0)"
        }
    }, [previousSelection])

    const triggerHoverStyle = (event) => {
        const hoverTarget = event.currentTarget
        if(currentSelection && (hoverTarget != currentSelection)) {
            currentSelection.style.letterSpacing = "0"
            currentSelection.style.textDecorationColor = "rgba(0, 0, 0, 0)"
            hoverTarget.style.textDecorationColor = "rgba(85, 85, 85, 0.53)"
            hoverTarget.style.letterSpacing = "0.175em"
        } else if (!currentSelection) {
            hoverTarget.style.letterSpacing = "0.175em"
            hoverTarget.style.textDecorationColor = "rgba(85, 85, 85, 0.53)"
        }
    }
    const removeHoverStyle = (event) => {
        const hoverTarget = event.currentTarget
        if(currentSelection && (hoverTarget != currentSelection)) {
            hoverTarget.style.letterSpacing = "0"
            hoverTarget.style.textDecorationColor = "rgba(0, 0, 0, 0)"
            currentSelection.style.letterSpacing = "0.175em"
            currentSelection.style.textDecorationColor = "rgba(85, 85, 85, 0.53)"
        } else if (!currentSelection) {
            hoverTarget.style.letterSpacing = "0"
            hoverTarget.style.textDecorationColor = "rgba(0, 0, 0, 0)"
        }
    }

    const updateTrack = (trackPath, trackName) => {
        setCurrentTrackPath(trackPath)
        setCurrentTrackName(trackName)
    }

    return (
        <div id="song-selection-container">

            <div id="song-select-bode" className="song-selection-element" role="button" onClick={(event) => {
                if(currentSelection != event.currentTarget) {
                    updateTrack("/assets/audio/Bode.wav", "Bode")
                    setPreviousSelection(currentSelection)
                    setCurrentSelection(event.currentTarget)
                }
            }}
            onMouseEnter={triggerHoverStyle}
            onMouseLeave={removeHoverStyle}
            >
                Bode Test
            </div>

            <div id="song-select-randumb" className="song-selection-element" role="button" onClick={(event) =>{
                if(currentSelection != event.currentTarget) {
                    updateTrack("/assets/audio/Randumb.wav", "Randumb")
                    setPreviousSelection(currentSelection)
                    setCurrentSelection(event.currentTarget)
                }
            }}
            onMouseEnter={triggerHoverStyle}
            onMouseLeave={removeHoverStyle}
            >
                Randumb
            </div>

        </div>
    )
}