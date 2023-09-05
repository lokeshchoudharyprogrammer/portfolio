import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser";
import githubicon from "../Img/icons8-github-64.png"
import linkdinicon from "../Img/icons8-linkedin-48.png"
const Contactus = () => {
    const form = useRef();
    const [name, Setname] = useState()
    const [lastname, Setlastname] = useState()
    const [email, Setemail] = useState()
    const [numbers, Setnumbers] = useState()
    const [sms, Setsms] = useState()
    const data = {
        name, lastname, email, numbers, sms
    }
    console.clear(data)
    const handleSubmit = (e) => {

        e.preventDefault();
        emailjs.sendForm("service_yweolvv", "template_5ql7boh", form.current, "nPptKc2p8FHQK4bpw").then(
            (result) => {
                alert("Message Sent Successfully");
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
    };
    return (
        <>
            <h1 className="project-heading" id='contact' style={{ color: ' #c110ef', paddingLeft: "39px", marginTop: "65px" }}>
                <strong className="purple"> Contact </strong>
            </h1>
            <div id="contact">
                <a id="contact-linkedin" href="https://www.linkedin.com/in/lokeshchoudharyprogrammer/" target="_blank">
                    <img width="60px" src={githubicon} alt='' />

                </a>
                <a href="https://github.com/lokeshchoudharyprogrammer" target="_blank">
                    <img width="60px" id="contact-github" src={linkdinicon} alt='' />

                </a>
            </div>
            <div class='mail-number'>
                <h3 class="chakra-heading css-9f6g39" id="contact-phone"> Mobile No : +91 6377300329</h3>
                <h3 class="chakra-heading css-9f6g39" id="contact-email">Email : lokeshchoudhary2026@gmail.com</h3>
            </div>
        </>
    )
}

export default Contactus