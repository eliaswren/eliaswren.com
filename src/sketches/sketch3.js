export const sketch3 = (p, brush) => {

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
        container = document.getElementById("sketch3")
        cnv = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL)
        width = p.windowWidth
        height = p.windowHeight
        cnv.parent('sketch3')
        p.frameRate(6)
        p.pixelDensity(1)
        p.background('#03002c')
    }

    p.draw = () => {
        brush.instance(p)
        brush.load(p)
        brush.noField()
        brush.noHatch()
        p.background('#001408')
        brush.set("HB", "#d3b406", 8)
        let dimension = Math.min(width, height) / 4
        //brush.circle(0, 0, dimension)
        //brush.rect(0, 0, dimension, dimension, "center")
        let points = [
            [0, -height / 8], [-width / 4, height / 8], [width / 4, height / 8]
        ]
        brush.polygon(points)
    }

    p.windowResized = () => {
        width = p.windowWidth
        height = p.windowHeight
        p.resizeCanvas(width, height)
    }
}
