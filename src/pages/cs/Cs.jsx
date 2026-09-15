import { navigationClassRef, dummy } from "../../misc/misc"
import { Titlebar } from "../home/Titlebar"
import { Footer } from "../home/Footer"
import '../../global-styles/transitions.css'
import "../../global-styles/Cs.css"


const CS = () => {
    navigationClassRef.updateCurrent("cs")

    return (
        <div id="main-container-cs">
            <Titlebar activateInstance={dummy} musicID="music-hover-c" csID="cs-hover-c" headerID="header-c"/>
            <Footer/>
        </div>
    )
}

export default CS