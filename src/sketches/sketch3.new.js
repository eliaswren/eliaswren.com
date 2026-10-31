export const sketch3 = (p, brush) => {

    p.setup = () => {
        container = document.getElementById("sketch3")
        cnv = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL)
        width = p.windowWidth
        height = p.windowHeight
        cnv.parent('sketch3')
        p.frameRate(4)
        p.pixelDensity(1)
        p.background('#00140c')

        // GRID CREATION 

        const rows = windowWidth / 14
        const cols = windowWidth / 14
        const border = 200

        brush.addField("sketch3Field", (t, field) => {
            const n = Math.floor(random(1, 9));
            const dir = Math.floor(random(0, 2)) * 2 - 1;
            const offset = Math.floor(random(40, 101)) + 18 * Math.sin(t * 0.8);
            const attractors = Array.from({ length: n }, () => ({
                x: (random(0.1, 0.9) + 0.06 * Math.sin(t + n)) * field.length,
                y: (random(0.1, 0.9) + 0.06 * Math.cos(t + n)) * field[0].length,
            }));
            for (let c = 0; c < field.length; c++) {
                for (let r = 0; r < field[0].length; r++) {
                let wx = 0;
                let wy = 0;
                for (const att of attractors) {
                    const dx = c - att.x;
                    const dy = r - att.y;
                    const w = 1 / (dx * dx + dy * dy + 1);
                    const a = Math.atan2(dy, dx) * 180 / Math.PI;
                    const angle = dir * (a + offset) * Math.PI / 180;
                    wx += w * Math.cos(angle);
                    wy += w * Math.sin(angle);
                }
                field[c][r] = Math.atan2(wy, wx) * 180 / Math.PI;
                }
            }
            return field;
            }
        )
    }

    p.windowResized = () => {
        width = p.windowWidth
        height = p.windowHeight
        p.resizeCanvas(width, height)
    }

    p.draw = () => {

    }

    brush.instance(p)

}