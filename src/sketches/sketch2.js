export const sketch2 = (p, brush) => {
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
        container = document.getElementById("sketch2")
        console.log(container)
        cnv = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL)
        width = p.windowWidth
        height = p.windowHeight
        cnv.parent('sketch2')
        p.frameRate(5)
        p.background('#03002c')
        

        /* 
        const resizeObsever = new ResizeObserver(entries => {
            for(let entry of entries) {
                canvasResized(entry.contentRect.width, entry.contentRect.height)
            }
        })
        */
       
        // let observer = new IntersectionObserver((entries) => {
        //     entries.forEach(entry => {
        //     if (entry.isIntersecting) {
        //         p.loop(); // Resume draw loop when visible
        //     } else {
        //         p.noLoop(); // Pause draw loop when offscreen
        //     }
        //     });
        // });
        
        // // Start observing the underlying DOM element
        // observer.observe(cnv.elt);


    }

    p.draw = () => {
        brush.instance(p)
        brush.load(p)
        brush.noField()
        p.background('#2c0011')
        brush.set("HB", "#a8a50a", 8)
        let dimension = Math.min(width, height) / 4
        brush.circle(0, 0, dimension)
        //brush.rect(0, 0, dimension, dimension, "center")
    }

    p.windowResized = () => {
        width = p.windowWidth
        height = p.windowHeight
        p.resizeCanvas(width, height)
    }
}
