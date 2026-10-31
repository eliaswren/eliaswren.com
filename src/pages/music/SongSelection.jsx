import { useState, useEffect, useRef } from "react"
import "../../global-styles/SongSelection.css"

export const SongSelection = ({setCurrentTrackPath, setCurrentTrackName, currentTrackName}) => {
    const [currentSelection, setCurrentSelection] = useState(null)
    useEffect(() => {
        if(currentSelection) {
            currentSelection.style.marginLeft = "2vw"
            currentSelection.style.letterSpacing = "0.175em"
            currentSelection.style.textDecorationColor = "rgba(255, 255, 255, 0.534)"
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
            hoverTarget.style.textDecorationColor = "rgba(255, 255, 255, 0.534)"
            hoverTarget.style.letterSpacing = "0.175em"
        } else if (!currentSelection) {
            hoverTarget.style.letterSpacing = "0.175em"
            hoverTarget.style.textDecorationColor = "rgba(255, 255, 255, 0.534)"
        }
    }
    const removeHoverStyle = (event) => {
        const hoverTarget = event.currentTarget
        if(currentSelection && (hoverTarget != currentSelection)) {
            hoverTarget.style.letterSpacing = "0"
            hoverTarget.style.textDecorationColor = "rgba(0, 0, 0, 0)"
            currentSelection.style.letterSpacing = "0.175em"
            currentSelection.style.textDecorationColor = "rgba(255, 255, 255, 0.534)"
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

            {/* <div id="song-select-bode" className="song-selection-element" role="button" onClick={(event) => {
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
            </div> */}

            <div id="song-select-elegy" className="song-selection-element" role="button" onClick={(event) =>{
                if(currentSelection != event.currentTarget) {
                    updateTrack("/assets/audio/GTTOD/Elegy.mp3", "Elegy In The Aftermath")
                    setPreviousSelection(currentSelection)
                    setCurrentSelection(event.currentTarget)
                }
            }}
            onMouseEnter={triggerHoverStyle}
            onMouseLeave={removeHoverStyle}
            >
            Elegy in the Aftermath (GTTOD)
            </div>

            <div id="song-select-spill" className="song-selection-element" role="button" onClick={(event) =>{
                if(currentSelection != event.currentTarget) {
                    updateTrack("/assets/audio/GTTOD/Spill.mp3", "Spill")
                    setPreviousSelection(currentSelection)
                    setCurrentSelection(event.currentTarget)
                }
            }}
            onMouseEnter={triggerHoverStyle}
            onMouseLeave={removeHoverStyle}
            >
                Spill (GTTOD)
            </div>

            <div id="song-select-trailer" className="song-selection-element" role="button" onClick={(event) =>{
                if(currentSelection != event.currentTarget) {
                    updateTrack("/assets/audio/GTTOD/Trailer.mp3", "Early Access Trailer #3")
                    setPreviousSelection(currentSelection)
                    setCurrentSelection(event.currentTarget)
                }
            }}
            onMouseEnter={triggerHoverStyle}
            onMouseLeave={removeHoverStyle}
            >
                Early Access Trailer #3 (GTTOD)
            </div>

            <div id="song-select-ode" className="song-selection-element" role="button" onClick={(event) =>{
                if(currentSelection != event.currentTarget) {
                    updateTrack("/assets/audio/GTTOD/Ode.mp3", "Ode to the End of the World")
                    setPreviousSelection(currentSelection)
                    setCurrentSelection(event.currentTarget)
                }
            }}
            onMouseEnter={triggerHoverStyle}
            onMouseLeave={removeHoverStyle}
            >
                Ode to the End of the World (GTTOD)
            </div>

            <div id="song-select-teleporter" className="song-selection-element" role="button" onClick={(event) =>{
                if(currentSelection != event.currentTarget) {
                    updateTrack("/assets/audio/GTTOD/Teleporter.mp3", "Teleporter Stinger")
                    setPreviousSelection(currentSelection)
                    setCurrentSelection(event.currentTarget)
                }
            }}
            onMouseEnter={triggerHoverStyle}
            onMouseLeave={removeHoverStyle}
            >
                Teleporter Stinger (GTTOD)
            </div>

            <span class="left-align">
                . . . 
            </span>

            <div id="song-select-orchestral-unused" className="song-selection-element" role="button" onClick={(event) =>{
                if(currentSelection != event.currentTarget) {
                    updateTrack("/assets/audio/MISC/OrchestralUnused.mp3", "Orchestral Demo")
                    setPreviousSelection(currentSelection)
                    setCurrentSelection(event.currentTarget)
                }
            }}
            onMouseEnter={triggerHoverStyle}
            onMouseLeave={removeHoverStyle}
            >
                Unused Orchestral Demo
            </div>

        </div>
    )
}