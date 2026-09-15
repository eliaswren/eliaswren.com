import { useState} from 'react'
import '../../global-styles/Landing.css'
import '../../global-styles/transitions.css'
import { navigationClassRef } from '../../misc/misc'
import  {Titlebar} from "./Titlebar"
import { CanvasContainer } from './CanvasContainer'
import { Footer } from './Footer'

/* TODO: fix webGL context leakage. */

function Landing() {
	navigationClassRef.updateCurrent("header")

	const [activeInstance, activateInstance] = useState(2)
	return (
		<div id="main-container-landing">
		<Titlebar activateInstance={activateInstance} musicID="music-hover-l" csID="cs-hover-l" headerID="header-l"/>
		<CanvasContainer activeInstance={activeInstance} id="canvas-container"/>
		<Footer/>
		{/*<P5Instance canvasName="test" sketch={sketch1}/>*/}
		</div>
	)
}

export default Landing
