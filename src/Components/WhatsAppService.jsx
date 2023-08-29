import React from 'react';
import ContactForm from './ContactForm';

const WhatsAppService = ({ sendMessage }) => {
    const sendWhatsAppMessage = (phoneNumber) => {
        const message = 'Thank you for contacting us!';
        const requestBody = JSON.stringify({ phoneNumber, message });

        fetch('/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: requestBody
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Message sent successfully!');
            } else {
                alert('Error sending message.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred.');
        });
    };

    return (
        <div className="whatsapp-service">
            <h2>Contact Us</h2>
            <ContactForm sendMessage={sendWhatsAppMessage} />
        </div>
    );
};

export default WhatsAppService;
