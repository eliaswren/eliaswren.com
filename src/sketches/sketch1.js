export const sketch1 = (p, brush) => {

    brush.instance(p)

    let cnv
    let width
    let height
    let container
    const canvasResized = (w, h) => {
        width = w
        height = h
        p.resizeCanvas(w, h)
    }

    p.setup = () => {
        container = document.getElementById("sketch1")
        cnv = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL)
        width = p.windowWidth
        height = p.windowHeight
        cnv.parent('sketch1')
        p.frameRate(6)
        p.pixelDensity(1)
        p.background('#03002c')
    }

    p.draw = () => {
        brush.instance(p)
        brush.load(p)
        brush.noField()
        brush.noHatch()
        p.background('#03002c')
        brush.set("HB", "#fa0000", 8)
        //brush.circle(0, 0, Math.min(p.windowWidth, p.windowHeight) / 4)
        let dimension = Math.min(width, height) / 4
        brush.rect(0, 0, dimension, dimension, "center")
    }

    p.windowResized = () => {
        width = p.windowWidth
        height = p.windowHeight
        p.resizeCanvas(width, height)
    }
}
