import "../../global-styles/Contact.css"

export const Contact = () => {
    return (
        <div id="contact-form-container">
            <input type="text" id="contact-form-name"/>
            <input type="text" id="contact-form-email"/>
            <textarea id="contact-form-message"/>
            <input type="button" />
        </div>
    )
}