import React, { useEffect } from "react" 
import { sketch1 } from '../../sketches/sketch1'
import { sketch2 } from '../../sketches/sketch2'
import { sketch3 } from '../../sketches/sketch3'
import { MainSketch } from '../../sketches/MainSketch'
import { P5Instance } from './P5Instance'

let sketch1P5Instance, mainSketchP5Instance, sketch3P5Instance, loopTimeout

export const CanvasContainer = ({activeInstance}) => {
    useEffect(() => {
        if(!sketch1P5Instance || !mainSketchP5Instance || !sketch3P5Instance ) {
            return
        } 

        clearTimeout(loopTimeout)

        switch (activeInstance) {
            case 1: 
                sketch1P5Instance.loop()
                //console.log("Music Sketch Activated")
                loopTimeout = setTimeout(() => {
                    mainSketchP5Instance.noLoop()
                    sketch3P5Instance.noLoop()
                    //console.log("CS and Main Deactivated")
                }, 150)
                break
            case 2: 
                mainSketchP5Instance.loop()
                //console.log("Main Sketch Activated")
                loopTimeout = setTimeout(() => {
                    sketch1P5Instance.noLoop()
                    sketch3P5Instance.noLoop()
                    //console.log("CS and Music Deactivated")
                }, 150)
                break
            case 3:
                sketch3P5Instance.loop()
                //console.log("CS Sketch Activated")
                loopTimeout = setTimeout(() => {
                    sketch1P5Instance.noLoop()
                    mainSketchP5Instance.noLoop()
                    //console.log("Music and Main Deactivated")
                }, 150)
                break
            default:
                return
        }
    }, [activeInstance])

    return (
        <div id="slider-container">
            <div id="canvas-1" className="canvas">
                <P5Instance canvasName="sketch1" sketch={sketch1} instancePipe={(instance) => {sketch1P5Instance = instance}}/>
            </div>
            <div id="canvas-2" className="canvas">
                {/* {<P5Instance canvasName="sketch2" sketch={sketch2}/>} */}
                <P5Instance canvasName="MainSketch" sketch={MainSketch} instancePipe={(instance) => {mainSketchP5Instance = instance}}/>
            </div>
            <div id="canvas-3" className="canvas">
                <P5Instance canvasName="sketch3" sketch={sketch3} instancePipe={(instance) => {sketch3P5Instance = instance}}/>
            </div>
        </div>
    )
}