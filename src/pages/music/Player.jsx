import { useState, useEffect } from "react"
import "../../global-styles/Player.css"
import { pausePath, playPath, volumeDownPath, volumeUpPath } from '../../misc/misc'
// ref: https://www.youtube.com/watch?v=cw2bJUmiFFU
/*
To Do: 
    - Update volume slider to clickable buttons (top right of player container )
    - Update title to top of player container 
    - Add custom track timeline showing length, current time, etc. 
    Format: 
      --------------------------------------------------------------------
     |   ||   title                                        ~ -------- +   |
     |   0:32 ------------------------------o---------------------- 1:00  |    
      --------------------------------------------------------------------
*/

export const Player = ({src, title}) => {

    const elementID = title.replaceAll(" ", "")
    const audio = document.getElementById(elementID)

    // PLAYBACK CONTROLS
    const [isPlaying, setIsPlaying] = useState(false)
    const playPause = () => {
        setIsPlaying(!isPlaying)
    }
    useEffect(() => {
        if(audio){
            if(!isPlaying){
                audio.pause()
            } else {
                audio.play()
            }
        }
    }, [isPlaying])

    // SLIDER VOLUME CONTROLS
    const [sliderVolume, setSliderVolume] = useState(0.5)
    const setVolume = (event) => {
        setSliderVolume(event.target.value)
    }
    useEffect(() => {
        if(audio) {
            audio.volume = sliderVolume
        }
    }, [sliderVolume])


    // TIME SELECT CONTROLS
    const [currTime, setCurrTime] = useState(0)
    const [newTime, setNewTime] = useState(0)
    const [isSeeking, setIsSeeking] = useState(false)
    const updateCurrTime = () => {
        if (audio) {
            setCurrTime(newTime)
            audio.currentTime = newTime * audio.duration
        }
    } 

    // TIME STRINGS
    const [currSec, setCurrSec] = useState(0)
    const [timeString, setTimeString] = useState("00:00")
    const [durationString, setDurationString] = useState("00:00")
    let date; 
    const parseTime = (seconds) => {
        date = new Date(seconds * 1000)
        const UTCminutes = date.getUTCMinutes()
        const UTCseconds = date.getUTCSeconds()
        return UTCminutes.toString().padStart(2, "0") + ":" + UTCseconds.toString().padStart(2, "0")
    }
    useEffect(() => {
        setTimeString( 
            parseTime(currSec)
        )
    }, [currSec])

    useEffect(() => {
        setIsPlaying(false)
        setNewTime(0)
        setCurrTime(0)
    }, [src])
    
    return (
        <div className="audio-player-container">
            <div className="audio-controls">
                <div className="audio-control-button" role="button" onClick={playPause}>
                    {
                        isPlaying ? 
                        <svg className="audio-control-icon"
                            viewBox="0, 0, 56, 56"
                        >
                            <path d={pausePath}/>
                        </svg> 
                        : 
                        <svg className="audio-control-icon"
                            viewBox="0, 0, 56, 56"
                        >
                            <path d={playPath}/>
                        </svg> 
                    }
                </div>

                <div className="song-info">
                    {title}
                </div>

                <div className="volume-slider-container"> 
                    {/* <svg className="volume-control-icon" viewbox="0, 0, 24, 24">
                        <path d={volumeDownPath}/>
                    </svg> */}
                    <input type="range" min="0" max="1" step="0.01" value={sliderVolume} className="volume-slider" onChange={setVolume}/>  
                    {/* <svg className="volume-control-icon" viewbox="0, 0, 24, 24">
                        <path d={volumeUpPath}/>
                    </svg> */}
                </div>
            </div>

            <div className="track-seeker-container">
                <p className="time-string">{timeString}</p>
                <input
                    type="range"
                    className="track-seeker"
                    value={isSeeking? newTime : currTime}
                    min={0}
                    max={1}
                    step={0.01}
                    onMouseDown={() => {
                        setIsSeeking(true)
                    }}
                    onMouseUp={(event)=> {
                        updateCurrTime(event.currentTarget.value)
                        setIsSeeking(false)
                    }}
                    onChange={(event) => {
                        setNewTime(event.currentTarget.value)
                    }}
                />
                <p className="duration-string">{durationString}</p>
            </div>

            <audio
            src={src}
            controls={false}
            onEnded={() => {
                audio.currentTime = 0
                playPause()
            }}
            onTimeUpdate={(event) => {
                if(!isSeeking) {
                    setCurrTime(event.currentTarget.currentTime / event.currentTarget.duration)
                    setCurrSec(event.currentTarget.currentTime)
                }
            }}
            onLoadedMetadata={(event) => {
                setDurationString(parseTime(event.currentTarget.duration))
                setCurrTime(0)
                setCurrSec(0)
            }}
            id={elementID}
            />
        </div>
    )
} 