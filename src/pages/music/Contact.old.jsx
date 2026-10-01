import "../../global-styles/Contact.css"

export const Contact = () => {
    /* To do: Actually set up and style the form. Also set it up to cancel redirect and just clear the form fields and add a message sent popup. */
    return (
        <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="37a34c13-b347-4f9f-949d-e8cc870c25c8"/>

            <div id="contact-form-container">
                <div className="contact-form-item">
                    <label for="contact-name-input"> Name </label>
                    <input type="text" name="name"  id="contact-name-input" required/>
                </div>  

                <div className="contact-form-item">
                    <label for="contact-email-imput"> Email </label>
                    <input type="email" name="email" id="contact-email-input" required/>
                </div>

                <div className="contact-form-item">
                    <label for="contact-message-input"> Message </label>
                    <textarea name="message" id="contact-message-input" required></textarea>
                </div>
            </div>

            <button type="submit">Submit Form</button>
        </form>
    )
}