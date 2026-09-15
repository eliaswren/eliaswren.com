import '../../global-styles/Music.css'
import '../../global-styles/transitions.css'
import { Titlebar } from '../home/Titlebar'
import { dummy, navigationClassRef } from '../../misc/misc'
import { Footer } from '../home/Footer'
import { About } from './About'
import { Video } from './Video'
import { Player } from './Player'
 
const Music = () => {
    navigationClassRef.updateCurrent("music")

    return (
        <div id="main-container-music">
            <Titlebar activateInstance={dummy} musicID="music-hover-m" csID="cs-hover-m" headerID="header-m"/>
            <div id="portfolio-and-demo-reel">
                <div id="portfolio-container">
                    <Player src={null} title="player 1"/>
                    <Player src={null} title="player 2"/>
                    <Player src={null} title="player 3"/>
                    <Player src={null} title="player 4"/>
                    <Player src={null} title="player 5"/>
                    <Player src={null} title="player 6"/>
                    <Player src={null} title="player 7"/>
                    <Player src={null} title="player 8"/>
                </div>
                <div id="demo-reel">
                    <Video videoID="EBw8OMz3DKc"/>
                </div>
            </div>
            <About/>
            <Footer/>
        </div>
    )
}

export default Music



// {/* <div id="works">
//     <div id="audio-players">
//         <p>PRIOR WORK</p>
//         <p>PLAYERS</p>
//     </div>
//     <div id="demo-reel">
//         <p>DEMO REEL</p>
//         <p>VIDEO</p>
//     </div>
//  </div> */}
//     {/* <Player src="/assets/audio/Bode.wav"/>
//     <Video videoId="EBw8OMz3DKc"/> */}


// {/* NEXT TO-DO: CUSTOM AUDIO PLAYER https://css-tricks.com/lets-create-a-custom-audio-player/ */}
// {/* <PlayerTest src="/assets/audio/Bode.wav" /> */}
// <br/>
// <br/>
// <br/>
// <br/>

// <Player src="/assets/audio/Bode.wav" title="bode test"/>

// <br/>
// <br/>
// ABOUT ME
// <br/>
// <br/>
// CONTACT
// {/* {<About />} */}
// <Footer/>

