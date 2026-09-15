import { getWindowHeight, getWindowWidth } from "../../misc/misc"
import { useState } from "react"
import "../../global-styles/Video.css"

export const Video = ({videoID}) => {
    const [windowHeight, setWindowHeight] = useState(getWindowHeight)
    const [windowWidth, setWindowWidth] = useState(getWindowWidth)
    if (typeof window !== "undefined") {
        window.addEventListener("resize", () => {
            setWindowHeight(getWindowHeight())
            setWindowWidth(getWindowWidth())
        })
    }    

    return (
        <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoID}`}
            width={`${Math.max(windowWidth * 0.4, 300)}`}
            height={`${Math.min(windowHeight, 440)}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
            class="video-iframe"
        />
    )
}