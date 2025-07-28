// Coded by Umar Mahmud Ahmad with junior dev support from Gemini & ChatGPT 
import React, { useState } from 'react';

const AboutContactPage = () => {
    const [feedback, setFeedback] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFeedback(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Feedback submitted:', feedback);
        setSubmitted(true);
        setFeedback({ name: '', email: '', message: '' });
    };

    return (
        <div className="container my-5">
            {/* About Us Section */}
            <div className="bg-dark text-light p-4 rounded shadow">
                <h1 className="display-4 text-primary mb-3">About Moonlight Events</h1>
                <p className="lead mb-3">
                    MOONLIGHT EVENTS organizes festivals around the world in collaboration with municipalities and local city associations. Our main goal is to spread information about local festivals, discover new talents, and support their creativity.
                </p>
                <p>
                    We believe festivals strengthen young people's understanding of other cultures, develop tolerant attitudes towards cultural differences, and foster respect for ethnic characteristics and unique forms of artistic realization. We are dedicated to encouraging academic, professional, and cultural exchange between groups.
                </p>
            </div>

            {/* Contact Us Section */}
            <div className="bg-dark text-light p-4 rounded shadow mt-5">
                <h1 className="display-4 text-primary mb-3">Contact Information</h1>
                <div className="fs-5">
                    <p><strong>Email:</strong> <a href="mailto:info@moonlightevents.com" className="text-info">info@moonlightevents.com</a></p>
                    <p><strong>Address:</strong> 3rd floor Aptech, Wuse II, Abuja</p>
                    <p><strong>Phone:</strong> +234 812 345 6789</p>
                </div>
            </div>

            {/* Feedback Section */}
            <div className="bg-dark text-light p-4 rounded shadow mt-5">
                <h1 className="display-4 text-primary mb-3">Leave a Feedback</h1>
                {submitted ? (
                    <div className="alert alert-success text-center">
                        <strong>Thank you for your feedback!</strong>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" name="name" id="name" value={feedback.name} onChange={handleInputChange} required className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" name="email" id="email" value={feedback.email} onChange={handleInputChange} required className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea name="message" id="message" rows={4} value={feedback.message} onChange={handleInputChange} required className="form-control"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Submit Feedback</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default AboutContactPage;
