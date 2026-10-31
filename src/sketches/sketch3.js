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
        p.frameRate(4)
        p.pixelDensity(1)
        p.background('#00140c')
    }

    p.draw = () => {
        brush.instance(p)
        brush.load(p)
        brush.noField()
        brush.noHatch()
        p.background('hsl(156, 100%, 4%)')
        brush.set("2H", "hsl(29, 100%, 50%)", 8)
        let dimension = Math.min(width, height) / 4
        let points = [
            [0, -height / 6], [-width / 4, height / 6], [width / 4, height / 6]
        ]
        brush.polygon(points)
    }

    p.windowResized = () => {
        width = p.windowWidth
        height = p.windowHeight
        p.resizeCanvas(width, height)
    }
}
