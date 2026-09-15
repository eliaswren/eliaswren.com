import React, { useEffect, useRef } from "react"
import p5 from "p5"


// from https://stackoverflow.com/a/71369517
export const P5Instance = React.memo(({canvasName, sketch, instancePipe}) => {
    const p5ContainerRef = useRef(null)
    useEffect(() => {
        let p5Instance

        const initSketch = async () => {
            //console.log("NEW SKETCH CREATED")
            globalThis.p5 = p5;
            const brush = await import('p5.brush');
            p5Instance = new p5((p) => sketch(p, brush), p5ContainerRef.current)
            if(instancePipe) {
                instancePipe(p5Instance)
            }
        }

        initSketch()
        return () => {
            //console.log("SKETCH DELETED")
            // Note: currently does not completely delete webGL Canvases. 
            p5Instance.remove()
        }
    }, [])
    return (<div id={canvasName} ref={p5ContainerRef} className="sketch"/>)
})