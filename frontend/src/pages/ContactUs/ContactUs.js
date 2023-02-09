import React from 'react'
import Header from '../../components/Header/Header'
import "./ContactUs.css"
function ContactUs() {
    return (
        <div>
            <Header />
            <div className="contact-card">
                <h1 className='contact-heading'>Contact</h1>
                <ul className='contact-details'>
                    <li>Phone number : 9999999999</li>
                    <li>Tel number : 0000- 222222</li>
                    <li>Address : 8th Cross Rd, Malleswaram, Bangalore, Karnataka - 560003</li>
                </ul>
            </div>
        </div>

    )
}

export default ContactUs