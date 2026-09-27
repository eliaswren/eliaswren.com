import { useState, useEffect, useRef } from "react"
import "../../global-styles/SongSelection.css"


/* 

TO DO: 
    - Correct initial behavior (select first song in list)
    - Add hover and selected styling behavior to track selection options. 
*/
export const SongSelection = ({setCurrentTrackPath, setCurrentTrackName, currentTrackName}) => {
    const [currentSelection, setCurrentSelectionWithoutRef] = useState(null)
    const currentSelectionRef = useRef(null)
    const setCurrentSelection = (val) => {
        currentSelectionRef.current = val
        setCurrentSelectionWithoutRef(val)
    }
    useEffect(() => {
        if(currentSelection) {
            currentSelection.style.paddingLeft = "40%"
            currentSelection.style.letterSpacing = "0.175em"
            currentSelection.style.textDecorationColor = "rgba(85, 85, 85, 0.53)"
        }
    }, [currentSelection])

    const [previousSelection, setPreviousSelectionWithoutRef] = useState(null)
    const previousSelectionRef = useRef(null)
    const setPreviousSelection = (val) => {
        previousSelectionRef.current = val
        setPreviousSelectionWithoutRef(val)
    }
    useEffect(() => {
        if (previousSelection) {
            previousSelection.style.paddingLeft = "0px"
            previousSelection.style.letterSpacing = "0"
            previousSelection.style.textDecorationColor = "rgba(0, 0, 0, 0)"
        }
    }, [previousSelection])

    const triggerHoverStyle = (event) => {
        const hoverTarget = event.currentTarget
        const currentSelectionFromRef = currentSelectionRef.current
        if(currentSelectionFromRef && (hoverTarget != currentSelectionFromRef)) {
            currentSelectionFromRef.style.letterSpacing = "0"
            currentSelectionFromRef.style.textDecorationColor = "rgba(0, 0, 0, 0)"
            hoverTarget.style.textDecorationColor = "rgba(85, 85, 85, 0.53)"
            hoverTarget.style.letterSpacing = "0.175em"
        } else if (!currentSelectionFromRef) {
            hoverTarget.style.letterSpacing = "0.175em"
            hoverTarget.style.textDecorationColor = "rgba(85, 85, 85, 0.53)"
        }
    }
    const removeHoverStyle = (event) => {
        const hoverTarget = event.currentTarget
        const currentSelectionFromRef = currentSelectionRef.current
        if(currentSelectionFromRef && (hoverTarget != currentSelectionFromRef)) {
            hoverTarget.style.letterSpacing = "0"
            hoverTarget.style.textDecorationColor = "rgba(0, 0, 0, 0)"
            currentSelectionFromRef.style.letterSpacing = "0.175em"
            currentSelectionFromRef.style.textDecorationColor = "rgba(85, 85, 85, 0.53)"
        } else if (!currentSelectionFromRef) {
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

            <div id="song-select-bode" className="song-selection-element" role="button" onClick={() => {
                if(currentSelection != document.getElementById("song-select-bode")) {
                    updateTrack("/assets/audio/Bode.wav", "Bode")
                    setPreviousSelection(currentSelection)
                    setCurrentSelection(document.getElementById("song-select-bode"))
                }
            }}
            onMouseEnter={triggerHoverStyle}
            onMouseLeave={removeHoverStyle}
            >
                Bode Test
            </div>

            <div id="song-select-randumb" className="song-selection-element" role="button" onClick={() =>{
                if(currentSelection != document.getElementById("song-select-randumb")) {
                    updateTrack("/assets/audio/Randumb.wav", "Randumb")
                    setPreviousSelection(currentSelection)
                    setCurrentSelection(document.getElementById("song-select-randumb"))
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