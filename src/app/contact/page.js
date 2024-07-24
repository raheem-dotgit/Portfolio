'use client'

import countries from "@/app/contact/countryName";
import {useState} from "react";
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        country: '',
        subject: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/contact/', formData, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'form/json',
                },
            });

        } catch (error) {
            console.error('Error submitting form:', error.message);
        }
    }

    return (

        <body>
        <main className="contact-page">
            <h1 className='h1-contact'><strong>Contact Us</strong></h1>
            <div className="container">
                <form onSubmit={handleSubmit} action="http://localhost:8000/contact/" method="post" id="contactForm">
                    <label htmlFor="fname" className="label">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="fname"
                        name="first_name"
                        placeholder="Your name.."
                        value={formData.first_name}
                        onChange={handleChange}
                    />

                    <label htmlFor="lname" className="label">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lname"
                        name="last_name"
                        placeholder="Your last name.."
                        value={formData.last_name}
                        onChange={handleChange}
                    />

                    <label htmlFor="email" className="label">
                        Email
                    </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="example@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <label htmlFor="country" className="label">
                        Country
                    </label>
                    <select
                        id="country"
                        name="country"
                        className="country--list"
                        value={formData.country}
                        onChange={handleChange}
                    >
                        {countries.map((country, index) => (
                            <option key={index} className="country--list__options">{country}</option>))
                        }
                    </select>
                    <label htmlFor="subject" className="label">
                        Subject
                    </label>
                    <textarea
                        id="subject"
                        name="subject"
                        placeholder="Write something.."
                        value={formData.subject}
                        onChange={handleChange}
                    ></textarea>

                    <input className="btn-contact__page" type="submit" value="Submit"/>
                </form>
            </div>
        </main>
        </body>
    )
}


export default Contact