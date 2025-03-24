import React, {useState, useEffect} from 'react'

// import style local file can be a style 
import './Contact.css';

import ContactFrom from '../component/ContactForm';

const Contact = () => {

      
    return (
        <>
            <div className="contact-page">
                <h1>contact page</h1>
                <div className="contact-parent">
                    {/* <----------- contact page left site text and heading ---------->  */}
                    <div className="contact-text">
                        <h3>"Get in Touch <br /> We're Here to Help!"</h3>
                        <p>Have questions or need support? Our team is available 24/7 to assist you with orders, returns, and inquiries. Contact us via phone, email, or live chat for quick and reliable service. Your satisfaction is our priority!</p>
                    </div>   {/* .contact-text div end  */}
                    {/* <----------- contact from input field ---------->  */}
                 </div>     {/* .contact-parent div end  */}

                <div className="contact-from-display">
                    <ContactFrom />
                </div>

            </div>  {/* contact-page div stop  */}
        </>
    )
}

export default Contact
