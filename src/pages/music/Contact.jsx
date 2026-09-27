export const Contact = () => {
    /* To do: Actually set up and style the form. Also set it up to cancel redirect and just clear the form fields and add a message sent popup. */
    return (
        <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="37a34c13-b347-4f9f-949d-e8cc870c25c8"/>
            <input type="text" name="name" required/>
            <input type="email" name="email" required/>
            <textarea name="message" required></textarea>
            <button type="submit">Submit Form</button>
        </form>
    )
}