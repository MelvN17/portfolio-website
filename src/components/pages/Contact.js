import React, {useRef} from 'react'
import emailjs from "emailjs-com"
import {MdOutlineEmail, MdLocationOn, MdOutlineSchool} from "react-icons/md";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
        "service_uvgcks8",
        "template_u88tsmr",
        form.current,
        "KkabyKfjj7Jvhmu-e"
    ).then((result) => {
        console.log(result.text);
        alert("The email was sent");
    }, (error) => {
        console.log(error.text);
        alert("An error occured. Please try again");
    });
    e.target.reset();
  };

  return (
    <section className='contact-wrapper' id="contact">
        <h1 className='title'>Contact Form</h1>
        <div className="contact-container">
            <div className="contact-left">
                <h1>Have any <span>questions</span> or just want to <span>talk</span>? Let's chat</h1>
                <div className="horizontal-card">
                    <MdOutlineEmail className='hor-icon'/>
                    <p>melvin.bulan000@gmail.com</p>
                </div>
                <div className="horizontal-card">
                    <MdLocationOn className='hor-icon'/>
                    <p>Minglanilla Cebu, Philippines</p>
                </div>
                <div className="horizontal-card">
                    <MdOutlineSchool className='hor-icon'/>
                    <p>Cebu Institute of Technology - University</p>
                </div>
            </div>
            <div className="contact-right">
                <h1>Send me a message</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" placeholder='NAME'/>
                    <input type="email" name="user_email" placeholder='EMAIL' required/>
                    <textarea name="message" placeholder='MESSAGE' rows="10"/>
                    <input type="submit" value="send"/>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact