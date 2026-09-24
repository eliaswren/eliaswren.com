import { useState, useEffect } from "react"
import "../../global-styles/SongSelection.css"


/* 

TO DO: 
    - Fix player seeker moving to middle of bar when new song is selected
    - Correct initial behavior (select first song in list)
    - Add hover and selected styling behavior to track selection options. 

    - tmp for git push test

*/
export const SongSelection = ({setCurrentTrackPath, setCurrentTrackName, currentTrackName}) => {
    const [currentSelection, setCurrentSelection] = useState(currentTrackName)
    const [previousSelection, setPreviousSelection] = useState(null)

    useEffect(() => {
        const currentElement = document.getElementById(currentSelection)
        if(currentElement) {
            
            currentElement.style.paddingLeft = "40%"
            currentElement.style.letterSpacing = "15%"
        }
    }, [currentSelection])
    useEffect(() => {
        const previousElement = document.getElementById(previousSelection)
        if (previousElement) {
            previousElement.style.paddingLeft = "0px"
            previousElement.style.letterSpacing = "0"
        }
    }, [previousSelection])

    const updateTrack = (trackPath, trackName) => {
        setCurrentTrackPath(trackPath)
        setCurrentTrackName(trackName)
    }

    return (
        <div id="song-selection-container">

            <div id="song-select-bode" className="song-selection-element" role="button" onClick={() => {
                if(currentSelection != "song-select-bode") {
                    updateTrack("/assets/audio/Bode.wav", "Bode")
                    setPreviousSelection(currentSelection)
                    setCurrentSelection("song-select-bode")
                }
            }}>
                Bode Test
            </div>

            <div id="song-select-randumb" className="song-selection-element" role="button" onClick={() =>{
                if(currentSelection != "song-select-randumb") {
                    updateTrack("/assets/audio/Randumb.wav", "Randumb")
                    setPreviousSelection(currentSelection)
                    setCurrentSelection("song-select-randumb")
                }
            }}>
                Randumb
            </div>

        </div>
    )
}