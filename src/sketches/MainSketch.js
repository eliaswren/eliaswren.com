import { random } from "p5.brush/standalone"

export const MainSketch = (p, brush) => {

    brush.instance(p)
    let coordinateMod
    let canvas
    let width
    let height
    let circleCalls
    let rectCalls
    let canvasSize

    p.setup = () => {
        canvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL)
        width = p.windowWidth
        height = p.windowHeight
        canvas.parent('MainSketch') // <- requires element ID MainSketch
        p.frameRate(2)
        p.pixelDensity(1)
        p.background('#2c0011')

        initializeFunctionArrays()
    }

    p.draw = () => {
        brush.instance(p)
        brush.load(p)
         
        // Random background clearing 
        if(random(0, 1) > 0.4) {
            p.background('#2c0011')
        }

        // every 15 frames, randomize vector fields.
        if(p.frameCount % 15 == 0 ) {
            canvasSize = random(p.windowWidth, p.windowHeight)
            // Random vector fields
            if(random(0, 1) > 0.5){
                brush.field("columns")
            } else {
                brush.field("spiral")
                
            }

            // No field + coordinate mod
            if(random(0, 1) > 0.3) {
                coordinateMod += random(-2, 2)
                brush.noField()
            }
        }

        callFromFunctionArray(rectCalls)
        callFromFunctionArray(circleCalls)
    }


    p.windowResized = () => {
        width = p.windowWidth
        height = p.windowHeight
        p.resizeCanvas(width, height)
        initializeFunctionArrays()
        p.background('#2c0011')
    }

    const callFromFunctionArray = (functionArray) => {
        if (!functionArray || functionArray.length === 0) {
            return
        }
        let functionIndex = Math.floor(Math.random() * functionArray.length)
        functionArray[functionIndex]()
    }

    const initializeFunctionArrays = () => {
        canvasSize = random(p.windowWidth, p.windowHeight)
        coordinateMod = 0
        let sizeDecision = Math.min(p.windowWidth, p.windowHeight)
        rectCalls = [
            () => { 
            brush.hatch(10, Math.floor(random(15, 53)), {continuous: false})
            brush.set("rotring", "#22d188", 2.5)
            brush.rect(-coordinateMod + canvasSize / 4, coordinateMod + canvasSize / 4, 120, 120, "center")},
            () => {
            brush.hatch(8, Math.floor(random(0, 13)), {continuous: true})
            brush.set("rotring", "#d1ce22", 1.0)
            brush.rect(coordinateMod - canvasSize / 4, -coordinateMod - canvasSize / 4, 20, 20, "center")}, 
            () => {
            brush.hatch(10, Math.floor(random(35, 85)), {continuous: false})
            brush.set("rotring", "#991f70", 1.5)
            brush.rect(coordinateMod + canvasSize / 4, -coordinateMod - canvasSize / 4, 30, 50, "center")},
            () => {
            brush.hatch(10, Math.floor(random(35, 85)), {continuous: false})
            brush.set("rotring", "#130068", 2.5)
            brush.rect(coordinateMod - canvasSize / 4, -coordinateMod + canvasSize / 4, 30, 50, "center")},
        ]

        circleCalls = [
            () => {
            brush.set("HB", "#a8690a", 8)
            brush.hatch(15, Math.floor(random(0, 55)), {continuous: false})
            brush.circle(coordinateMod, -coordinateMod, Math.floor(random(sizeDecision / 6, sizeDecision / 5)))},
            () => {
            brush.set("HB", "#a8a50a", 8)
            brush.hatch(20, Math.floor(random(0, 55)), {continuous: true})
            brush.circle(coordinateMod, -coordinateMod, Math.floor(random(sizeDecision / 6, sizeDecision / 5)))
            brush.set("cpencil", "#6e4b00", 3);
            brush.hatch(20, Math.floor(random(0, 55)), {continuous: true})
            brush.field("curved")
            brush.circle(coordinateMod + random(-45, 45), -coordinateMod + random(-45, 45), Math.floor(random(sizeDecision / 6, sizeDecision / 5)))
            brush.noField()},
        ]
    }
    
}