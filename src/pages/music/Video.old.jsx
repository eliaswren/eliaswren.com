import { getWindowHeight, getWindowWidth } from "../../misc/misc"
import { useState } from "react"
import YouTube from "react-youtube"
import "../../global-styles/Video.css"

export const Video = ({videoId}) => {
    const [windowHeight, setWindowHeight] = useState(getWindowHeight)
    const [windowWidth, setWindowWidth] = useState(getWindowWidth)
    if (typeof window !== "undefined") {
        window.addEventListener("resize", () => {
            setWindowHeight(getWindowHeight())
            setWindowWidth(getWindowWidth())
        })
    }    

    const options = {
        height: `${Math.min(windowHeight, 440)}`,
        width: `${Math.max(windowWidth * 0.4, 300)}`,
        playerVars: {
          autoplay: 0,
          controls: 1,
        },
    }

    const onReady = (event) => {
        event.target.pauseVideo()
    }

    return (
        <YouTube videoId={videoId} opts={options} onReady={onReady} className="video-container"/>
    )

}

