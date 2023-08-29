import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser";
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
            <h1 className="project-heading" id='contact-us-id' style={{ color: ' #c110ef', paddingLeft: "39px", marginTop: "65px" }}>
                Contact <strong className="purple"> Us </strong>
            </h1>
            <div className="contact-us">


                <form className="form" onSubmit={handleSubmit} ref={form}>
                    <div className="flex">
                        <label>
                            <input required placeholder onChange={(e) => Setname(e.target.value)} type="text" className="input" />
                            <span>first name</span>
                        </label>
                        <label>
                            <input required placeholder onChange={(e) => Setlastname(e.target.value)} type="text" className="input" />
                            <span>last name</span>
                        </label>
                    </div>
                    <label>
                        <input required placeholder onChange={(e) => Setemail(e.target.value)} type="email" className="input" />
                        <span>email</span>
                    </label>
                    <label>
                        <input required type="tel" placeholder onChange={(e) => Setnumbers(e.target.value)} className="input" />
                        <span>contact number</span>
                    </label>
                    <label>
                        <textarea required rows={3} placeholder onChange={(e) => Setsms(e.target.value)} className="input01" defaultValue={""} />
                        <span>message</span>
                    </label>
                    <button className="fancy" >
                        <span className="top-key" />
                        <span className="text">submit</span>
                        <span className="bottom-key-1" />
                        <span className="bottom-key-2" />
                    </button>
                </form>
            </div>
        </>
    )
}

export default Contactus