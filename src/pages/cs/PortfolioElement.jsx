import { useRef } from "react"
// NOTE: CURRENTLY NONFUNCTIONAL
export const PortfolioElement = () => {
    const dialogRef = useRef(null)
    let dialogOpen = false; 
    const swapDialog = () => {
        if (dialogOpen && dialogRef) {
            dialogRef?.current?.close()
        } else {
            dialogRef?.current?.showModal()
        }
        if(dialogRef){
            dialogOpen = !dialogOpen
        }
    }

    return (
        <div class="dialog-container" ref={dialogRef} role="button" id="open-dialog-button" onClick={swapDialog()}>
            <p>CLICK HERE TO OPEN DIALOG</p>
            <button onClick={swapDialog()}></button>
            <dialog>
                <p role="button" onClick={swapDialog()}> modal dialog window</p>
            </dialog>
        </div>
    )
}