import React, { useState } from 'react';


const ContactForm = ({ sendMessage }) => {
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage(phone);
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                required
            />
            <button type="submit">Send Message</button>
        </form>
    );
};

export default ContactForm;
