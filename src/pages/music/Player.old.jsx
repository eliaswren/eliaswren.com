import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export const Player = ({src}) => {
    return (
        <div className="audio-player-container">
            <img src="/assets/img/tmp-cover.png" className="cover-image"/>
            <AudioPlayer src={src} hasDefaultKeyBindings={false}/>
        </div>

    )
}

export const PlayerTest = ({src}) => {
    return (
        <audio src={src}
        controls
        autoPlay={false}
        loop={false}
        className="audio-player"/>
    )
}